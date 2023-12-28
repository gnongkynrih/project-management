import React from "react";
import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  pin: boolean;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <div>
      <table
        style={{ border: "1.5px solid rgb(208,200,200", margin: "0 auto" }}
      >
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => (
            <tr key={project.id}>
              <td
                style={{
                  border: "1px solid rgb)190,190,190)",
                  background: "rgb(238,238,238",
                }}
              >
                {project.name}
              </td>
              <td
                style={{
                  border: "1px solid rgb)190,190,190)",
                  background: "rgb(215,217,242",
                }}
              >
                {users.find((user) => user.id === project.personId)?.name ||
                  "unknown"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
