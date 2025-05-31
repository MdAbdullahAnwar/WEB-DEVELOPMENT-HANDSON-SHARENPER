// Write your code below:
import React from "react";

const AddUser = () => {

  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter User Name"
          
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter Age"
        />
        <button type="submit">Add User</button>

      </form>
    </div>
  );
}

export default AddUser;