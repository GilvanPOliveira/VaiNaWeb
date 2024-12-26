import React from "react";

const DarkMode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkMode;
