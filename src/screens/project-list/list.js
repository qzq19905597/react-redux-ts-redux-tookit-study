export const ProjectList = ({ list }) => {
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
            <td>{item.personId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
