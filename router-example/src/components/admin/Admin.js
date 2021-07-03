import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthContext'

function Admin() {
    const {isLoggedIn} = useContext(AuthContext);
    if(!isLoggedIn){
        return <Redirect to='/'/>
    }
    return (
        <div className="container">
            <h2 className="my-3">Admin Page</h2>
            <p>A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.</p>
        </div>
    )
}

export default Admin
