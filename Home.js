import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        getAllUsers();
        // return () => {
        //     cleanup
        // }
    }, [])
    
    const getAllUsers = async () =>{
              let res = await axios.get("http://localhost:3002/users");
              setUser(res.data.reverse());
    }

    const deleteUserById = async (id) =>{
          await axios.delete(`http://localhost:3002/users/${id}`);
          getAllUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Welcome to Home Page</h1>
  <table className="table py-2 border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
       users.map((user, index) =>
           (
            <tr>
           <th scope="row">{index + 1}</th>
           <td>{user.name}</td>
           <td>{user.username}</td>
           <td>{user.email}</td>
           <td>
               <Link className="btn btn-outline-primary mr-2" to={`/users/${user.id}`}>View</Link>
               <Link className="btn btn-outline-warning mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
               <Link className="btn btn-outline-danger" onClick={ () => deleteUserById(user.id)} >Delete</Link>
           </td>
           </tr>
       )
       )
   }
  </tbody>
</table>
 </div>
 </div>
    )
}
