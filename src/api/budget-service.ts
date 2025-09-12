
import axiosInstance from "./axios";

export const addBudget = async ({ category,  amount }: { category : string; amount: number}) => {
  const response = await axiosInstance.post("/budget/create", {
    category, amount
  });
  return response.data;
}

export const getBudgets = async () => {
  const response = await axiosInstance.get("/budget/all");
  return response.data;
}

export const deleteBudget = async ({id} : { id : string}) => {    
    const response = await axiosInstance.delete(`/budget/delete/${id}`);
    return response.data;
};