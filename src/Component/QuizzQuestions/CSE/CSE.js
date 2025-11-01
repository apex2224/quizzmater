import React, { useState } from 'react';
// 1. IMPORT THE NEW CSS MODULE
import styles from './CSE.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// 2. UPDATED quizData FOR CSE
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
  }
];

// 3. RENAMED THE COMPONENT
const Cse = () => {
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
            >
              <h2 className={styles.resultsTitle}>Quiz Completed!</h2>
              <p className={styles.resultsText}>
                You scored {answers.score} out of {totalQuestions}
              </p>
              
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
                  {/* 4. UPDATED QUIZ TITLE */}
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
export default Cse;