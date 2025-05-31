import React from "react";
import Card from "../UI/Card"; // Import the Card component
import "./AddUser.css"; // Import styles

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Enter Username" />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="Enter Age" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;