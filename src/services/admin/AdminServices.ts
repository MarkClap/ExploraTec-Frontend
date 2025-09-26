import config from "../config";
import { User } from "../../types";

export type AdminUser = User & {
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
};

export const getAllUsers = async () => {
  const response = await config.get<AdminUser[]>("/admin/users");
  return response.data;
};