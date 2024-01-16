import React, { useState, useEffect } from "react";
import Button from "./Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header: React.FC = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    prefersDarkMode ? true : false
  );

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  const handleDarkModeButtonIcon = () => {
    if (isDarkMode) return <LightModeIcon />;
    else return <DarkModeIcon />;
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="header">
      <div className="header-content short:h-auto">
        <div className="flex">
          <Button
            onClick={() => handleDarkMode(!isDarkMode)}
            icon={handleDarkModeButtonIcon()}
          />
        </div>
        <p className="text-3xl font-bold uppercase absolute left-0 right-0 max-w-screen-md mx-auto">Password Generator</p>
        <></>
      </div>
      <hr className="hr-line" />
    </div>
  );
};

export default Header;
