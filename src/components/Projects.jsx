import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCss3, faEthereum, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Menu from "./Menu";

/* Styling */
const Container = styled.div`
    width: 100vw;
    will-change: contents;
    height: 90vh;
    top: -1vh;
    min-height: 566px;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 1s forwards;
    font-family: 'Segoe UI';
`;

const Textarea = styled.div`
    position: absolute;
    left: 11%;
    top: -1vh;
    margin-top: 5px;
    width: 89vw;
    height: 100vh;
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
        height: 60px;
        color: #ffd700;
        font-size: 50px;
        margin: 20px 10px 0px 10px;
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
        color: #ffd700;
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
        color: #ffd700;
        font-size: 25px;
        margin: 10px;
        padding: 10px;
        font-family: "Coolvetica";
        font-weight: 400;
        animation: fadeIn 1s 0.5s backwards;
    }
`;

const ProjectContainer = styled.div`
    width: 270px;
    height: 270px;
    margin: 20px;
    padding: 6px;
    border: 2px solid #ffd700;
    border-radius: 10px;
    font-size: 12px;
    letter-spacing: 2px;
    box-sizing: border-box;
    float: left;
    clear: none;
    animation: pulse 1s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 8px #595959;
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
        font-style: 11px;
        color: #fff;
        font-weight: 300;
        min-width: fit-content;
    }
`;

const SkillContainer = styled.div`
    width: 250px;  
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    float: left;
    clear: none;
    text-align: center;

    a {
        font-size: 20px;

        &:hover svg {
            color: #ffd700;
            transform: scale(1.4);
            transition: all 0.5s ease;
        }
    }
`;

/* Component*/

export default class Projects extends Component{
    render(){
        return(
            <Container>
                <Menu/>
                <Textarea>
                    <h1>Welcome to my projects page.</h1>
                <ProjectsDone>
                    <hr/>
                    <h2>These are my finished study projects, listed newest to oldest.</h2>

                    <ProjectContainer>
                        <h3>ETH Domain Website</h3>
                        <p>
                        Here the goal was to build a Web3 version of GoDaddy and something similar to ENS.
                        I followed a tutorial by Dapp University which is linked in the README.
                        It consists of a smart contract and a React Frontend where you can see domains, purchase them or see their owner.
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                            <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                            <div><FontAwesomeIcon icon={faReact} color= "#5ED4F4"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/eth_domain_platform">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>
                    
                    <ProjectContainer>
                        <h3>Realestate Platform</h3>
                        <p>
                        With this project I tried out Hardhat and wanted to familiarize myself with this development tool.
                        I followed a tutorial by Dapp University which is linked in the README. 
                        It is a smart contract with basic functions needed for a transaction including different roles like buyer, seller, lender and inspector.
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                            <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/realestate_escrow">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>Ethereum Game</h3>
                        <p>
                        In this repository you can see my version of the game coded as part of the course "Ethereum Game Programming" at Moralis Academy. 
                        We used Phaser 3.15.1 as the game engine. The collected coins are ERC20 Tokens with which you can buy booster items which are ERC1155 tokens.
                        The game is deployed on Goerli TestNet.
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/></div>
                            <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                            <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                            <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/eth_game">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://paulsimroth.github.io/eth_game/">
                                    <FontAwesomeIcon icon={faLaptopCode} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>Metaverse</h3>
                        <p>
                            Here you can find my version of the Moraland metaverse done as part of the course "Create your Metaverse".
                            As part of the course the the interaction between the ERC721 contract and Frontend was done with Moralis Servers V1. 
                            I instead chose Ethers.js to handle the interaction and also slightly changed the smart contract.
                        </p>
                        <SkillContainer>   
                            <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                            <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                            <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/metaverse_project">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>React.Js Coin Exchange</h3>
                        <p>
                            I did this react App as part of the course react Web Development 101 at Moralis Academy. 
                            It is a frontend for a coin exchange where top coins are listed and some a balance is shown. 
                            We used the coinpaprika API to fetch data about top ranked coins.
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faReact} color= "#5ED4F4"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/react-coinexchange">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://paulsimroth.github.io/react-coinexchange/">
                                    <FontAwesomeIcon icon={faLaptopCode} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>JS DEX Frontend</h3>
                        <p>
                            This DEX Frontend was built as part of the course "Javascript for Blockchain Developers"at Moralis Academy. 
                            It was built using the Coinpaprika API for fetching data on the top ranked coins.
                            Furthermore we made use of Moralis Server V1 aswell as a Plug in for a Fiat onramp and the Plug in for the 1inch API to perform swaps.
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                            <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                            <div><FontAwesomeIcon icon={faCss3} color= "#28A4D9"/></div>
                            <div>                         
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/jsdex_frontend">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://paulsimroth.github.io/jsdex_frontend/">
                                    <FontAwesomeIcon icon={faLaptopCode} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>Ethereum DEX</h3>
                        <p>
                            This project was done as part of the Ethereum Programming 201 course at Moralis Academy. 
                            It is my first introduction into using the ERC20 Standard and also improved my knowledge of coding with Solidity.
                            The project is using Truffle and Openzeppelin and consists of a Token, a Wallet and the DEX smart contract.
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                            <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/eth201project">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>

                    <ProjectContainer>
                        <h3>Multi Signature Ethereum Wallet</h3>
                        <p>
                            This Project was for the Ethereum Smart Contract Programming 101 Course at Moralis Academy. 
                            It is a multi signature wallet where you need the approval of the majority of adresses which have been assigned the role of Admin to complete a transaction.
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/Ethereum101-course-project">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>
                </ProjectsDone>
                
                <ProjectsCurr>
                    <hr/>
                    <h2>These are my study projects currently under development or revision.</h2>

                    <ProjectContainer>
                        <h3>NFT Marketplace</h3>
                        <p>
                        This is my version of the NFT Marketplace, cloned from Academy Kitties @ Moralis Academy, done as part of the course "Build an NFT Market Place".
                        My version features bears instead of cats. The msg.sender can mint 10 Generation 0 bears. after that you can breed bears, where the DNA of the parents determines the features of the new bear.                     
                        </p>
                        <SkillContainer>
                            <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                            <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                            <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                            <div><FontAwesomeIcon icon={faCss3} color= "#28A4D9"/></div>
                            <div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/nft_marketplace">
                                    <FontAwesomeIcon icon={faGithub} color= "#727274" />
                                </a>
                            </div>
                        </SkillContainer>
                    </ProjectContainer>

                    </ProjectsCurr>
                </Textarea>
            </Container>
        )
    }
};