// Write your code at relevant places in the code below:

import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;