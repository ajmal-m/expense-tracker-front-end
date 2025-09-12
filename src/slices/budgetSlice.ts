import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BudgetSlice {
  budgets: { category: { name: string }; amount: number; _id: string }[];
}

const initialState: BudgetSlice = {
  budgets: [],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setAllBudgets: (state, action: PayloadAction<{ category: { name: string }; amount: number; _id: string }[]>) => {
        console.log(action.payload);
        state.budgets = [ ...action.payload];
    },
    addBudgetItem: (state, action: PayloadAction<{ category: { name: string }; amount: number; _id: string }>) => {
        state.budgets.push(action.payload);
    },
    deleteBudgetItem: (state, action: PayloadAction<{ id: string }>) => {
        state.budgets = state.budgets.filter(budget => budget._id !== action.payload.id);
    }
  },
});

export const { setAllBudgets , addBudgetItem , deleteBudgetItem } = budgetSlice.actions;
export default budgetSlice.reducer;
