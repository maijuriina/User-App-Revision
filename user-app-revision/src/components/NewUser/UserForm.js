import "./UserForm.css";
import { React, useState } from "react";

const UserForm = (props) => {
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

    props.onSubmitUserData(userFormData);

    // reset data
    setUserInput({
      userName: "",
      userAge: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={userInput.userName}
        onChange={userNameChangeHandler}
      ></input>

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        min="0"
        value={userInput.userAge}
        onChange={userAgeChangeHandler}
      ></input>
      <button type="submit">
        <span className="buttonText">Submit</span>
      </button>
    </form>
  );
};

export default UserForm;
