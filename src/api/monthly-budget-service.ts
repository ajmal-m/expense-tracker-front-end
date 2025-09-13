import axiosInstance from "./axios";

export const getMonthlyBudget = async ({
    year,
    month
}: { year: number; month: number }) => {
  const response = await axiosInstance.get(`/monthly-budget?year=${year}&month=${month}`);
  return response.data;
}


export const updateMonthlyBudget = async ({ year, month, amount, id } : { year: number; month: number; amount: number; id: string }) => {
  const response = await axiosInstance.put(`/monthly-budget/${id}`, { year, month, amount });
  return response.data;
}

export const createMonthlyBudget = async ({ year, month, amount } : { year: number; month: number; amount: number }) => {   
  const response = await axiosInstance.post(`/monthly-budget`, { year, month, amount });
  return response.data;
}