import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Navbar() {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to='javascript:void(0)'
                    onClick={() => window.location = 'mailto:hello@jelyn.co'}><MailOutlineIcon style={{ color: "#cd98b7", fontSize: "22" }} /></Link>
            </div>
        </div>
    );
};

export default Navbar;