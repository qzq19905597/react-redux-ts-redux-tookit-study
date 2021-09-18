export const Search = ({ params, setParams, users }) => {
  return (
    <div>
      <input
        type="text"
        value={params.name}
        onChange={(evt) => {
          setParams({ ...params, name: evt.target.value });
        }}
      />
      <select
        value={params.personId}
        onChange={(evt) => {
          setParams({ ...params, personId: evt.target.value });
        }}
      >
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
