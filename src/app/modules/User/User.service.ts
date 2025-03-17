import { TUser } from "../Auth/Auth.interface";
import { User } from "../Auth/Auth.model";

const getAllUsers = async () => {
  const users = await User.find({});
  const result = users.map((user) => ({
    name: user.name,
    phone: user.phone,
    role: user.role,
    isDeleted: user.isDeleted,
  }));
  return result;
};

const updateUser = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const UserServices = {
  getAllUsers,
  updateUser,
};
