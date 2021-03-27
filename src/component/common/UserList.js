import React from "react";
import { useSelector } from "react-redux";

import User from "./User";

const UserList = (props) => {
  const loadedUsers = useSelector((state) => state.users.users);

  return (
    <div>
      {loadedUsers.map((user) => (
        <User key={user.nickName} {...user} />
      ))}
    </div>
  );
};

export default UserList;
