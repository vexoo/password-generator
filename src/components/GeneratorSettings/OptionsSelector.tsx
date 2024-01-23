import React from "react";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { toggleCaps, toggleNumbers } from "../../reducers/settingsReducer";

const OptionsSelector: React.FC = () => {
  const useCaps = useAppSelector(state => state.settings.useCaps);
  const useNumbers = useAppSelector(state => state.settings.useNumbers);
  const dispatch = useAppDispatch();

  const handleCapsChange = () => {
    dispatch(toggleCaps());
  };

  const handleNumbersChange = () => {
    dispatch(toggleNumbers());
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
