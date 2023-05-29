import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){

    const [click, setClick] = useState(false);

    let activeStyle = {
        textDecoration: "underline",
      };

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className="navbar-logo" >
                            <img src={require('./resources/logo.png')} className="logo"/>
                            Hotel
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/hotels" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>Hotels</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/clients" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>Clients</NavLink>
                    </li>
                    <li className="nav-item position-absolute top-5 end-0">
                        <NavLink to="/profile" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>Profile</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}