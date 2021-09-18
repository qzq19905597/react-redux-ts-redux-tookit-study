import { ProjectList } from "./list";
import { Search } from "./search";
import qs from "qs";
import { useState, useEffect } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const Project = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(params)}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [params]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <>
      <Search users={users} params={params} setParams={setParams} />
      <ProjectList list={list} />
    </>
  );
};
