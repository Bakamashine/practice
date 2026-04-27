import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  authToken?: string;
  role: string;
}

export const useUser = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useUser must be used within AuthContext.Provider");
  }

  return {
    user: context.user,
    setUser: context.setUser,
    addUser: context.setUser,
    removeUser: () => context.setUser(null),
  };
};