import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faHtml5, faJsSquare, faReact, faGitAlt, faNodeJs, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faMoneyBillTransfer, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./info.css";
import tsLogo from "../img/typescript_icon.svg";
import solLogo from "../img/solidity_icon_light.svg";

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
                        As a blockchain developer, I am passionate about decentralized systems aswell as the possibilities and future of blockchain technology. 
                        My core skills include developing decentralized applications and smart contracts. 
                        I am proficient in Javascript, ReactJS, HTML, CSS and Smart contract development using Solidity. 
                        I am always eager to learn about new use cases and opportunities to apply blockchain technology. 
                    </p>
                    <p>
                        In addition to my technical expertise, my academic background in history gives me a unique perspective on blockchain technology. 
                        I am an asset to any team with my interdisciplinary approach to problem-solving and critical thinking skills. 
                        I also have several years of working experience in aviation and understand the importance of security, efficiency and scalability.
                    </p>
                    <p>
                        If you're looking for a blockchain developer or want to work on a new project, I would love to hear from you. 
                        <br/>
                        <strong>Reach out to me to discuss how we can work together to explore the possibilities and future of blockchain technology!</strong>
                    </p>
                    <br/>
                    
                    <Link to="/projects" ><button className='button1 info_btn'>MY PROJECTS</button></Link>

                    <Link to="/education" ><button className='button1 info_btn'>MY EDUCATION</button></Link>

                </div>
                
                <div className='skill_icons'>
                    
                    <div>
                        <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D" className="skill_logo" />
                        <p><strong>JavaScript</strong></p>
                    </div>

                    <div>
                        <img src={tsLogo} alt="logo typescript" className="skill_logo" />
                        <p><strong>TypeScript</strong></p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faHtml5} color= "#F06529" className="skill_logo" />
                        <p><strong>HTML</strong></p>
                    </div>    
           
                    <div>
                        <FontAwesomeIcon icon={faCss3} color= "#28A4D9" className="skill_logo" />
                        <p><strong>CSS</strong> | Bootstrap | Tailwind.css<br/> <strong>Animations:</strong> Animate.css | Framer Motion</p>
                    </div>
                   
                    <div>
                        <img src={solLogo} alt="logo solidity" className="skill_logo" />
                        <p><strong>Solidity</strong><br/> (EVM, ERC20, ERC721, ERC1155) | Truffle | Ganache | Hardhat | Oracles | DApp Development | Ethers.Js</p>
                    </div>
                 
                    <div>
                        <FontAwesomeIcon icon={faReact} color= "#5ED4F4" className="skill_logo" />
                        <p><strong>React.js</strong> | Wagmi | <strong>Next.js</strong> | SWR</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faNodeJs} color= "#85bb65" className="skill_logo" />
                        <p><strong>API Communication</strong> | Axios | Moralis </p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGoogle} color= "#EA4335" className="skill_logo" />
                        <p><strong>Firebase</strong> | Google Cloud</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGamepad} color= "#ffffcc" className="skill_logo" />
                        <p><strong>Game Development:</strong> Phaser</p>   
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65" className="skill_logo" />
                        <p><strong>Dezentralized Finance</strong> | FinTech | DeFi Analysis</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBriefcase} color="#994d00" className="skill_logo" />
                        <p><strong>Blockchain for Business</strong> | Use Cases | Hyperledger | Baseline Protocol | Development Processes | SCRUM</p>
                    </div> 

                    <div>
                        <FontAwesomeIcon icon={faGitAlt} color= "#F06529" className="skill_logo" />
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