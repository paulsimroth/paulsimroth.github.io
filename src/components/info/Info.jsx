import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faHtml5, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faMoneyBillTransfer, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./info.css";

import Menu from "../menu/Menu";

/* Component*/

export default class Info extends Component{
    render(){
        return(
            
            <div className='container'>
                <Menu/>
                <span className='top_tag info_tag'>&lt;body&gt;</span>
                <div className='text_area4'>
                    <h1>
                        About me.
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
                    <Link to="/education" ><button className='button1 info_btn'>MY EDUCATION</button></Link>
                    
                    <Link to="/projects" ><button className='button1 info_btn'>MY PROJECTS</button></Link>
                    
                </div>
                
                <div className='skill_icons'>
                    
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
                        <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                        <p>React.js | Axios</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                        <p>Game Development: Phaser</p>   
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/>
                        <p>FinTech | Dezentralized Finance | DeFi Analysis</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBriefcase} color="#994d00"/>
                        <p>Blockchain for Business | Use Cases | Hyperledger | Baseline Protocol | Development Processes | SCRUM</p>
                    </div> 

                    <div>
                        <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                        <p>Git | GitHub</p>   
                    </div>
                </div>

                <span className='bottom_tag info_tag'>
                    &lt;/body&gt;
                    <br/>
                    <span className='html_tag info_tag'>&lt;/html&gt;</span>
                </span> 
            </div>
            
        )
    }
};