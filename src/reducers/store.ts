import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsReducer";
import passwordReducer from "./passwordReducer";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    password: passwordReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
