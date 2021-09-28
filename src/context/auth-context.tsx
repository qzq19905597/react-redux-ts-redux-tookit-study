import axios from "axios";
import React, { ReactNode, useContext } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
interface AuthProps {
  username: string;
  password: string;
}
const AuthContext = React.createContext<
  | {
      user: AuthProps | null;
      login: (from: AuthProps) => void;
    }
  | undefined
>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<AuthProps | null>(null);
  const login = async (params: AuthProps) => {
    const res = await axios.post(`${apiUrl}/login`, params);
    const { name, password } = res.data.user;
    setUser({ username: name, password });
  };
  return <AuthContext.Provider children={children} value={{ user, login }} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在authProvider中使用");
  }
  return context;
};
