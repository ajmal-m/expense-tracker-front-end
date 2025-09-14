import axiosInstance from "./axios";

export const getCurrentYearMonthlyData = async () => {
  const response = await axiosInstance.get("/analytics/monthly-expenses");
  return response.data;
}