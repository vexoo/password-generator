import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../reducers/store";

interface SettingsState {
  useCaps: boolean;
  useNumbers: boolean;
}

const initialState: SettingsState = {
  useCaps: false,
  useNumbers: false
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleCaps: state => {
      state.useCaps = !state.useCaps;
    },
    toggleNumbers: state => {
      state.useNumbers = !state.useNumbers;
    }
  }
});

export const { toggleCaps, toggleNumbers } = settingsSlice.actions;

export const selectUseCaps = (state: RootState) => state.settings.useCaps;
export const selectUseNumbers = (state: RootState) => state.settings.useNumbers;

export default settingsSlice.reducer;
