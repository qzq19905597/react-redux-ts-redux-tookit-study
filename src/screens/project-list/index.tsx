import { ProjectList } from "./list";
import { Search } from "./search";
// import qs from "qs";
import { useState, useEffect } from "react";
import { fillerEmpty } from "./utils";
import { useDebounce, useMount } from "../../hooks";
import { useHttp } from "utils/http";
import { Typography } from "antd";
// const apiUrl = process.env.REACT_APP_API_URL;
export const Project = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const debounceParams = useDebounce(params, 200);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const httpRequest = useHttp();
  useEffect(() => {
    setLoading(true);
    httpRequest("projects", { data: fillerEmpty(debounceParams) })
      .then(setList)
      .catch((err) => {
        setError(err);
        setList([]);
      })
      .finally(() => {
        setLoading(false);
      });
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(fillerEmpty(debounceParams))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
  }, [debounceParams]);
  useMount(() => {
    httpRequest("users").then(setUsers);
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });

  return (
    <>
      <Search users={users} params={params} setParams={setParams} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <ProjectList users={users} loading={loading} list={list} />
    </>
  );
};
