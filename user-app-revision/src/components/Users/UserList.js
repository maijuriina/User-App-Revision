import "./UserList.css";
import UserItem from "./UserItem";
import React from "react";

const UserList = (props) => {
  if (props.items.length === 0) {
    return <h3>No user data to show.</h3>;
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          userName={user.userName}
          userAge={user.userAge}
        />
      ))}
    </ul>
  );
};

export default UserList;
