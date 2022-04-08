import { React, useState } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

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

    if (
      userInput.userName.trim().length === 0 ||
      userInput.userAge.trim().length === 0
    ) {
      <ErrorModal
        title="Empty submission field"
        message="Please enter a valid username and age."
      />;
    }

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
    <div>
      <ErrorModal
        title="Empty submission field"
        message="Please enter a valid username and age."
      />
      <Card>
        <form onSubmit={submitHandler}>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input
            className={classes.input}
            id="username"
            type="text"
            value={userInput.userName}
            onChange={userNameChangeHandler}
          ></input>

          <label className={classes.label} htmlFor="age">
            Age
          </label>
          <input
            className={classes.input}
            id="age"
            type="number"
            min="0"
            value={userInput.userAge}
            onChange={userAgeChangeHandler}
          ></input>
          <Button className={classes.button} type="submit">
            <span className="buttonText">Submit</span>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
