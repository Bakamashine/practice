import { createContext } from "react";

import { User } from "../hooks/useUser";

// interface IAuthContext {
//     isAuth: Boolean;
//     setAuth: CallableFunction
// }

// const AuthContext = createContext<IAuthContext>({
//     isAuth: false,
//     setAuth: () => {}
// })

// export default AuthContext

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});
