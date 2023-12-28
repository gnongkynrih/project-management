import React, { useEffect } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import * as qs from "qs";
import { cleanObject } from "utils";
import { useDebounce, useMount } from "hooks";

export const ProjectListScreen = () => {
  const [list, setList] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [param, setParam] = React.useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 500);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?name=${qs.stringify(cleanObject(debounceParam))}`,
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParam, apiUrl]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
