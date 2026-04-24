import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { User, useUser } from "./useUser";
import axios from "axios";
import guestAxios from "../config/guestAxios";
import { decodeToken } from "react-jwt";
import IRegisterValidation from "../interface/IRegisterValidation";
export type { IRegisterValidation };

export interface UserLogin {
  fullName?: string;
  phoneNumber: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [addUser, getItem]);

  const register = async (
    user: UserLogin,
  ): Promise<LoginResponse | IRegisterValidation> => {
    const response = await guestAxios.post<LoginResponse>("/Auth/register", {
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      password: user.password,
    });
    if (response.status != 400) {
      const myDecodeToken = decodeToken(response.data.access_token);
      console.log("Decoded token: ", myDecodeToken);
      if (myDecodeToken && typeof myDecodeToken === "string")
        return { access_token: myDecodeToken };
    }
    return response.data;
  };

  const login = async (
    user: UserLogin,
  ): Promise<LoginResponse | IRegisterValidation> => {
    const response = await guestAxios.post<LoginResponse>("/Auth/login", {
      phoneNumber: user.phoneNumber,
      password: user.password,
    });
    if (response.status != 400) {
      const myDecodeToken = decodeToken(response.data.access_token);
      console.log("Decoded token: ", myDecodeToken);
      if (myDecodeToken && typeof myDecodeToken === "string")
        return { access_token: myDecodeToken };
    }
    return response.data;
  };

  const logout = () => {
    removeUser();
  };

  return { user, register, login, logout, setUser };
};
