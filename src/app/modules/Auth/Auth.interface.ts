export type TUserRole = "admin" | "user";
export type TUser = {
  name: string;
  phone: string;
  email: string;
  password: string;
  role: TUserRole;
  isDeleted: boolean;
};

export type Tlogin = {
  email: string;
  password: string;
};
