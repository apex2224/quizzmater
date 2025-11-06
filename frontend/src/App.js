import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage.js";
import DigitalMarketing from "./Component/QuizzQuestions/DigitalMarketing/DigitalMarketing";
import CSE from "./Component/QuizzQuestions/CSE/CSE.js";
import ECE from "./Component/QuizzQuestions/ECE/ECE.js";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Department Quiz Routes */}
          <Route
            path="/quiz/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route path="/quiz/cse" element={<CSE />} />
          <Route path="/quiz/ece" element={<ECE />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
