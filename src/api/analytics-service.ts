import axiosInstance from "./axios";

export const getCurrentYearMonthlyData = async () => {
  const response = await axiosInstance.get("/analytics/monthly-expenses");
  return response.data;
}

export const getMonthlyCategoriesExpense = async () => {
    const response = await axiosInstance.get("/analytics/monthly-category-expenses");
    return response.data
}

export const getCurrentMonthExpense = async() => {
  const response = await axiosInstance.get("/analytics/get-current-month-expense");
  return response.data
}