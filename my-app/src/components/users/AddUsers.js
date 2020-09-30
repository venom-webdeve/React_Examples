import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

export default function AddUsers() {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const onInputChange = (e) => {
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }

   const {name, username, email, phone} = user;

   const  onUserAdd = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    history.push("/");

   }

    return (
        <div className="container py-4">
            <div className="w-45 border mx-auto shadow p-4">
            <h2 className="text-center mb-2">Add a Users</h2>
            <form onSubmit={ (e) => onUserAdd(e)} >
    <div className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" name="name" required value={name} onChange={e => onInputChange(e)} />
  </div> 
  <div className="form-group">
    <label>User Name:</label>
    <input type="text" className="form-control" required name="username" value={username} onChange={e => onInputChange(e)} />
  </div>               
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" required name="email" value={email} onChange={e => onInputChange(e)} />
  </div>
  <div className="form-group">
    <label >Phone</label>
    <input type="text" maxLength="10" required className="form-control" name="phone" value={phone} onChange={e => onInputChange(e)} />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
    )
}
