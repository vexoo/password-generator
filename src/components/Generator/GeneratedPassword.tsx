import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import Button from "../Button";
import { lowercaseLetters, uppercaseLetters, numbers } from "../../utils/strings";
import LengthSelector from "./LengthSelector";
import OptionsSelector from "./OptionsSelector";
import { setPassword } from "../../reducers/passwordReducer";
import Notification from "../Notification";
import { setNotification } from "../../reducers/notificationReducer";

const GeneratedPassword: React.FC = () => {
  const password = useAppSelector(state => state.password.password);
  const dispatch = useAppDispatch();

  async function copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
      dispatch(setNotification("Text copied to clipboard", 5));
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
  }

  const handleLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.type === "click" && password !== null) copyToClipboard(password);
  };

  const handleRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.type === "contextmenu") {
      dispatch(setPassword(""));
    }
  };

  return !password ? null : (
    <div>
      <button
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
        className="bg-indigo-700 hover:bg-indigo-800 text-white mt-5 px-4 py-2"
      >
        {password}
      </button>
      <Notification />
    </div>
  );
};

export default GeneratedPassword;
