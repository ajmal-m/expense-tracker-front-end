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
    setAllCategories: (state, action: PayloadAction<{ name: string; _id: string }[]>) => {
        console.log(action.payload);
        state.categoryies = [ ...action.payload];
    },
    removeCategoryItem:(state, action: PayloadAction<string>) => {
        state.categoryies = state.categoryies.filter(category => category._id !== action.payload);
    },
    setSingleCategory: (state, action: PayloadAction<{ name: string; _id: string }>) => {
        state.categoryies.push(action.payload);
    }
  }
});

export const { setAllCategories, removeCategoryItem, setSingleCategory } = categorySlice.actions;
export default categorySlice.reducer;
