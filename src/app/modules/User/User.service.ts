import { User } from "../Auth/Auth.model";

const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

export const UserServices = {
  getAllUsers,
};
