import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faHtml5, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faMoneyBillTransfer, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import "./info.css";

import Menu from "../menu/Menu";

/* Styling */

const Textarea = styled.div`
    position: absolute;
    left: 15%;
    top: 51%;
    transform: translateY(-50%);
    width: 35%;
    vertical-align: middle;
    display: table-cell;
    max-height: 90%;

    h1 {
        color: #ffd700;
        font-size: 53px;
        margin-top: 0;
        font-family: "Coolvetica";
        font-weight: 400;
        position: relative;
        margin-bottom: 40px;

        &::before {
            content: "<h1>";
            color: #ffd700;
            font-size: 18px;
            position: absolute;
            margin-top: -30px;
            left: -10px;
            animation: fadeIn 1s 1.7s backwards;
            opacity: 0.6;
            line-height: 18px;
        }

        &::after {
            content: "</h1>";
            color: #ffd700;
            font-size: 18px;
            position: absolute;
            margin-left: 20px;
            animation: fadeIn 1s 1.7s backwards;
            opacity: 0.6;
            line-height: 18px;
            left: -30px;
            bottom: -20px;
        }
    }

    h2 {
        color: #8d8d8d;
        margin-top: 30px;
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 3px;
        animation: fadeIn 1s 1.8s backwards;
    }

    p {
        text-align: justify;
        font-size: 16px;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 300;
        min-width: fit-content;
        animation: pulse 1s;

        &:nth-of-type(1) {
            animation-delay: 0.3s;
        }
        &:nth-of-type(2) {
            animation-delay: 0.4s;
        }
        &:nth-of-type(3) {
            animation-delay: 0.5s;
        }
    }
`;

const SkillIcons = styled.div`
    display: flex;
    width: 45vw;
    right: 3vw;
    height: 98vh;
    top: 2vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: visible;
    position: absolute;
    opacity: 0.8;

    div {
        box-sizing: border-box;
        animation: backInDown 1s;
        padding: 3px;
        width: 170px;
        font-size: 18px;
        margin: 6px auto;

        &:hover {
            transform: scale(1.2);
            transition: all 0.5s ease;
        }
    }

    p {
        font-size: 14px;
        color: #8d8d8d;
        letter-spacing: 2px;
        font-weight: 300;
    }
`;

/* Component*/

export default class Info extends Component{
    render(){
        return(
            
            <div className='container'>
                <Menu/>
                <span className='top_tag'>&lt;body&gt;</span>
                <Textarea>
                    <h1>
                        About me
                    </h1>
                    <p>
                        I am a self-taught blockchain developer, passionate about learning and this technology as a whole. 
                        After starting my journey in this space in the summer of 2021 by beginning to take courses at Moralis Academy, I am now looking forward to 
                        a role as a developer with the opportunity to work with the latest technologies on interesting projects.
                    </p>
                    <p>
                        During my time studying as well as during the projects completed during the courses 
                        I had the opportunity to familiarize myself with Javascript and Solidity aswell as React.js, HTML and CSS.
                        Check out my skills, seen here on the right or on the Education page. Check out the Porjects page to see my finished and ongoing projects.
                    </p>
                    <p>
                        For more information don´t hesitate to contact me via the contact form or visit my LinkedIn and GitHub.
                    </p>
                    <br/>
                    <Link to="/education" ><button>MY EDUCATION</button></Link>
                    
                    <Link to="/projects" ><button>MY PROJECTS</button></Link>
                    
                </Textarea>
                
                <SkillIcons>
                    
                    <div>
                        <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                        <p>JavaScript | API Communication</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                        <p>HTML</p>
                    </div>    
           
                    <div>
                        <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                        <p>CSS | Bootstrap</p>
                    </div>
                   
                    <div>
                        <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                        <p>Solidity (EVM, ERC20, ERC721, ERC1155) | Truffle | Ganache | Hardhat | Openzeppelin | ChainLink | Oracles | DApp Development | Ethers.Js</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/>
                        <p>FinTech | Dezentralized Finance | DeFi Analysis</p>
                    </div>
                 
                    <div>
                        <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                        <p>React.js | Axios</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                        <p>Game Development: Phaser</p>   
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                        <p>Git | GitHub</p>   
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} color="#994d00"/>
                        <p>Blockchain for Business | Use Cases | Hyperledger | Baseline Protocol | Development Processes | SCRUM</p>
                    </div>         
                    
                </SkillIcons>
                <span className='bottom_tag'>
                    &lt;/body&gt;
                    <br/>
                    <span className='html_tag'>&lt;/html&gt;</span>
                </span> 
            </div>
            
        )
    }
};