import classes from "./UserItem.module.css";
import React from "react";
import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <ul>
      <Card className={classes.user}>
        <h3>
          {props.userName} ({props.userAge} years old)
        </h3>
      </Card>
    </ul>
  );
};

export default UserItem;
