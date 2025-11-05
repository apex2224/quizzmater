import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// 1. IMPORT THE NEW CSS MODULE
import cseData from "./CSEData";

import styles from "./CSE.module.css";
import { motion, AnimatePresence } from "framer-motion";



// Function to get a random subset of questions by difficulty levels
const getRandomQuestions = (data, count = 12) => {
  // Separate questions by difficulty level
  const easyQuestions = data.filter((q) => q.level === "easy");
  const mediumQuestions = data.filter((q) => q.level === "medium");
  const hardQuestions = data.filter((q) => q.level === "hard");

  // Select 4 random easy questions
  const shuffledEasy = [...easyQuestions];
  for (let i = shuffledEasy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledEasy[i], shuffledEasy[j]] = [shuffledEasy[j], shuffledEasy[i]];
  }
  const selectedEasy = shuffledEasy.slice(0, 4);

  // Combine medium and hard questions
  const mediumAndHard = [...mediumQuestions, ...hardQuestions];

  // Shuffle medium and hard questions
  const shuffledMediumHard = [...mediumAndHard];
  for (let i = shuffledMediumHard.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledMediumHard[i], shuffledMediumHard[j]] = [
      shuffledMediumHard[j],
      shuffledMediumHard[i],
    ];
  }

  // Select remaining questions to make up 12 total (8 in this case)
  const selectedMediumHard = shuffledMediumHard.slice(0, count - 4);

  // Combine and shuffle all selected questions
  const allSelected = [...selectedEasy, ...selectedMediumHard];
  for (let i = allSelected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allSelected[i], allSelected[j]] = [allSelected[j], allSelected[i]];
  }

  return allSelected;
};

// Use the cseData directly
const allQuizData = cseData;

// 3. RENAMED THE COMPONENT
const CSE = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState("forward");
  const [quizData, setQuizData] = useState([]); // Store the current quiz data in state
  const [timeLeft, setTimeLeft] = useState(10); // Timer for each question
  const [isDisqualified, setIsDisqualified] = useState(false); // Track if user is disqualified

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

  // Timer effect for each question
  useEffect(() => {
    if (
      quizData.length > 0 &&
      currentQuestion < totalQuestions &&
      !isDisqualified
    ) {
      // Reset timer when question changes
      setTimeLeft(10);

      // Start the timer
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            // Check if no answer was selected
            if (answers[currentQuestion] === undefined) {
              setIsDisqualified(true);
            }
            return 0;
          }
          // Stop timer if answer is selected
          if (answers[currentQuestion] !== undefined) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      // Cleanup function to clear interval when component unmounts or dependencies change
      return () => clearInterval(timer);
    }
  }, [currentQuestion, quizData, totalQuestions, answers, isDisqualified]);

  // Set 12 random questions with 4 easy and 8 mixed medium/hard on component mount or restart
  useEffect(() => {
    setQuizData(getRandomQuestions(allQuizData, 12));
  }, []);

  const handleOptionSelect = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option,
    });
    setError("");

    // Clear timer early if user selects an answer
    setTimeLeft(0);
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
      if (answers[i] === quizData[i].answer) {
        // Fixed: using 'answer' field instead of 'correctAnswer'
        score++;
      }
    }
    setAnswers({ ...answers, score: score });
    setShowResults(true);
  };

  const handleRestart = () => {
    navigate("/");
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

  // Show disqualified screen if disqualified
  if (isDisqualified) {
    return (
      <div className={styles.quizContainer}>
        <motion.div
          className={styles.quizCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            key="disqualified"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.resultsContainer}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={styles.congratsIcon}
            >
              ❌
            </motion.div>
            <h2 className={styles.resultsTitle}>Time's Up!</h2>
            <p className={styles.congratsText}>You have been disqualified</p>

            <div className={styles.codeDisplay}>
              <p className={styles.codeLabel}>You ran out of time</p>
            </div>

            <button
              onClick={handleRestart}
              className={styles.submitButton}
              style={{ width: "100%", marginTop: "2rem" }}
            >
              Try Again
            </button>
          </motion.div>
        </motion.div>
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
                <p className={styles.codeLabel}>Your Score:</p>
                <p className={styles.codeValue}>
                  {answers.score}/{quizData.length}
                </p>
                <p className={styles.scoreMessage}>
                  {answers.score <= 3
                    ? "Fair!"
                    : answers.score <= 8
                    ? "Good!"
                    : "Superb!"}
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
                <span className={styles.timer}>Time left: {timeLeft}s</span>
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
