import React from "react";

interface Props {
  useCaps: boolean;
  setUseCaps: React.Dispatch<React.SetStateAction<boolean>>;
  useNumbers: boolean;
  setUseNumbers: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionsSelector: React.FC<Props> = ({
  useCaps,
  setUseCaps,
  useNumbers,
  setUseNumbers
}) => {
  const handleCapsChange = () => {
    setUseCaps(prevUseCaps => !prevUseCaps);
  };

	const handleNumbersChange = () => {
    setUseNumbers(prevUseNumbers => !prevUseNumbers);
  };

  return (
    <div>
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
    </div>
  );
};

export default OptionsSelector;
