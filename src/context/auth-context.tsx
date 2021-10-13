import { useMount } from "hooks";
import React, { ReactNode, useContext } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
export interface AuthProps {
  username: string;
  password: string;
  token?: string;
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
    const res = await fetch(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = (await res.json()).user;
    localStorage.setItem("token", data?.token || "");
    setUser(data);
  };
  useMount(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({
        username: "",
        password: "",
      });
    }
  });
  return <AuthContext.Provider children={children} value={{ user, login }} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在authProvider中使用");
  }
  return context;
};
