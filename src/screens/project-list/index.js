import { ProjectList } from "./list";
import { Search } from "./search";
import qs from "qs";
import { useState, useEffect } from "react";
import { fillerEmpty } from "./utils";
import { useDebounce, useMount } from "src/hooks";
const apiUrl = process.env.REACT_APP_API_URL;
export const Project = () => {
  const [params, setParams] = useState({
    name: "",
    personId: 0,
  });
  const debounceParams = useDebounce(params, 2000);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(fillerEmpty(debounceParams))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParams]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <>
      <Search users={users} params={params} setParams={setParams} />
      <ProjectList users={users} list={list} />
    </>
  );
};
