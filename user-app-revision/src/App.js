import { useState } from "react";
import React from "react";
import Card from "./components/UI/Card";
import "./App.css";
import UserList from "./components/Users/UserList";
import NewUser from "./components/NewUser/NewUser";

const DUMMY_USERS = [
  {
    id: 0,
    userName: "Bill",
    userAge: 60,
  },
  {
    id: 1,
    userName: "Gabriel",
    userAge: 50,
  },
  {
    id: 2,
    userName: "Laura",
    userAge: 30,
  },
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <Card>
        <h2>User App (revision)</h2>
        <NewUser onAddUser={addUserHandler} />
        <UserList items={users} />
      </Card>
    </div>
  );
};

export default App;
