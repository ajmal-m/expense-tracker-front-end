import axiosInstance from "./axios";

export const getExpenses = async () => {
    const response = await axiosInstance.get("/expense");
    return response.data;
}

export const addExpense = async ({ amount, notes, category, day, month, year }: 
    { amount: number; notes: string; category: string; day: number; month: number; year: number }) => {
    const response = await axiosInstance.post("/expense/create", { amount, notes, category, day, month, year });
    return response.data;
}