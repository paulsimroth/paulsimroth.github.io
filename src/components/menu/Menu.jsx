import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUser , faEnvelope, faLaptopCode, faBook} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import logo from "./logo_dark.png";
import './menu.css';

//Navbar
//Menu Component

export default class Menu extends Component{
    render(){
        return(
            
            <div className='nav_area'>
                
                <Link to = "/">
                    <img src={logo}  alt="My Logo" className='logo'/>
                </Link>
                
                <nav className='nav'>
                    <NavLink exact="true" activeclassname="active" className='nav_link' to="/">
                        <FontAwesomeIcon icon={faHome} color= "#595959"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" className='nav_link' to="/about">
                        <FontAwesomeIcon icon={faUser} color= "#595959"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" className='nav_link' to="/projects">
                        <FontAwesomeIcon icon={faLaptopCode} color= "#595959"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" className='nav_link' to="/education">
                        <FontAwesomeIcon icon={faBook} color= "#595959"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" className='nav_link' to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color= "#595959"/>
                    </NavLink>

                </nav>

                <ul className='nav_media'>
                    <li>
                        <a target="_blank" rel="noreferrer" className='nav_media_link' href="https://www.linkedin.com/in/paul-simroth/">
                                <FontAwesomeIcon icon={faLinkedin} color= "#595959" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" className='nav_media_link' href="https://github.com/PaulSimroth">
                            <FontAwesomeIcon icon={faGithub} color= "#595959" />
                        </a>
                    </li>
                </ul>

                <nav className='nav_legal'>
                    <NavLink exact="true" activeclassname="active" className='nav_legal_link' to="/imprint">
                        Imprint
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" className='nav_legal_link' to="/data">
                        Privacy Policy
                    </NavLink>
                </nav>
            </div>
        )
    }
};

