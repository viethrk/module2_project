import axios from "axios";
import { API_URL } from "../constants/commont-const";

// http://localhost:8080/categories
const category_url = API_URL.HOST_API + API_URL.CATEGORIES;

// Get list category
export const getCategories = async () => {
  const response = await axios.get(category_url);
  return response.data;
};

// Get category by id
export const getCategoryById = async (category_id) => {
  const response = await axios.get(`${category_url}/${category_id}`);
  return response.data;
};

// Create category
// category_create => {name: ""}
export const createCategory = async (category_create) => {
  const response = await axios.post(category_url, category_create);
  return response.data;
};

// Update category
// category_update => {id: xx, name: ""}
export const updateCategory = async (category_update) => {
  const response = await axios.put(`${category_url}/${category_update.id}`, {
    name: category_update.name,
  });
  return response.data;
};

// Delete category
export const delCategoryById = async (category_id) => {
  await axios.delete(`${category_url}/${category_id}`);
};
