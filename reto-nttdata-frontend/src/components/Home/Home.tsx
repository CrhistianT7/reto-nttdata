import { Button } from "antd";
import { useEffect, useState } from "react";
import UsersTable from "../UsersTable/UsersTable";
import type { User } from "../../types/User";
import { getRandomPeople } from "../../services/getRandomPeople";
import { HomeWrapper, Title } from "./Home.styles";

const Home: React.FC = () => {
  const [randomPeople, setRandomPeople] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await getRandomPeople();
      const usersWithKeys = data.map((user, index) => ({
        name: user.name,
        gender: user.gender,
        location: user.location,
        picture: user.picture,
        email: user.email,
        dob: user.dob,
        key: index,
      }));
      setRandomPeople(usersWithKeys);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <HomeWrapper>
      <Title>Welcome to Random People Generator </Title>
      <div>
        <Button type="primary" onClick={loadUsers} loading={loading}>
          Click here to generate 10 random poeple
        </Button>
      </div>
      <UsersTable data={randomPeople} loading={loading} />
    </HomeWrapper>
  );
};

export default Home;
