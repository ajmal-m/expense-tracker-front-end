import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: null | { id: string; name: string; email: string; currency?: string };
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
        localStorage.setItem("currency", JSON.stringify(action.payload.user.currency));
    },
    logout: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("expense-tracker-token");
        localStorage.removeItem("user");
    },
    updateUser: (state, action: PayloadAction<{ name: string, email:string, _id:string, currency?: string }>) => {
        const { name, email, _id , currency } = action.payload;
        state.user = { id: _id, name, email , currency: currency || ""};
        localStorage.setItem("user", JSON.stringify(state.user));
    },
    updateCurrency: (state, action: PayloadAction<{ currency: string }>) => {
      if(state.user){
          state.user.currency = action.payload.currency;
          localStorage.setItem("currency", JSON.stringify(action.payload.currency));
      }
    }
  }
});

export const { loginSuccess, logout, updateUser, updateCurrency } = authSlice.actions;
export default authSlice.reducer;
