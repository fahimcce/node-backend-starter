import { TReview } from "./Review.interface";
import { Review } from "./Review.model";

const createReview = async (payload: TReview) => {
  const result = await Review.create(payload);
  return result;
};

const getReviews = async () => {
  const result = await Review.find({});
  return result;
};

const getReviewById = async (id: string) => {
  const result = await Review.findById(id);
  return result;
};

const updateReview = async (id: string, payload: Partial<TReview>) => {
  const result = await Review.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteReview = async (id: string) => {
  const result = await Review.findByIdAndDelete(id);
  return result;
};

export const ReviewServices = {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
