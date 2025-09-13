import axiosInstance from "./axios";

export const getExpenses = async () => {
    const response = await axiosInstance.get("/expense");
    return response.data;
}

export const addExpense = async ({ amount, notes, category, date }: { amount: number; notes: string; category: string; date: string }) => {
    const response = await axiosInstance.post("/expense/create", { amount, notes, category, date });
    return response.data;
}