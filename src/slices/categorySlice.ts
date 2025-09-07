import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CategorySlice {
  categoryies: { name: string; _id: string }[];
}

const initialState: CategorySlice = {
  categoryies: []           ,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<{ name: string; _id: string }[]>) => {
        console.log(action.payload);
        state.categoryies = [ ...state.categoryies , ...action.payload];
    },
    removeCategoryItem:(state, action: PayloadAction<string>) => {
        state.categoryies = state.categoryies.filter(category => category._id !== action.payload);
    },
  }
});

export const { setCategories, removeCategoryItem } = categorySlice.actions;
export default categorySlice.reducer;
