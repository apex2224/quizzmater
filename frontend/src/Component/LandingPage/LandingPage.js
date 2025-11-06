import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import { collection, addDoc, Timestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig"; // adjust path if needed

import {
  Code,
  Database,
  Users,
} from "lucide-react";
// Removed FiPhone, FiFlag as they weren't used in the JSX

// --- REFACTOR 1: Moved all static data outside the component ---
// This data doesn't change, so it doesn't need to be part of the component instance.

const techFields = [
  {
    name: "CSE",
    icon: Code,
    label: "Computer Science",
    position: { top: "10%", left: "5%" },
    rotation: 15,
  },

  {
    name: "ECE",
    icon: Database,
    label: "Electronics & Comm.",
    position: { top: "45%", left: "8%" },
    rotation: 30,
  },

  {
    name: "MKT",
    icon: Users,
    label: "Marketing",
    position: { top: "85%", left: "80%" },
    rotation: 20,
  },
];

// Data for course durations
const courseDurations = {
  CSE: 4,
  ECE: 4,
  MKT: 3,
};

// Data for quiz navigation paths
const quizPaths = {
  CSE: "/quiz/cse",
  ECE: "/quiz/ece",
  MKT: "/quiz/digital-marketing",
};

// --- REFACTOR 2: Moved pure utility functions outside the component ---
const validateIndianMobile = (mobileNumber) => {
  const indianMobileRegex = /^[6-9]\d{9}$/;
  const cleanedNumber = mobileNumber.replace(/\s+|-|\(|\)/g, "");
  return indianMobileRegex.test(cleanedNumber);
};

// --- The Component ---
const LandingPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [yearOptions, setYearOptions] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const navigate = useNavigate();

  // --- REFACTOR 3: Simplified logic using data maps ---
  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);

    // Get year count from the data map
    const years = courseDurations[department] || 0;

    setYearOptions(Array.from({ length: years }, (_, i) => i + 1));
    setSelectedYear(""); // Reset selected year
  };

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);
    if (phoneNumber && !validateIndianMobile(phoneNumber)) {
      setPhoneError(
        "Please enter a valid 10-digit mobile number (starting with 6-9)"
      );
    } else {
      setPhoneError("");
    }
  };

  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setUserEmail(e.target.value);
  const handleInterestChange = (e) => setSelectedInterest(e.target.value);

  const isFormValid = () => {
    return (
      userName.trim() !== "" &&
      userEmail.trim() !== "" &&
      selectedDepartment !== "" &&
      selectedYear !== "" &&
      selectedInterest !== "" && // Added interest validation
      phone !== "" &&
      !phoneError
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateIndianMobile(phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!isFormValid()) {
      console.error("Form is invalid");
      return;
    }

    try {
      // Check if the user has already participated with this phone number
      const participantsRef = collection(db, "participants");
      const q = query(participantsRef, where("phone", "==", phone));
      const querySnapshot = await getDocs(q);
      
      const existingEntries = [];
      querySnapshot.forEach((doc) => {
        existingEntries.push(doc.data());
      });

      // Check if the user has already used this phone number with the same interest
      const sameInterestEntry = existingEntries.find(entry => 
        entry.phone === phone && entry.interest === selectedInterest
      );

      if (sameInterestEntry) {
        alert("You have already participated with this phone number and selected interest. Please choose a different interest.");
        return;
      }

      // Check if the user has already participated 3 times with different interests
      const uniqueInterests = [...new Set(existingEntries.map(entry => entry.interest))];
      if (uniqueInterests.length >= 3) {
        alert("You have already participated 3 times with different interests. Maximum participation limit reached.");
        return;
      }

      const userDetails = {
        name: userName,
        email: userEmail,
        department: selectedDepartment,
        year: selectedYear,
        interest: selectedInterest, // Added interest field
        phone: phone,
        countryCode: "+91",
        submittedAt: Timestamp.now(),
      };

      // ✅ Add data to Firestore collection "participants"
      await addDoc(collection(db, "participants"), userDetails);

      console.log("✅ User data stored successfully:", userDetails);

      // After saving, redirect to quiz page
      const quizPath = quizPaths[selectedDepartment] || "/";
      navigate(quizPath);
    } catch (error) {
      console.error("❌ Error saving data to Firestore:", error);
      alert("Something went wrong while saving your details!");
    }
  };

  return (
    <div className={styles.landingPage}>
      <h1 className={styles.pageTitle}>
        {" "}
        ZIION <span className={styles.highlight}>TECHNOLOGY</span>{" "}
      </h1>

      {/* Background Tech Icons */}
      <div className={styles.backgroundIcons}>
        {techFields.map((field) => (
          <div
            key={field.name}
            className={styles.bgIconWrapper}
            style={{
              top: field.position.top,
              left: field.position.left,
              transform: `rotate(${field.rotation}deg)`,
            }}
          >
            <field.icon size={80} className={styles.bgIcon} />
          </div>
        ))}
      </div>

      <div className={styles.contentRow}>
        {/* Left Column - Text Content */}
        <div className={styles.leftColumn}>
          <p className={styles.preHeading}>Hey Quizzers! 🧠 !</p>
          <h1 className={styles.mainHeading}>
            Ready to Challenge{" "}
            <span className={styles.highlight}>Your Mind and Win Big? </span>
          </h1>
          <p className={styles.description}>
            Join the ultimate quiz fest — compete, learn, and grab exciting
            prizes & gift vouchers!
          </p>
        </div>

        {/* Right Column - Form */}
        <div className={styles.rightColumn}>
          <div className={styles.formContainer}>
            <h2 className={styles.formHeading}>Ready to Win Prizes?</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className={styles.input}
                  value={userName}
                  onChange={handleNameChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className={styles.input}
                  value={userEmail}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className={styles.formRow}>
                <select
                  className={styles.select} // --- CSS REFACTOR: Using .select class now
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  required
                >
                  <option value="">Select Department</option>
                  {/* --- REFACTOR 5: Dynamic options --- */}
                  {techFields.map((field) => (
                    <option key={field.name} value={field.name}>
                      {field.label} ({field.name})
                    </option>
                  ))}
                </select>
                <div className={styles.phoneInputContainer}>
                  <div className={styles.countryCodeDisplay}>+91</div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={styles.phoneInput}
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />
                </div>
              </div>
              {phoneError && <div className={styles.error}>{phoneError}</div>}

              {/* Dynamic Year Field */}
              {yearOptions.length > 0 && (
                <div className={styles.formRow}>
                  <select
                    className={styles.select} // Use consistent class
                    value={selectedYear}
                    onChange={handleYearChange}
                    required
                  >
                    <option value="">Select Year</option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                        {year === 1
                          ? "st"
                          : year === 2
                          ? "nd"
                          : year === 3
                          ? "rd"
                          : "th"}{" "}
                        Year
                      </option>
                    ))}
                  </select>
                  {/* Interest Field */}
                  <select
                    className={styles.select}
                    value={selectedInterest}
                    onChange={handleInterestChange}
                    required
                  >
                    <option value="">Select Interest</option>
                    <option value="Coding">Coding</option>
                    <option value="Marketing">Marketing</option>
                    <option value="ECE">ECE</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={!isFormValid()}
              >
                PLAY NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
