import { TProduct } from "./Product.interface";
import { Product } from "./Product.model";

const createProduct = async (payload: TProduct) => {
  return await Product.create(payload);
};

const getProducts = async () => {
  return await Product.find();
};

const getProductById = async (id: string) => {
  return await Product.findById(id);
};

const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const ProductService = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
