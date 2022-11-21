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
    left: 11%;
    top: -1vh;
    margin-top: 30px;
    width: 89vw;
    height: 99vh;
    overflow: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 100%;
    
    h1 {
        width: 80vw;
        height: 9vh;
        color: #ffd700;
        font-size: 50px;
        margin: 20px 10px 20px 10px;

        padding: 10px;
        font-family: "Coolvetica";
        font-weight: 400;
        animation: fadeIn 1s 0.5s backwards;
        z-index: 5;
        flex: 1 1 100%;
    }
    
`;

const ProjectsDone = styled.div`  
    width: 88vw;
    
    h2 {
        width: 85vw;
        height: 25px;
        
        color: #fff;
        font-size: 25px;
        margin: 10px;
        padding: 10px;
        font-family: "Coolvetica";
        font-weight: 400;
        animation: fadeIn 1s 0.5s backwards;
    }
`;

const ProjectsCurr = styled.div`
    width: 88vw;

    h2 {
        width: 85vw;
        height: 25px;
        color: #fff;
        font-size: 25px;
        margin: 10px;
        padding: 10px;
        font-family: "Coolvetica";
        font-weight: 400;
        animation: fadeIn 1s 0.5s backwards;
    }
`;

const ProjectContainer = styled.div`
    width: 265px;
    height: 265px;
    margin: 20px;
    padding: 6px;
    border: 2px solid #ffd700;
    border-radius: 10px;
    font-size: 12px;
    letter-spacing: 2px;
    box-sizing: border-box;
    float: left;
    clear: none;

    &:hover {
        transform: scale(1.02);
        border: 3px solid #ffd700;
        transition: all 0.5s ease;
    }

    h3 {
        color: #fff;
        font-size: 25px;
        margin: 0;
        font-family: "Coolvetica";
        font-weight: 400;
    }

    p {
        text-align: justify;
        font-style: 13px;
        color: #fff;
        font-weight: 300;
        min-width: fit-content;
        animation: pulse 1s;
    }
    
    a {
        font-size: 20px;
        margin-left: 15px;

        &:hover svg {
            color: #ffd700;
            transform: scale(1.3);
            transition: all 0.5s ease;
        }
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
                    
                <ProjectsDone>
                    <h2>These are my finished study projects, listed newest to oldest.</h2>    
                    <ProjectContainer style={{order: 1}}>
                        <h3>Metaverse</h3>
                        <p>
                            Here you can find my version of the Moraland metaverse done as part of the course "Create your Metaverse" 
                            As part of the course the the interaction between ERC721 contract and Frontend was done with the now deprecated version of Moralis Servers V1. 
                            I instead chose Ethers.js to handle it instead and also slightly changed the smart contract.
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
                        <h3>React.Js Coin Exchange</h3>
                        <p>
                            I did this react App as part of the course react Web Development 101 at Moralis Academy. 
                            It is a frontend for a coin exchange where top coins are listed and some a balance is shown. 
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
                            It was built using the Coinpaprika API for fetching data on the top ranked coins.
                            Furthermore we made use of Moralis Server V1 aswell as a Plug in for a Fiat onramp and the Plug in for the 1inch API to perform swaps.
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
                        <h3>Ethereum Wallet</h3>
                        <p>
                            This Project was for the Ethereum Smart Contract Programming 101 Course at Moralis Academy. 
                            It is a multi signature wallet where you need the approval of the majority of adresses which have been assigned the role of Admin to complete a transaction.
                        </p>

                        <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>

                        <div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/Ethereum101-course-project">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>
                </ProjectsDone>
                
                <ProjectsCurr>
                    <h2>These are my projects currently under development.</h2>   
                    <ProjectContainer>
                        <h3>Ethereum Game</h3>
                        <p>
                        In this repository you can see my version of the game coded as part of the course "Ethereum Game Programming" at Moralis Academy. 
                        For the game Phaser 3.15.1 was used. The coins eraned in-game are sent to your wallet as an ERC-20 Token.
                        </p>

                        <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>

                        <div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/eth_game">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>NFT Marketplace</h3>
                        <p>
                        This is my version of the NFT Marketplace, cloned from Academy Kitties @ Moralis Academy, done as part of the course "Build an NFT Market Place".
                        My version features bears instead of cats. The msg.sender can mint 10 Generation 0 bears. after that you can breed bears, where the DNA of the parents determines the features of the new bear.                     
                        </p>

                        <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                        <div><FontAwesomeIcon icon={faCss3} color= "#28A4D9"/></div>

                        <div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/nft_marketplace">
                            <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
                        </a>
                        </div>
                    </ProjectContainer>

                    </ProjectsCurr>
                </Textarea>
            </Container>
        )
    }
};