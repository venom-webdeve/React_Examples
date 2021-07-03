import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from "../context/auth/AuthContext";

const NavBar =()=> {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
  console.log(AuthContext);
  const LogInStatus = ()=>{
    setIsLoggedIn(!isLoggedIn);
  }
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Shopin</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
        </li>
      </ul>
      <button onClick={LogInStatus} className="btn btn-sm btn-outline-success">{isLoggedIn?"Logout":"Log In"}</button>
    </div>
 
  </div>
</nav>
    )
}

export default NavBar
