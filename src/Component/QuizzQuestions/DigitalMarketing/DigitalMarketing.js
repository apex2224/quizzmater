import React, { useState } from 'react';
import styles from './DigitalMarketing.module.css';
// Import framer-motion for animations
import { motion, AnimatePresence } from 'framer-motion';

// Updated quizData with 10 questions
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
  },
  {
    question: "What does 'CTA' stand for in marketing?",
    options: [
      "Call To Action",
      "Customer Target Audience",
      "Content Type Analysis",
      "Click Through Analytics"
    ],
    correctAnswer: "Call To Action"
  },
  {
    question: "Which platform is primarily used for B2B marketing?",
    options: [
      "TikTok",
      "Snapchat",
      "LinkedIn",
      "Pinterest"
    ],
    correctAnswer: "LinkedIn"
  },
  {
    question: "What is 'ROI' in digital marketing?",
    options: [
      "Return On Investment",
      "Rate Of Interaction",
      "Revenue Output Index",
      "Reach Optimization Indicator"
    ],
    correctAnswer: "Return On Investment"
  },
  {
    question: "Which type of content is most effective for engagement on social media?",
    options: [
      "Text-only posts",
      "Video content",
      "Long-form articles",
      "Spreadsheets"
    ],
    correctAnswer: "Video content"
  },
  {
    question: "What is the purpose of A/B testing in digital marketing?",
    options: [
      "To compare two versions to see which performs better",
      "To test website loading speed",
      "To check for broken links",
      "To analyze competitor strategies"
    ],
    correctAnswer: "To compare two versions to see which performs better"
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