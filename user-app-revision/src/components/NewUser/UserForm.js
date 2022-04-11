import { React, useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const userInputNameRef = useRef();
  const userInputAgeRef = useRef();

  /*   const [userInput, setUserInput] = useState({
    userName: "",
    userAge: "",
  }); */

  const [error, setError] = useState();

  // with useState
  /*   const userNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const userAgeChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, userAge: event.target.value };
    });
  }; */

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = userInputNameRef.current.value; // ref only takes the value as submit-button is pressed instead of monitoring all changes
    const enteredAge = userInputAgeRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age",
      });
      return;
    }

    const userFormData = {
      userName: enteredName,
      userAge: enteredAge,
    };

    props.onSubmitUserData(userFormData);

    // reset data (with useState)
    /*     setUserInput({
      userName: "",
      userAge: "",
    }); */

    // reset data with ref (typically DO NOT MODIFY DOM DIRECTLY!!)
    userInputNameRef.current.value = "";
    userInputAgeRef.current.value = "";
  };

  // below clears error
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input
            className={classes.input}
            id="username"
            type="text"
            /*with useState         value={userInput.userName}
            onChange={userNameChangeHandler} */
            ref={userInputNameRef}
          ></input>

          <label className={classes.label} htmlFor="age">
            Age
          </label>
          <input
            className={classes.input}
            id="age"
            type="number"
            min="0"
            /* with useState         value={userInput.userAge}
            onChange={userAgeChangeHandler} */
            ref={userInputAgeRef}
          ></input>
          <Button className={classes.button} type="submit">
            <span className="buttonText">Submit</span>
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserForm;
