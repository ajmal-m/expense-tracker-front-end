import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: null | { id: string; name: string; email: string };
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ user: any; token: string }>) => {
        console.log(action.payload);
        state.user = action.payload.user;
        localStorage.setItem("expense-tracker-token", action.payload.token);
    },
    logout: (state) => {
        state.user = null;
        localStorage.removeItem("expense-tracker-token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
