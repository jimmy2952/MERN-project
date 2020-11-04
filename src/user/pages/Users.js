import React from "react";

import UsersList from "../components/UsersList";

const Users = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "Jimmy",
      image:
        "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg?width=700&crop=2:1",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
