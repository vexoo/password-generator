import React, { useState, useEffect } from "react";
import Button from "../Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  lowercaseLetters,
  uppercaseLetters,
  numbers,
  pwMinLength,
  pwMaxLength
} from "../../utils/strings";
import LengthSelector from "./LengthSelector";
import OptionsSelector from "./OptionsSelector";

const GeneratorSettings: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [pwLength, setPwLength] = useState<number>(pwMinLength);
  const [useCaps, setUseCaps] = useState<boolean>(false);
  const [useNumbers, setUseNumbers] = useState<boolean>(false);

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
      <LengthSelector
        pwLength={pwLength}
        setPwLength={setPwLength}
        minValue={pwMinLength}
        maxValue={pwMaxLength}
      />
      <OptionsSelector
        useCaps={useCaps}
        setUseCaps={setUseCaps}
        useNumbers={useNumbers}
        setUseNumbers={setUseNumbers}
      />
      <Button
        text="generate"
        onClick={handlePasswordGeneration}
        className="bg-green-500 dark:text-white mt-3"
      />
      <div className="bg-sky-900 mt-5 text-white">{password}</div>
    </div>
  );
};

export default GeneratorSettings;
