import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../reducers/store";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";

interface NotificationState {
  message: string | null;
}

const initialState: NotificationState = {
  message: null
};

const notificationSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clear: state => {
      state.message = null;
    }
  }
});

export const setNotification = (
  message: string,
  seconds: number,
  isError = false
) => {
  return async (dispatch: ReturnType<typeof useAppDispatch>) => {
    dispatch(set(message));
    setTimeout(() => {
      dispatch(clear());
    }, seconds * 1000);
  };
};

export const { set, clear } = notificationSlice.actions;

export const selectMessage = (state: RootState) => state.notification.message;

export default notificationSlice.reducer;
