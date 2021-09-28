import { useAuth } from "context/auth-context";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string | null;
  data?: Object;
}
const tokenLocal = localStorage.getItem("token");
export const http = (
  path: string,
  { token, data, method, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? "Bearer " + token : tokenLocal || "",
      "content-type": "application/json",
    },
    ...customConfig,
  };
  if (config.method === "GET") {
    path += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }
  return fetch(`${apiUrl}/${path}`, config).then(async (response) => {
    if (response.status === 401) {
      // window.location.href = `${window.location.origin}${window.location.pathname}`
    } else {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  });
};
export const useHttp = () => {
  const { user } = useAuth();
  // Utility Types 用法： 对传入的对象进行的类型进项操作
  return (...[path, config]: Parameters<typeof http>) =>
    http(path, { ...config, token: user ? user?.token : "" });
};
