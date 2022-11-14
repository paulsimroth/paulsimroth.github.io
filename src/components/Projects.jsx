import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCss3, faEthereum, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Menu from "./Menu";

/* Styling */
const Container = styled.div`
    width: 100%;
    will-change: contents;
    height: 90%;
    min-height: 566px;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 1s forwards;
`;

const Textarea = styled.div`
    position: absolute;
    height: 95%;
    left: 11%;
    top: 5%;
    margin-top: 50px;
    width: 89%;
    float: left;
    clear: none;
    overflow: auto;
    
    h1 {
        background-color: #022c43;
        position: fixed;
        color: #ffd700;
        font-size: 50px;
        margin: 10px;
        top: 4%;
        padding: 10px;
        font-family: "Coolvetica";
        font-weight: 400;
        animation: fadeIn 1s 0.5s backwards;
        z-index: 5;
    }

    h2 {
        background-color: #022c43;
        position: fixed;
        color: #fff;
        font-size: 25px;
        margin: 10px;
        top: 18%;
        left: 11%;
        padding: 10px;
        font-family: "Coolvetica";
        font-weight: 400;
        animation: fadeIn 1s 0.5s backwards;
        z-index: 5;
    }
    
    p {
        font-style: 13px;
        color: #fff;
        font-weight: 300;
        min-width: fit-content;
        animation: pulse 1s;
    }
`;
const Projects = styled.div`
    overflow: auto;
    position: absolute;
    top: 12%;
`;

const ProjectContainer = styled.div`
    width: 260px;
    height: 260px;
    margin: 30px;
    padding: 5px;
    border: 2px solid #ffd700;
    border-radius: 10px;
    font-size: 12px;
    letter-spacing: 2px;
    box-sizing: border-box;
    float: left;
    clear: none;

    h3 {
        color: #fff;
        font-size: 25px;
        margin: 0;
        font-family: "Coolvetica";
        font-weight: 400;
    }
    
    a {
        font-size: 20px;
        margin-left: 15px;
    }

    div {
        font-size: 20px;
        margin-left: 25px;
        spacing: 20px;
        float: left;
        clear: none;
        text-align: center;
    }
`;

/* Component*/

export default class Home extends Component{
    render(){
        return(
            
            <Container>
                <Menu/>
                <Textarea>
                    <h1>On this page you can see my projects I have done so far.</h1>
                    <h2>These are my finished study projects, listed from newest to oldest</h2>
                    <Projects>
                    <ProjectContainer>
                        <h3>Metaverse</h3>
                        <p>
                            In this repository you can find my version of the Moraland metaverse done as part of the course "Create your Metaverse" 
                            As part of the course the communication was done with the now deprecated version of Moralis Servers V1. 
                            I instead chose ethersjs to handle the communication between the front end and the smart contract. 
                            I also slightly changed the smart contract.
                        </p>

                        <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                        <div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/metaverse_project">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>React Coin Exchange</h3>
                        <p>
                            I did this react App as part of the course react Web Development 101 at Moralis Academy. 
                            It is a react web app for a coin exchange. 
                            We used the coinpaprika API to fetch data about top ranked coins.
                        </p>

                        <div><FontAwesomeIcon icon={faReact} color= "#5ED4F4"/></div>
                        <div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/react-coinexchange">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>JS DEX Frontend</h3>
                        <p>
                            This DEX Frontend was built as part of the course "Javascript for Blockchain Developers"at Moralis Academy. 
                            It was built using the Coinpaprika API for getting data on the top ranked coins.
                            Furthermore we made use of the servers provided by Moralis aswell as a Plug in for a Fiat onramp and the Plug in for the 1inch API to perform swaps.
                        </p>

                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                        <div><FontAwesomeIcon icon={faCss3} color= "#28A4D9"/></div>

                        <div>                         
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/jsdex_frontend">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>Decentralized ERC20 Exchange</h3>
                        <p>
                            The project is using Truffle and Openzeppelin. 
                            It consists of a wallet smart contract and a dex contract which inherits from the wallet. 
                            The token contract is there for testing.
                            This Solidity project was done during the Ethereum Smart Contract Programming 201 Course at Moralis Academy.
                        </p>

                        <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>

                        <div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/eth201project">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>ETH Wallet</h3>
                        <p>
                            This Project was for the Ethereum Smart Contract Programming 101 Course at Moralis Academy. 
                            It is a multi signature wallet where you need the approval of 2/3 Admins to complete a transaction.
                        </p>

                        <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>

                        <div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/Ethereum101-course-project">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>

                    </Projects>
                </Textarea>
            </Container>
        )
    }
};