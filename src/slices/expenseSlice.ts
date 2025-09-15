import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ExpenseSlice {
  expenses: { amount: number; notes: string; category: {name: string}; day:string; month:string; year:string; _id: string }[];
}

const initialState: ExpenseSlice = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setAllExpenses: (state, action: PayloadAction<{ amount: number; notes: string; category: {name: string}; day:string; month:string; year:string; _id: string }[]>) => {
        console.log(action.payload);
        state.expenses = [ ...action.payload];
    },
    removeExpenseItem:(state, action: PayloadAction<string>) => {
        state.expenses = state.expenses.filter(expense => expense._id !== action.payload);
    },
    setSingleExpense: (state, action: PayloadAction<{ amount: number; notes: string; category: {name: string}; day:string; month:string; year:string; _id: string }>) => {
        state.expenses.push(action.payload);
    }
  }
});

export const { setAllExpenses, removeExpenseItem, setSingleExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
