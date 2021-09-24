import { User } from "./list";
interface SearchProps {
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchProps["params"]) => void;
  users: User[];
}

export const Search = ({ params, setParams, users }: SearchProps) => {
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
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
