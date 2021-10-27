import { Table, TableProps } from "antd";
import Column from "antd/lib/table/Column";

interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}
export interface User {
  id: number;
  name: string;
}
interface ProjectListProps extends TableProps<Project> {
  list: Project[];
  users: User[];
}

export const ProjectList = ({ list, users, ...props }: ProjectListProps) => {
  return (
    <Table dataSource={list} pagination={false} {...props}>
      <Column title="名称" dataIndex="name" key="name" />
      <Column
        title="负责人"
        dataIndex="personId"
        key="personId"
        render={(personId) => (
          <span>
            {
              users.find((user) => {
                return user.id === personId;
              })?.name
            }
          </span>
        )}
      />
    </Table>
  );
};
