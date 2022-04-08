import "./UserList.css";
import Card from "../UI/Card";
import UserItem from "./UserItem";
import React from "react";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h3>No user data to show.</h3>
      </Card>
    );
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
