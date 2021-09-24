import qs from "qs";
import { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(async (response) => {});
  };
  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">用户名</label>
      <input type="text" id="username" placeholder="jack" />
      <label htmlFor="password">密码</label>
      <input type="password" id="password" placeholder="123" />
      <button type="submit">登录</button>
    </form>
  );
};
