import React from "react";

interface Props {
  pwLength: number;
  setPwLength: React.Dispatch<React.SetStateAction<number>>;
  minValue: number;
  maxValue: number;
}

const LengthSelector: React.FC<Props> = ({
  pwLength,
  setPwLength,
  minValue,
  maxValue
}) => {
  const handleLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPwLength(parseInt(event.target.value, 10));
  };

  const options = [];
  for (let i = minValue; i <= maxValue; i++) {
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
