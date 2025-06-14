import React,{ useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  handleUsername = (event) => {
    setUsername(event.target.value);
  }

  handleAge = (event) => {
    setAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(username, age);

    setUsername("");
    setAge("");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={handleUsername} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={handleAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;