import React, { useState } from 'react';
import styles from './DigitalMarketing.module.css';
// Import framer-motion for animations
import { motion, AnimatePresence } from 'framer-motion';

const quizData = [
  {
    question: "What does 'SEO' stand for?",
    options: [
      "Search Engine Optimization",
      "Social Engagement optimization",
      "Site Engine Operations",
      "Search Entry Object"
    ],
    correctAnswer: "Search Engine Optimization"
  },
  {
    question: "Which of the following is NOT a social media platform?",
    options: [
      "Facebook",
      "LinkedIn",
      "Google Analytics",
      "Instagram"
    ],
    correctAnswer: "Google Analytics"
  },
  {
    question: "What is 'PPC' in digital marketing?",
    options: [
      "Product Placement Cost",
      "Pay-Per-Click",
      "Public-Private Co-operation",
      "Page Post Content"
    ],
    correctAnswer: "Pay-Per-Click"
  },
  {
    question: "What is the primary goal of Content Marketing?",
    options: [
      "To attract and retain a clearly defined audience",
      "To sell products directly",
      "To increase website server speed",
      "To design logos"
    ],
    correctAnswer: "To attract and retain a clearly defined audience"
  },
  {
    question: "Which metric measures how many users clicked on your ad?",
    options: [
      "Impressions",
      "Reach",
      "Conversion Rate",
      "Click-Through Rate (CTR)"
    ],
    correctAnswer: "Click-Through Rate (CTR)"
  }
];

const DigitalMarketing = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  // New state to track animation direction
  const [direction, setDirection] = useState('forward');

  const totalQuestions = quizData.length;

  // Animation variants for sliding questions
  const questionVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'forward' ? 100 : -100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'forward' ? -100 : 100,
      transition: { duration: 0.3, ease: 'easeInOut' }
    })
  };
  
  // Animation for the error message shake
  const errorShake = {
    shake: {
      x: [0, -8, 8, -8, 8, 0],
      transition: { duration: 0.4 }
    }
  };

  const handleOptionSelect = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option
    });
    setError('');
  };

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      setError('Please select an answer before proceeding.');
      return;
    }
    setError('');
    setDirection('forward'); // Set direction for animation
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    setError('');
    setDirection('backward'); // Set direction for animation
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (answers[currentQuestion] === undefined) {
      setError('Please select an answer to submit the quiz.');
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
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setError('');
    setDirection('forward');
  };

  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className={styles.quizContainer}>
      {/* 1. Animate the card loading */}
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
            >
              <h2 className={styles.resultsTitle}>Quiz Completed!</h2>
              <p className={styles.resultsText}>
                You scored {answers.score} out of {totalQuestions}
              </p>
              
              {/* 3. Detailed Results Breakdown */}
              <div className={styles.resultsBreakdown}>
                {quizData.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  return (
                    <div key={index} className={styles.resultItem}>
                      <p className={styles.resultQuestion}>
                        {index + 1}. {question.question}
                      </p>
                      <p className={`${styles.resultAnswer} ${isCorrect ? styles.correct : styles.incorrect}`}>
                        Your answer: {userAnswer || "No answer"}
                      </p>
                      {!isCorrect && (
                        <p className={`${styles.resultAnswer} ${styles.correct}`}>
                          Correct answer: {question.correctAnswer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleRestart}
                className={styles.submitButton}
                style={{ width: '100%', marginTop: '1rem' }}
              >
                Try Again
              </button>
            </motion.div>
          ) : (
            // --- QUIZ SCREEN ---
            <motion.div key="quiz">
              {/* 2. Professional Progress Bar */}
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
              
              {/* AnimatePresence wraps the changing question */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  // This key is CRITICAL for React to know the component changed
                  key={currentQuestion}
                  custom={direction}
                  variants={questionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={styles.questionWrapper}
                >
                  <h3 className={styles.questionText}>{quizData[currentQuestion].question}</h3>
                  <div className={styles.optionsContainer}>
                    {quizData[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className={`${styles.optionButton} ${
                          answers[currentQuestion] === option ? styles.selectedOption : ''
                        }`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Animate the error message */}
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
                  <button onClick={handleSubmit} className={styles.submitButton}>
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

export default DigitalMarketing;