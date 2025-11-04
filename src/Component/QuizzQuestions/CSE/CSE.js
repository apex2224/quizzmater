import React, { useState, useEffect } from "react";
// 1. IMPORT THE NEW CSS MODULE
import { csedata1 } from "./csedata1";
import { csedata2 } from "./csedata2";
import { csedata3 } from "./csedata3";

import styles from "./CSE.module.css";
import { motion, AnimatePresence } from "framer-motion";

// Use the scoreCodeMap from csedata1 (they're identical in all files)
import { getCodeForScore } from "./csedata1";

// Fisher-Yates shuffle algorithm to randomize the quiz data
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to get a random subset of questions
const getRandomQuestions = (array, count = 10) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

// Combine all the imported data into one quizData array
const allQuizData = [...csedata1, ...csedata2, ...csedata3];

// 3. RENAMED THE COMPONENT
const CSE = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState("forward");
  const [quizData, setQuizData] = useState([]); // Store the current quiz data in state

  const totalQuestions = quizData.length;

  const questionVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "forward" ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "forward" ? -100 : 100,
      transition: { duration: 0.3, ease: "easeInOut" },
    }),
  };

  const errorShake = {
    shake: {
      x: [0, -8, 8, -8, 8, 0],
      transition: { duration: 0.4 },
    },
  };

  // Set 10 random questions on component mount or restart
  useEffect(() => {
    setQuizData(getRandomQuestions(allQuizData, 10));
  }, []);

  const handleOptionSelect = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option,
    });
    setError("");
  };

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      setError("Please select an answer before proceeding.");
      return;
    }
    setError("");
    setDirection("forward");
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    setError("");
    setDirection("backward");
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (answers[currentQuestion] === undefined) {
      setError("Please select an answer to submit the quiz.");
      return;
    }
    let score = 0;
    for (let i = 0; i < totalQuestions; i++) {
      if (answers[i] === quizData[i].correctAnswer) {
        score++;
      }
    }
    setAnswers({ ...answers, score: score });
    setShowResults(true);
  };

  const handleRestart = () => {
    // Set 10 new random questions when restarting the quiz
    setQuizData(getRandomQuestions(allQuizData, 10));
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setError("");
    setDirection("forward");
  };

  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  // Don't render anything until quizData is loaded
  if (quizData.length === 0) {
    return (
      <div className={styles.quizContainer}>
        <div className={styles.quizCard}>
          <div className={styles.loadingSpinner}>Loading quiz...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quizContainer}>
      <motion.div
        className={styles.quizCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {showResults ? (
            // --- RESULTS SCREEN ---
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.resultsContainer}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={styles.congratsIcon}
              >
                🎉
              </motion.div>
              <h2 className={styles.resultsTitle}>Congratulations!</h2>
              <p className={styles.congratsText}>You Win!</p>

              <div className={styles.codeDisplay}>
                <p className={styles.codeLabel}>Your Code:</p>
                <p className={styles.codeValue}>
                  {getCodeForScore(answers.score)}
                </p>
              </div>

              <button
                onClick={handleRestart}
                className={styles.submitButton}
                style={{ width: "100%", marginTop: "2rem" }}
              >
                Thank You
              </button>
            </motion.div>
          ) : (
            // --- QUIZ SCREEN ---
            <motion.div key="quiz">
              <div className={styles.progressBarContainer}>
                <motion.div
                  className={styles.progressBar}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className={styles.questionProgress}>
                Question {currentQuestion + 1} of {totalQuestions}
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentQuestion}
                  custom={direction}
                  variants={questionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.questionWrapper}
                >
                  <h3 className={styles.questionText}>
                    {quizData[currentQuestion].question}
                  </h3>
                  <div className={styles.optionsContainer}>
                    {quizData[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className={`${styles.optionButton} ${
                          answers[currentQuestion] === option
                            ? styles.selectedOption
                            : ""
                        }`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {error && (
                  <motion.p
                    className={styles.errorText}
                    variants={errorShake}
                    animate="shake"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className={styles.navigationButtons}>
                {currentQuestion > 0 && (
                  <button onClick={handleBack} className={styles.backButton}>
                    Back
                  </button>
                )}
                {currentQuestion < totalQuestions - 1 ? (
                  <button onClick={handleNext} className={styles.submitButton}>
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className={styles.submitButton}
                  >
                    Submit
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// 5. EXPORT THE NEW COMPONENT
export default CSE;
