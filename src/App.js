import React from "react";
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
    <div>
      <LandingPage />
      <DigitalMarketing />
      <CSE />
      <ECE/>
      <IT />
      <ME />
      <BSCIT />
      <BEE/>
    </div>
  );
}


export default App;
