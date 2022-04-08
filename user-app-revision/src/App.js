import Card from "./components/UI/Card";
import "./App.css";
import UserForm from "./components/NewUser/UserForm";

function App() {
  return (
    <div className="App">
      <Card>
        <h2>User App (revision)</h2>
        <UserForm></UserForm>
      </Card>
    </div>
  );
}

export default App;
