import { Input, Select } from "antd";
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
    <div style={{ display: "flex" }}>
      <Input
        placeholder="请输入名称"
        type="text"
        value={params.name}
        onChange={(evt) => {
          setParams({ ...params, name: evt.target.value });
        }}
      />
      <Select
        value={params.personId}
        style={{ width: "100px" }}
        onChange={(value) => {
          setParams({ ...params, personId: value });
        }}
      >
        {users.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
