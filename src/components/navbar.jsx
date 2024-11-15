import React, { Component } from 'react';

const NavBar = props => {
    console.log ('NavBar - Rendered');

    return (
        <nav className="navbar navbar-light bg-loght">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
             </a>
        </nav>
    );    
}

export default NavBar;