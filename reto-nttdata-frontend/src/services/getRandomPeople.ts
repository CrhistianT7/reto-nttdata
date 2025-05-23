import axios from "axios";
import type { User } from "../types/User";

type RandomUserAPIResponse = {
  results: User[];
};

export const getRandomPeople = async (): Promise<User[]> => {
  const response = await axios.get<RandomUserAPIResponse>(
    "https://randomuser.me/api/?results=10&inc=name,gender,location,picture,email,dob"
  );
  return response.data.results;
};
