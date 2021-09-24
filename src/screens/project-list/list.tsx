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
interface ProjectListProps {
  list: Project[];
  users: User[];
}

export const ProjectList = ({ list, users }: ProjectListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              {
                users.find((user) => {
                  return user.id === item.personId;
                })?.name
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
