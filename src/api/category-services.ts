import axiosInstance from "./axios";

export const getCategories = async () => {
  const response = await axiosInstance.get("/category/all");
  return response.data;
}

export const addCategory = async (category: { name: string }) => {
  const response = await axiosInstance.post("/category/create", category);
  return response.data;
}

export const deleteCategory = async (category: { id: string }) => {
  const response = await axiosInstance.delete(`/category/delete/${category.id}`);
  return response.data;
}