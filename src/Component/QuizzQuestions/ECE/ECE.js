import React, { useState } from 'react';
// 1. IMPORT THE NEW CSS MODULE
import styles from './ECE.module.css'; 
import { motion, AnimatePresence } from 'framer-motion';

// 2. UPDATED quizData FOR ECE - 10 Questions
const quizData = [
  {
    question: "What is Ohm's Law?",
    options: [
      "V = IR",
      "P = VI",
      "V = I/R",
      "F = ma"
    ],
    correctAnswer: "V = IR"
  },
  {
    question: "Which of these is known as a 'universal' logic gate?",
    options: [
      "AND",
      "OR",
      "XOR",
      "NAND"
    ],
    correctAnswer: "NAND"
  },
  {
    question: "What does 'AM' stand for in communication systems?",
    options: [
      "Amplitude Modulation",
      "Assigned Megahertz",
      "Analog Mode",
      "Automatic Messaging"
    ],
    correctAnswer: "Amplitude Modulation"
  },
  {
    question: "What is the basic unit of electrical capacitance?",
    options: [
      "Henry",
      "Ohm",
      "Farad",
      "Volt"
    ],
    correctAnswer: "Farad"
  },
  {
    question: "What does 'BJT' stand for in electronics?",
    options: [
      "Basic Junction Test",
      "Bipolar Junction Transistor",
      "Binary Junction Transformer",
      "Broadband Joint Terminal"
    ],
    correctAnswer: "Bipolar Junction Transistor"
  },
  {
    question: "What is the principle behind a transformer's operation?",
    options: [
      "Electrostatic induction",
      "Electromagnetic induction",
      "Piezoelectric effect",
      "Thermoelectric effect"
    ],
    correctAnswer: "Electromagnetic induction"
  },
  {
    question: "Which modulation technique is most resistant to noise?",
    options: [
      "Amplitude Modulation (AM)",
      "Frequency Modulation (FM)",
      "Phase Modulation (PM)",
      "Pulse Modulation"
    ],
    correctAnswer: "Frequency Modulation (FM)"
  },
  {
    question: "What does 'IC' stand for in electronics?",
    options: [
      "Internal Circuit",
      "Integrated Circuit",
      "Insulated Conductor",
      "Impedance Control"
    ],
    correctAnswer: "Integrated Circuit"
  },
  {
    question: "In a diode, current flows from:",
    options: [
      "Cathode to Anode",
      "Anode to Cathode",
      "Both directions equally",
      "Neither direction"
    ],
    correctAnswer: "Anode to Cathode"
  },
  {
    question: "What is the bandwidth of a signal?",
    options: [
      "The maximum frequency of the signal",
      "The difference between highest and lowest frequencies",
      "The average frequency of the signal",
      "The total power of the signal"
    ],
    correctAnswer: "The difference between highest and lowest frequencies"
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
const ECE = () => {
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

// 4. EXPORT THE NEW COMPONENT
export default ECE;