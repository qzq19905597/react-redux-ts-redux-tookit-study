import { useAuth } from "context/auth-context";
import qs from "qs";
import { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const { user, login } = useAuth();
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    console.log(event.nativeEvent);

    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    console.log(event.nativeEvent);

    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(async (response) => {});
  };
  return (
    <>
      <div>
        <span>username:{user?.username}</span>
      </div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" placeholder="请输入用户名" />
        <label htmlFor="password">密码</label>
        <input type="password" id="password" placeholder="请输入密码" />
        <button name="login" type="submit">
          登录
        </button>
      </form>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" placeholder="请输入用户名" />
        <label htmlFor="password">密码</label>
        <input type="password" id="password" placeholder="请输入密码" />
        <button type="submit">注册</button>
      </form>
    </>
  );
};
