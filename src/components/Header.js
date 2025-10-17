import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header className="Header">
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
