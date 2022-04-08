import Card from "../UI/Card";
import UserItem from "./UserItem";
import React from "react";
import classes from "./UserList.module.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className={classes.users}>
        <h3>No user data to show.</h3>
      </Card>
    );
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            userName={user.userName}
            userAge={user.userAge}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
