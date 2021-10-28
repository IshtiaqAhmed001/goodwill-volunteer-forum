import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="container">

            <div className="d-flex justify-content-between">
                <div className="w-25">
                    <img className="w-50" src={logo} alt="" />
                </div>
                <div className="d-flex" >
                    <NavLink className="navlinks" to="/home">Home</NavLink>
                    <NavLink className="navlinks" to="/donation">Donation</NavLink>
                    <NavLink className="navlinks" to="/events">Events</NavLink>
                    <NavLink className="navlinks" to="/Blog">Blog</NavLink>

                    {
                        user.email ? <button className="nav-button btn btn-primary" onClick={logOut}>Log Out</button> :
                            <Link to="/login"> <button className="nav-button btn btn-primary">Login</button></Link>

                    }
                    <Link to="/admin">  <button className="nav-button btn btn-dark">Admin</button></Link>

                </div>
            </div>
        </div>

    );
};

export default Header;