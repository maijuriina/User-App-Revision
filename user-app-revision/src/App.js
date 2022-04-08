import Card from "./components/UI/Card";
import "./App.css";
import UserForm from "./components/NewUser/UserForm";
import NewUser from "./components/NewUser/NewUser";
import { useState } from "react";

const DUMMY_USERS = [
  {
    id: 0,
    name: "Bill",
    age: 60,
  },
  {
    id: 1,
    name: "Gabriel",
    age: 50,
  },
  {
    id: 2,
    name: "Laura",
    age: 30,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      console.log(user);
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <Card>
        <h2>User App (revision)</h2>
        <NewUser onAddUser={addUserHandler}></NewUser>
      </Card>
    </div>
  );
}

export default App;
