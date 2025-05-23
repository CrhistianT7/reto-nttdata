import { Avatar, Table } from "antd";
import type { User } from "../../types/User";
import type { UsersTableProps } from "./UsersTable.types";

const columns = [
  {
    title: "Avatar",
    dataIndex: ["picture", "thumbnail"],
    key: "avatar",

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_: any, record: User) => <Avatar src={record.picture.thumbnail} />,
  },
  {
    title: "Name",
    key: "name",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_: any, record: User) =>
      `${record.name.first} ${record.name.last}`,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date of Birth",
    key: "dob",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_: any, record: User) =>
      new Date(record.dob.date).toLocaleDateString(),
  },
  {
    title: "Location",
    key: "location",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_: any, record: User) =>
      `${record.location.city}, ${record.location.state}, ${record.location.country}`,
  },
];

const UsersTable: React.FC<UsersTableProps> = ({ data, loading }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={false}
    />
  );
};

export default UsersTable;
