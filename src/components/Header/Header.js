import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Header = () => {

    return (
        <div>

            <div className="d-flex justify-content-between">
                <div className="w-25">
                    <img className="w-50" src={logo} alt="" />
                </div>
                <div className="d-flex" >
                    <NavLink className="navlinks" to="/home">Home</NavLink>
                    <NavLink className="navlinks" to="/donation">Donation</NavLink>
                    <NavLink className="navlinks" to="/events">Events</NavLink>
                    <NavLink className="navlinks" to="/Blog">Blog</NavLink>
                    <button className="nav-button btn btn-primary">Register</button>
                    <button className="nav-button btn btn-dark">Admin</button>
                </div>
            </div>
            <div className="intro-search">
                <h1 className="my-5">GROW BY HELPING PEOPLE IN NEED</h1>
                <InputGroup className="my-3 w-25 mx-auto">
                    <FormControl
                        placeholder="Search.."
                        aria-label="Search.."
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>

    );
};

export default Header;