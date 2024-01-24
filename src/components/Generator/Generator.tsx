import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import Button from "../Button";
import { lowercaseLetters, uppercaseLetters, numbers } from "../../utils/strings";
import LengthSelector from "./LengthSelector";
import OptionsSelector from "./OptionsSelector";
import { setPassword } from "../../reducers/passwordReducer";
import GeneratedPassword from "./GeneratedPassword";

const GeneratorSettings: React.FC = () => {
  const password = useAppSelector(state => state.password.password);
  const pwLength = useAppSelector(state => state.password.pwLength);

  const useCaps = useAppSelector(state => state.settings.useCaps);
  const useNumbers = useAppSelector(state => state.settings.useNumbers);

  const dispatch = useAppDispatch();

  const handlePasswordGeneration = () => {
    let availableChars = lowercaseLetters;

    if (useCaps) availableChars += uppercaseLetters;
    if (useNumbers) availableChars += numbers;

    const generatedPassword = generatePassword(availableChars);
    dispatch(setPassword(generatedPassword));
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
    <div className="flex flex-col justify-center items-center mt-10">
      <LengthSelector />
      <OptionsSelector />
      <Button
        text="generate"
        onClick={handlePasswordGeneration}
        className="bg-green-500 dark:text-white mt-3"
      />
      <GeneratedPassword />
    </div>
  );
};

export default GeneratorSettings;
