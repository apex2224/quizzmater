import React, { useState } from 'react';
import styles from './BSCIT.module.css'; 
import { motion, AnimatePresence } from 'framer-motion';

// Updated quizData with 10 questions
const quizData = [
  {
    question: "In database management, what does 'ACID' stand for?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Integrity, Data",
      "Automated, Central, Indexed, Database",
      "Availability, Concurrency, Integrity, Distribution"
    ],
    correctAnswer: "Atomicity, Consistency, Isolation, Durability"
  },
  {
    question: "Which layer of the OSI model is responsible for routing packets between networks?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer"
    ],
    correctAnswer: "Network Layer"
  },
  {
    question: "Which of these is a core principle of Object-Oriented Programming (OOP)?",
    options: [
      "Encapsulation",
      "Global Variables",
      "Sequential Execution",
      "Top-down design"
    ],
    correctAnswer: "Encapsulation"
  },
  {
    question: "What data structure uses a 'First-In, First-Out' (FIFO) approach?",
    options: [
      "Stack",
      "Queue",
      "Tree",
      "Array"
    ],
    correctAnswer: "Queue"
  },
  {
    question: "What is the primary purpose of CSS in web development?",
    options: [
      "To define the structure of the web page",
      "To handle server-side logic",
      "To style and layout the visual presentation",
      "To manage client-side interactivity"
    ],
    correctAnswer: "To style and layout the visual presentation"
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: [
      "Bubble Sort",
      "Insertion Sort",
      "Merge Sort",
      "Selection Sort"
    ],
    correctAnswer: "Merge Sort"
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "System Queue Logic",
      "Standard Query List"
    ],
    correctAnswer: "Structured Query Language"
  },
  {
    question: "In networking, what is the default port number for HTTP?",
    options: [
      "21",
      "80",
      "443",
      "8080"
    ],
    correctAnswer: "80"
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: [
      "String",
      "Boolean",
      "Character",
      "Number"
    ],
    correctAnswer: "Character"
  },
  {
    question: "What does API stand for in software development?",
    options: [
      "Advanced Programming Interface",
      "Application Programming Interface",
      "Automated Process Integration",
      "Application Process Interaction"
    ],
    correctAnswer: "Application Programming Interface"
  }
];

// Score code mapping (4-digit codes for each score 0-10)
const scoreCodeMap = {
  0: "1024",
  1: "2048",
  2: "3072",
  3: "4096",
  4: "5120",
  5: "6144",
  6: "7168",
  7: "8192",
  8: "9216",
  9: "9999",
  10: "1234"
};

const BSCIT = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  const [direction, setDirection] = useState('forward');

  const totalQuestions = quizData.length;

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
    setDirection('forward');
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    setError('');
    setDirection('backward');
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
                <p className={styles.codeValue}>{scoreCodeMap[answers.score]}</p>
              </div>

              <button
                onClick={handleRestart}
                className={styles.submitButton}
                style={{ width: '100%', marginTop: '2rem' }}
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

export default BSCIT;