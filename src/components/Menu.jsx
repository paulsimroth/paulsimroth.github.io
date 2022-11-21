import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUser , faEnvelope, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

//Navbar

// Styling with styled components

const Img = styled.img`
    display: block;
    width: 60px;
    height: auto;
    margin: 8px auto;
    pointer-events: none;
    padding: 10px 0;
`;

const NavArea = styled.div`
    background: #181818;
    width: 7%;
    height: 100vh;
    postion: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;
`;

const Nav = styled.nav`
    display: block;
    text-align: center;
    position: absolute;
    height: 210px;
    top: 30%;
    width: 7%;

    a {
        font-size: 22px;
        color: 4d4d4de;
        display: block;
        line-height: 51px;
        height: 51px;
        position: relative;
        text-decoration: none;

        i {
            transition: all 0.8s ease-out;
        }

        &:hover {
            color: #ffd700;

            svg {
                opacity: 0;
            }

            &:after {
                opacity: 1;
            }
        }

        &:after {
            content: '';
            font-size: 12px;
            letter-spacing: 2px;
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            text-align: center;
            opacity: 0;
            transition: all 0.3s ease-out;
        }

        &:first-child {
            &::after {
                content: 'Home';
            }
        }

        &:nth-child(2) {
            &::after {
                content: 'About';
            }
        }

        &:nth-child(3) {
            &::after {
                content: 'Projects';
            }
        }

        &:nth-child(4) {
            &::after {
                content: 'Contact';
            }
        }

    }
    a.active {
        svg {
            color: #ffd700;
        }
    }
`;

const Ulist = styled.ul`
    position: absolute;
    bottom: 20px;
    width: 7%;
    display: block;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0;

    li {
        a {
            padding: 7px 0;
            display: block;
            font-size: 15px;
            line-height: 16px;

            &:hover svg {
                color: #ffd700;
            }
        }
    }
`;


//Menu Component

export default class Menu extends Component{
    render(){
        return(
            
            <NavArea>
                
                <Link to = "/">
                    <Img src=""  />
                </Link>
                
                <Nav>
                    <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color= "#4d4d4e"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" to="/about">
                        <FontAwesomeIcon icon={faUser} color= "#4d4d4e"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" to="/projects">
                        <FontAwesomeIcon icon={faLaptopCode} color= "#4d4d4e"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color= "#4d4d4e"/>
                    </NavLink>

                </Nav>

                <Ulist>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paul-simroth/">
                                <FontAwesomeIcon icon={faLinkedin} color= "#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/PaulSimroth">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                    </li>
                </Ulist>
            </NavArea>
        )
    }
};

