import "./UserItem.css";
import React from "react";
import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <ul>
      <Card>
        <h3>
          {props.userName} ({props.userAge} years old)
        </h3>
      </Card>
    </ul>
  );
};

export default UserItem;
