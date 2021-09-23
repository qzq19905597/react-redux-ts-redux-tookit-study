export const ProjectList = ({ list, users }) => {
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
