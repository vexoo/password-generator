import React, { useState, useEffect } from "react";
import Button from "./Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";

const GeneratorSettings: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [pwLength, setPwLength] = useState<number>(5);
  const [useCaps, setUseCaps] = useState<boolean>(false);
  const [useNumbers, setUseNumbers] = useState<boolean>(false);

  const handleLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPwLength(parseInt(event.target.value));
  };

  const handleCapsChange = () => {
    setUseCaps(prevUseCaps => !prevUseCaps);
  };

  const handleNumbersChange = () => {
    setUseNumbers(prevUseNumbers => !prevUseNumbers);
  };

  const handlePasswordGeneration = () => {
    let availableChars = lowercaseLetters;

    if (useCaps) availableChars += uppercaseLetters;
    if (useNumbers) availableChars += numbers;

    const generatedPassword = generatePassword(availableChars);
    setPassword(generatedPassword);
  };

  const generatePassword = (availableChars: string) => {
    let generatedPassword = "";

    for (let i = 0; i < pwLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars.charAt(randomIndex);
    }

    return generatedPassword;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <p className="mr-2">Password length: </p>
        <select
          className="dark:text-black"
          value={pwLength}
          onChange={handleLengthChange}
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <label className="flex items-center space-x-2">
        <span className="">Capitalized letters:</span>
        <input
          type="checkbox"
          className="h-5 w-5"
          checked={useCaps}
          onChange={handleCapsChange}
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="">Numbers:</span>
        <input
          type="checkbox"
          className="h-5 w-5"
          checked={useNumbers}
          onChange={handleNumbersChange}
        />
      </label>
      <Button
        text="generate"
        onClick={handlePasswordGeneration}
        className="bg-green-500 dark:text-white"
      />
      <div className="bg-blue-500 mt-5">{password}</div>
    </div>
  );
};

export default GeneratorSettings;
