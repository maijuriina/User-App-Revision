import "./NewUser.css";
import UserForm from "./UserForm";

const NewUser = (props) => {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    console.log(userData);
    props.onAddUser(userData); // property called in App.js to pass data
  };

  return <UserForm onSubmitUserData={saveUserDataHandler}></UserForm>;
};

export default NewUser;
