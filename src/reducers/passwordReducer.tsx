import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../reducers/store";
import { pwMinLength } from "../utils/strings";

interface PasswordState {
  password: string | null;
  pwLength: number;
}

const initialState: PasswordState = {
  password: null,
  pwLength: pwMinLength
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.pwLength = action.payload;
    }
  }
});

export const { setPassword, setLength } = passwordSlice.actions;

export const selectUsePassword = (state: RootState) => state.password.password;

export default passwordSlice.reducer;
