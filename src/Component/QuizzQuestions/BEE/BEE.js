import React, { useState } from 'react';
// 1. IMPORT THE NEW CSS MODULE
import styles from './BEE.module.css'; 
import { motion, AnimatePresence } from 'framer-motion';

// 2. UPDATED quizData FOR BEE - 10 Questions
const quizData = [
  {
    question: "What does Kirchhoff's Current Law (KCL) state?",
    options: [
      "The sum of voltages in a closed loop is zero",
      "The sum of currents entering a node is zero",
      "Voltage is directly proportional to current",
      "Power is the product of voltage and current"
    ],
    correctAnswer: "The sum of currents entering a node is zero"
  },
  {
    question: "What is the primary function of a transformer?",
    options: [
      "To convert AC to DC",
      "To store electrical energy",
      "To change AC voltage levels",
      "To block DC and pass AC"
    ],
    correctAnswer: "To change AC voltage levels"
  },
  {
    question: "Which of these is NOT a primary type of AC motor?",
    options: [
      "Induction Motor",
      "Synchronous Motor",
      "DC Motor",
      "Reluctance Motor"
    ],
    correctAnswer: "DC Motor"
  },
  {
    question: "In a three-phase power system, what is the standard phase difference between each phase?",
    options: [
      "90 degrees",
      "180 degrees",
      "45 degrees",
      "120 degrees"
    ],
    correctAnswer: "120 degrees"
  },
  {
    question: "What device is used to convert an analog signal into a digital signal?",
    options: [
      "DAC (Digital-to-Analog Converter)",
      "Op-Amp (Operational Amplifier)",
      "ADC (Analog-to-Digital Converter)",
      "Multiplexer (MUX)"
    ],
    correctAnswer: "ADC (Analog-to-Digital Converter)"
  },
  {
    question: "What is the unit of electrical resistance?",
    options: [
      "Ampere",
      "Ohm",
      "Volt",
      "Watt"
    ],
    correctAnswer: "Ohm"
  },
  {
    question: "Which law states that the induced EMF in a circuit is proportional to the rate of change of magnetic flux?",
    options: [
      "Ohm's Law",
      "Faraday's Law",
      "Lenz's Law",
      "Ampere's Law"
    ],
    correctAnswer: "Faraday's Law"
  },
  {
    question: "What type of circuit element stores energy in a magnetic field?",
    options: [
      "Capacitor",
      "Resistor",
      "Inductor",
      "Diode"
    ],
    correctAnswer: "Inductor"
  },
  {
    question: "In power systems, what does 'power factor' represent?",
    options: [
      "The ratio of real power to apparent power",
      "The total power consumed",
      "The voltage drop across a line",
      "The frequency of the AC supply"
    ],
    correctAnswer: "The ratio of real power to apparent power"
  },
  {
    question: "What is the primary advantage of a DC motor over an AC motor?",
    options: [
      "Lower maintenance requirements",
      "Better speed control",
      "Higher efficiency",
      "Simpler construction"
    ],
    correctAnswer: "Better speed control"
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
const BEE = () => {
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
export default BEE;