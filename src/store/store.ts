import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import categoryReducer from '../slices/categorySlice';
import budgetReducer from '../slices/budgetSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    budget: budgetReducer
  },
});

// types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
