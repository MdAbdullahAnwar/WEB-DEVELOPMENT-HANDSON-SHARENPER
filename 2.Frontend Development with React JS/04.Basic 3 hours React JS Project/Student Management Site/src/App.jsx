import React, { useState } from 'react'
import './App.css'

function App() {

  const [ count, setCount] = useState(0);

  const [ name, setName] = useState("");
  const [ phoneNumber, setPhoneNumber] = useState("");
  const [ address, setAddress] = useState("");

  const [ list, setList] = useState([]);

  const [ uid, setUid] = useState(null);
  const [ update, setUpdate] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  const handleTask = (e) => {
    if(name.length === 0 || phoneNumber.length === 0 || address.length === 0)
    {
      alert("Enter Valid Student Details!");
      return;
    }

    setList([...list, [name," | ", phoneNumber," | ", address," "]])

    setName("");
    setPhoneNumber("");
    setAddress("");

    setCount(count+1);
  }

  const handleDelete = (i) => {
    const filterList = list.filter((elm) => elm !== list[i]);
    setList(filterList);

    setName("");
    setPhoneNumber("");
    setAddress("");

    setCount(count-1);
    setUpdate(false);
  }

  const handleEdit = (i) => {
    const filterList = list.filter((elm) => elm === list[i]);
    setName(filterList[0][0]);
    setPhoneNumber(filterList[0][2]);
    setAddress(filterList[0][4]);

    setUid(i);
    setUpdate(true);
  }

  const handleUpdate = () => {
    list.splice(uid, 1, [name, " | ", phoneNumber, " | ", address, " "]);
    setName("");
    setPhoneNumber("");
    setAddress("");
    setUpdate(false);
  }

  return (
    <div>
      <h1>Student Manager Pro</h1>
      <div>Total Students: {count}</div>
      <br></br>

      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" 
          type="text" 
          placeholder="Enter Student's Name" 
          value={name} 
          onChange={(e) => handleName(e)}
        />
        <br></br>
        <br></br>

        <label htmlFor="phNo">Phone No: </label>
        <input id="phNo" 
          type="number" 
          placeholder="Enter Student's Phone No." value={phoneNumber} 
          onChange={(e) => handlePhoneNumber(e)}
        />
        <br></br>
        <br></br>

        <label htmlFor="address">Address: </label>
        <input id="address" 
          type="text" 
          placeholder="Enter Student's Address" 
          value={address} 
          onChange={(e) => handleAddress(e)}
        />
        <br></br>
        <br></br>

        {update ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleTask}>Add</button> }
       
      </div>
      <br></br>

      <h2>All Students</h2>
      
      <div>
        <ul>
          {list.map((item , i) => <li key={i} > {item} 
          <button onClick={() => {handleEdit(i)}}>Edit</button>  
          <button onClick={() => {handleDelete(i)}}>Delete</button> </li>)}
        </ul>
      </div>

    </div>
  )
}

export default App
