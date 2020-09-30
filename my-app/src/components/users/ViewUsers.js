import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom'
import axios from 'axios';


export default function ViewUsers() {
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        viewUsersById();
        // return () => {
        //     cleanup
        // }
    }, [])

    const viewUsersById = async () =>{
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data);
}

    return (
        <div className="container">
            <div className="text-center py-4">
           <h2 className="display-4">View A User {id}</h2>
<ul className="list-group w-10 border shadow">
    <li className="list-group-item">Name: {user.name}</li>
    <li className="list-group-item">User Name: {user.username}</li>
    <li className="list-group-item">Email: {user.email}</li>
    <li className="list-group-item">Phone: {user.phone}</li>
</ul>
 </div>
 </div>
    )
}
