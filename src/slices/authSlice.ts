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
        state.token = action.payload.token;
        localStorage.setItem("expense-tracker-token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));

    },
    logout: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("expense-tracker-token");
        localStorage.removeItem("user");
    },
    updateUser: (state, action: PayloadAction<{ user: any }>) => {
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
    }
  }
});

export const { loginSuccess, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
