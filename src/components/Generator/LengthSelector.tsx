import React from "react";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { pwMinLength, pwMaxLength } from "../../utils/strings";
import { setLength } from "../../reducers/passwordReducer";

const LengthSelector: React.FC = () => {
  const pwLength = useAppSelector(state => state.password.pwLength);
  const dispatch = useAppDispatch();

  const handleLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLength(parseInt(event.target.value, 10)));
  };

  const options = [];
  for (let i = pwMinLength; i <= pwMaxLength; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="flex flex-row">
      <p className="mr-2">Password length: </p>
      <select
        className="dark:text-black"
        value={pwLength}
        onChange={handleLengthChange}
      >
        {options}
      </select>
    </div>
  );
};

export default LengthSelector;
