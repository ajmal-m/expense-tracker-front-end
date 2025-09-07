import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import categoryReducer from '../slices/categorySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer
  },
});

// types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
