import React, { useState } from 'react';
// 1. IMPORT THE NEW CSS MODULE
import styles from './CSE.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// 2. UPDATED quizData FOR CSE - 10 Questions
const quizData = [
  {
    question: "What does 'SQL' stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Scripted Query Logic",
      "System Query Language"
    ],
    correctAnswer: "Structured Query Language"
  },
  {
    question: "Which data structure operates on the 'Last-In, First-Out' (LIFO) principle?",
    options: [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    correctAnswer: "Stack"
  },
  {
    question: "What is the time complexity of a successful binary search algorithm?",
    options: [
      "O(n)",
      "O(n^2)",
      "O(log n)",
      "O(1)"
    ],
    correctAnswer: "O(log n)"
  },
  {
    question: "In Object-Oriented Programming, what is 'polymorphism'?",
    options: [
      "Hiding complex implementation details",
      "The ability of one class to inherit properties from another",
      "The ability of an object to take on many forms",
      "Binding data and methods into a single unit"
    ],
    correctAnswer: "The ability of an object to take on many forms"
  },
  {
    question: "Which of these is NOT a core component of an Operating System?",
    options: [
      "Kernel",
      "File System",
      "Compiler",
      "Process Management"
    ],
    correctAnswer: "Compiler"
  },
  {
    question: "What is the main purpose of a compiler?",
    options: [
      "To execute programs line by line",
      "To translate high-level code to machine code",
      "To manage memory allocation",
      "To debug programs"
    ],
    correctAnswer: "To translate high-level code to machine code"
  },
  {
    question: "In networking, what does TCP stand for?",
    options: [
      "Transfer Control Protocol",
      "Transmission Control Protocol",
      "Transport Communication Protocol",
      "Technical Control Process"
    ],
    correctAnswer: "Transmission Control Protocol"
  },
  {
    question: "Which sorting algorithm is generally the fastest for large datasets?",
    options: [
      "Bubble Sort",
      "Selection Sort",
      "Quick Sort",
      "Insertion Sort"
    ],
    correctAnswer: "Quick Sort"
  },
  {
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Rapid Access Module",
      "Real Address Memory"
    ],
    correctAnswer: "Random Access Memory"
  },
  {
    question: "In databases, what is a primary key?",
    options: [
      "A key used to encrypt data",
      "A unique identifier for a record",
      "The first column in a table",
      "A foreign key reference"
    ],
    correctAnswer: "A unique identifier for a record"
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

// 3. RENAMED THE COMPONENT
const CSE = () => {
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

// 5. EXPORT THE NEW COMPONENT
export default CSE;