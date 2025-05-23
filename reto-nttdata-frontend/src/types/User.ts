export type User = {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  picture: {
    thumbnail: string;
  };
  email: string;
  dob: {
    date: string;
  };
  key: number;
};
