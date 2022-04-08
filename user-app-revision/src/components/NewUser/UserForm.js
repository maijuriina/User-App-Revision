import "./UserForm.css";
import { useState } from "react";

const UserForm = () => {
  const [userInput, setUserInput] = useState({
    userName: "",
    userAge: "",
  });

  const userNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const userAgeChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, userAge: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userFormData = {
      userName: userInput.userName,
      userAge: userInput.userAge,
    };

    console.log(userFormData);

    // reset data
    setUserInput({
      userName: "",
      userAge: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Username</label>
      <input
        type="text"
        value={userInput.userName}
        onChange={userNameChangeHandler}
      ></input>

      <label>Age</label>
      <input
        type="number"
        min="0"
        value={userInput.userAge}
        onChange={userAgeChangeHandler}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
