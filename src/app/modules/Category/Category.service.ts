import { TCategory } from "./Category.interface";
import { Category } from "./Category.model";

const createCategory = async (payload: TCategory) => {
  return await Category.create(payload);
};

const getCategories = async () => {
  return await Category.find();
};

const getCategoryById = async (id: string) => {
  return await Category.findById(id);
};

const updateCategory = async (id: string, payload: Partial<TCategory>) => {
  return await Category.findByIdAndUpdate(id, payload, { new: true });
};

const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};

export const CategoryService = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
