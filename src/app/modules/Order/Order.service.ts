import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { Product } from "../Product/Product.model";
import { TOrder } from "./Order.interface";
import { Order } from "./Order.model";

const createOrder = async (payload: TOrder) => {
  for (const item of payload.products) {
    const product = await Product.findById(item.productId);

    if (!product) throw new ApiError(httpStatus.NOT_FOUND, "Product Not Found");

    if (item.quantity > product.stock)
      throw new ApiError(httpStatus.BAD_REQUEST, "Quantity not available");
  }

  const order = await Order.create(payload);

  for (const item of payload.products) {
    await Product.findByIdAndUpdate(item.productId, {
      $inc: { stock: -item.quantity },
    });
  }

  return order;
};

const getOrders = async () => {
  const result = await Order.find({});
  return result;
};

const getOrderById = async (id: string) => {
  const result = await Order.findById(id);
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
  return result;
};

const updateOrder = async (id: string, payload: Partial<TOrder>) => {
  const result = await Order.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderServices = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
