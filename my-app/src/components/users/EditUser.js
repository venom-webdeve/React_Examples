import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom'

export default function EditUser() {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        getUsersById();
        // return () => {
        //     cleanup
        // }
    }, [])

    const getUsersById = async () =>{
            const res = await axios.get(`http://localhost:3002/users/${id}`);
            setUser(res.data);
    }

    const onInputChange = (e) => {
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }

   const {name, username, email, phone} = user;

   const  onUserAdd = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/users/${id}`, user);
    history.push("/");

   }

    return (
        <div className="container py-4">
            <div className="w-45 border mx-auto shadow p-4">
            <h2 className="text-center mb-2">Edit A Users</h2>
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

  <button type="submit" className="btn btn-warning">Update User</button>
</form>
            </div>
        </div>
    )
}

