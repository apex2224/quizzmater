import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage.js";
import DigitalMarketing from "./Component/QuizzQuestions/DigitalMarketing/DigitalMarketing";
import CSE from "./Component/QuizzQuestions/CSE/CSE.js";
import ECE from "./Component/QuizzQuestions/ECE/ECE.js";
import IT from "./Component/QuizzQuestions/IT/IT.js";
import ME from "./Component/QuizzQuestions/ME/ME.js";
import BSCIT from "./Component/QuizzQuestions/BSCIT/BSCIT.js";
import BEE from "./Component/QuizzQuestions/BEE/BEE.js";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Department Quiz Routes */}
          <Route path="/quiz/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/quiz/cse" element={<CSE />} />
          <Route path="/quiz/ece" element={<ECE />} />
          <Route path="/quiz/it" element={<IT />} />
          <Route path="/quiz/me" element={<ME />} />
          <Route path="/quiz/bscit" element={<BSCIT />} />
          <Route path="/quiz/bee" element={<BEE />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
