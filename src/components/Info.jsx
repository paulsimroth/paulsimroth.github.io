import { faCss3, faEthereum, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import styled from "styled-components";

import Menu from "./Menu";

/* Styling */
const Container = styled.div`
    width: 100%;
    will-change: contents;
    height: 90%;
    top: -1vh;
    min-height: 566px;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 1s forwards;
`;

const Textarea = styled.div`
    position: absolute;
    left: 15%;
    top: 50%;
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
            margin-top: -50px;
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
        font-size: 16px;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 300;
        min-width: fit-content;
        animation: pulse 1s;

        &:nth-of-type(1) {
            animation-delay: 1.1s;
        }
        &:nth-of-type(2) {
            animation-delay: 1.2s;
        }
        &:nth-of-type(3) {
            animation-delay: 1.3s;
        }
    }
`;

const Toptag = styled.span`
    bottom: auto;
    top: 35px;
    color: #ffd700;
    opacity: 0.6;
    position: absolute;
    bottom: 0;
    left: 10%;
    font-size: 18px;
`;

const Bottomtag = styled.span`
    top: 90%;
    color: #ffd700;
    opacity: 0.6;
    position: absolute;
    bottom: 10px;
    left: 10%;
    font-size: 18px;
`;

const HTMLTag = styled.span`
    margin-left: -20px;
`;

const SkillIcons = styled.div`
    display: block;
    width: 50%;
    right: 12%;
    top: 9%;
    text-align: center;
    overflow: hidden;
    position: absolute;

    div {
        animation: backInDown 1s;
        padding: 3%;
        width: 23px;
        font-size: 23px;
        margin: 8px auto;

        &:hover {
            transform: scale(1.2);
            transition: all 0.5s ease;
        }
    }

    p {
        font-size: 16px;
        color: #8d8d8d;
        letter-spacing: 3px;
        font-weight: 300;
    }
`;

/* Component*/

export default class Home extends Component{
    render(){
        return(
            
            <Container>
                <Menu/>
                <Toptag>&lt;body&gt;</Toptag>
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
                        Check out my skills, seen her on the right and also my projects which you can find on the Projects page.
                    </p>
                    <p>
                        For more information don´t hesitate to contact me via the contact form or visit my LinkedIn and GitHub.
                    </p>
                    
                </Textarea>
                
                <SkillIcons>
                    
                    <div>
                        <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                        <p>JavaScript, ES6, Ethers.Js</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                        <p>HTML</p>
                    </div>    
           
                    <div>
                        <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                        <p>CSS</p>
                    </div>
                   
                    <div>
                        <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                        <p>Solidity: ERC20, ERC721, Truffle, Openzeppelin</p>
                    </div>
                 
                    <div>
                        <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                        <p>React.js</p>
                    </div>                  
                    
                </SkillIcons>
                <Bottomtag>
                    &lt;/body&gt;
                    <br/>
                    <HTMLTag>&lt;/html&gt;</HTMLTag>
                </Bottomtag> 
            </Container>
            
        )
    }
};