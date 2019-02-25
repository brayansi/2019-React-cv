import React from 'react';
import './NavBar.css';

export default function Navbar(props) {
    return <div className="container-navbar">
        <h1>{ props.name }</h1>
    </div>
}