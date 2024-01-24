import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsReducer";
import passwordReducer from "./passwordReducer";
import notificationReducer from "./notificationReducer";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    password: passwordReducer,
    notification: notificationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
