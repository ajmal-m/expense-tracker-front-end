import axiosInstance from "./axios";

export const updateUserDetails = async ({ name , password, currency } :{ name : string;password: string; currency?: string}) => {
  const response = await axiosInstance.put("/user/update", {
    name,
    password,
    currency
  });
  return response.data;
}
