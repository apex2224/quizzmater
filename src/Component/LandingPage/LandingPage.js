import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import {
  Code,
  Cpu,
  Database,
  Zap,
  Server,
  BarChart3,
  Users,
} from "lucide-react";
import { FiPhone, FiFlag } from "react-icons/fi";

const LandingPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [yearOptions, setYearOptions] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [selectedYear, setSelectedYear] = useState("");

  const techFields = [
    {
      name: "CSE",
      icon: Code,
      label: "Computer Science",
      position: { top: "10%", left: "5%" },
      rotation: 15,
    },
    {
      name: "ME",
      icon: Cpu,
      label: "Mechanical Engineering",
      position: { top: "25%", left: "85%" },
      rotation: -20,
    },
    {
      name: "ECE",
      icon: Database,
      label: "Electronics & Comm.",
      position: { top: "45%", left: "8%" },
      rotation: 30,
    },
    {
      name: "BEE",
      icon: Zap,
      label: "Electrical Engineering",
      position: { top: "60%", left: "90%" },
      rotation: -15,
    },
    {
      name: "BSCIT",
      icon: Server,
      label: "Information Tech.",
      position: { top: "75%", left: "10%" },
      rotation: 25,
    },
    {
      name: "IT",
      icon: BarChart3,
      label: "IT Engineering",
      position: { top: "15%", left: "50%" },
      rotation: -25,
    },
    {
      name: "MKT",
      icon: Users,
      label: "Marketing",
      position: { top: "85%", left: "80%" },
      rotation: 20,
    },
  ];

  // Update year options based on department selection
  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);

    // Define year options based on course type
    let years = 0;
    if (["CSE", "ME", "ECE", "BEE", "IT"].includes(department)) {
      // B.Tech courses typically have 4 years
      years = 4;
    } else if (["BSCIT"].includes(department)) {
      // B.Sc IT typically has 3 years
      years = 3;
    } else if (["MKT"].includes(department)) {
      // BBA or Marketing typically has 3 years
      years = 3;
    }

    // Set the appropriate number of year options
    setYearOptions(Array.from({ length: years }, (_, i) => i + 1));
    // Reset selected year when department changes
    setSelectedYear("");
  };

  // Validate Indian mobile number
  const validateIndianMobile = (mobileNumber) => {
    // Remove any spaces, dashes, or parentheses
    const cleanedNumber = mobileNumber.replace(/\s+|-|\(|\)|\+91/g, "");

    // Check if it starts with country code (91) and has 10 digits
    if (cleanedNumber.startsWith("91") && cleanedNumber.length === 12) {
      const numberWithoutCode = cleanedNumber.substring(2);
      return /^[6-9]\d{9}$/.test(numberWithoutCode);
    }

    // Check if it starts with 0 and has 11 digits (0 prefix)
    if (cleanedNumber.startsWith("0") && cleanedNumber.length === 11) {
      const numberWithoutZero = cleanedNumber.substring(1);
      return /^[6-9]\d{9}$/.test(numberWithoutZero);
    }

    // Check if it's a direct 10-digit number
    if (cleanedNumber.length === 10) {
      return /^[6-9]\d{9}$/.test(cleanedNumber);
    }

    // Check if it's an international format +91 XX XXXX XXXX
    if (cleanedNumber.startsWith("+91") && cleanedNumber.length === 13) {
      const numberWithoutCode = cleanedNumber.substring(3);
      return /^[6-9]\d{9}$/.test(numberWithoutCode);
    }

    return false;
  };

  // Handle phone number change
  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);

    // Validate the phone number
    if (phoneNumber && !validateIndianMobile(phoneNumber)) {
      setPhoneError(
        "Please enter a valid mobile number (10 digits starting with 6-9)"
      );
    } else {
      setPhoneError("");
    }
  };

  // Handle country code change
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  // Handle year change
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // Handle name input change
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      userName.trim() !== "" &&
      userEmail.trim() !== "" &&
      selectedDepartment !== "" &&
      phone !== "" &&
      !phoneError &&
      selectedYear !== ""
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;

    if (!userName.trim()) {
      isValid = false;
    }

    if (!userEmail.trim()) {
      isValid = false;
    }

    if (!selectedDepartment) {
      isValid = false;
    }

    if (!selectedYear) {
      isValid = false;
    }

    if (!phone || !validateIndianMobile(phone)) {
      setPhoneError("Please enter a valid mobile number");
      isValid = false;
    }

    if (isValid) {
      // Form submission logic would go here
      console.log({
        name: userName,
        email: userEmail,
        department: selectedDepartment,
        year: selectedYear,
        phone: phone,
        countryCode: countryCode,
      });
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className={styles.landingPage}>
      <h1>
        {" "}
        ZIION <span className={styles.highlight}>TECHNOLOGY</span>{" "}
      </h1>
      {/* Background Tech Icons */}
      <div className={styles.backgroundIcons}>
        {techFields.map((field, index) => {
          const IconComponent = field.icon;
          return (
            <div
              key={index}
              className={styles.bgIconWrapper}
              style={{
                top: field.position.top,
                left: field.position.left,
                transform: `rotate(${field.rotation}deg)`,
              }}
            >
              <IconComponent size={80} className={styles.bgIcon} />
            </div>
          );
        })}
      </div>

      {/* Left Column - Text Content */}
      <div className={styles.leftColumn}>
        <p className={styles.preHeading}>HEY THERE!</p>
        <h1 className={styles.mainHeading}>
          Are You Ready{" "}
          <span className={styles.highlight}>For Opportunities</span>
        </h1>
        <p className={styles.description}>
          Let's discuss how we can help transform your ideas into successful
          products. Schedule a consultation with our expert team today.
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
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className={styles.input}
                value={userEmail}
                onChange={handleEmailChange}
              />
            </div>
            <div className={styles.formRow}>
              <select
                className={styles.departmentSelect}
                value={selectedDepartment}
                onChange={handleDepartmentChange}
              >
                <option value="">Select Department</option>
                <option value="CSE">Computer Science (CSE)</option>
                <option value="ME">Mechanical Engineering (ME)</option>
                <option value="ECE">Electronics & Comm. (ECE)</option>
                <option value="BEE">Electrical Engineering (BEE)</option>
                <option value="BSCIT">Information Tech. (BSCIT)</option>
                <option value="IT">IT Engineering (IT)</option>
                <option value="MKT">Marketing (MKT)</option>
              </select>
              <div className={styles.phoneInputContainer}>
                <select
                  className={styles.countryCodeSelect}
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+92">🇵🇰 +92</option>
                  <option value="+880">🇧🇩 +880</option>
                  <option value="+977">🇳🇵 +977</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={styles.phoneInput}
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            {phoneError && <div className={styles.error}>{phoneError}</div>}

            {/* Dynamic Year Field - Shows course-specific years */}
            {yearOptions.length > 0 && (
              <div className={styles.formRow}>
                <select
                  className={`${styles.input} ${styles.select}`}
                  value={selectedYear}
                  onChange={handleYearChange}
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
  );
};

export default LandingPage;
