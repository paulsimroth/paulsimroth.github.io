import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCss3, faEthereum, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import solLogo from "../img/solidity_icon_light.svg";
import tsLogo from "../img/typescript_icon.svg";

import Menu from "../menu/Menu";
import "./projects.css";

/* Component*/

export default class Projects extends Component{
    render(){
    return(
        <div className='container'>
            <Menu/>
            <div className='text_area2'>
                <h1>My Projects.</h1>
                <div className='project_area'>
                
                <h2>Finished study projects, <small>newest to oldest.</small></h2>

                <div className='project_box'>
                    <h3>Metaverse Landingpage</h3>
                    <p>
                    This project is my first introduction to Next.js, Tailwind.css and Framer Motion.
                    It is a landing page for a metaverse and can be used to further expand upon.
                    Currently the page does not have any funtionality built in. Currently this page is not deployed.
                    </p>
                    <div className='skill_box'>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faCss3} color= "#28A4D9"/></div>
                        <div><FontAwesomeIcon icon={faReact} color= "#5ED4F4"/></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/metaverse_page">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project_box'>
                    <h3>Web3 Online Shop</h3>
                    <p>
                    Here I built a Web3 version of an Online Shop, inspired by Amazon.
                    I followed a tutorial by Dapp University which I linked in the README.
                    It consists of a smart contract and a ReactJS Frontend where you can browse and buy items. 
                    It is now deployed on Goerli Testnet.
                    </p>
                    <div className='skill_box'>
                        <div><img src={solLogo} alt="logo solidity" className="skill_logo" /></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faReact} color= "#5ED4F4"/></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/web3market">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://paulsimroth.github.io/web3market/">
                                <FontAwesomeIcon icon={faLaptopCode} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project_box'>
                    <h3>ETH Domain Website</h3>
                    <p>
                    Here i built a Web3 version of GoDaddy and something similar to ENS.
                    I followed a tutorial by Dapp University which is linked in the README.
                    It consists of a smart contract and a React Frontend where you can see domains, purchase them or see their owner.
                    The Smart contract is deployed on Goerli Testnet.
                    </p>
                    <div className='skill_box'>
                        <div><img src={solLogo} alt="logo solidity" className="skill_logo" /></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faReact} color= "#5ED4F4"/></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/eth_domains">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://paulsimroth.github.io/eth_domains/">
                                <FontAwesomeIcon icon={faLaptopCode} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='project_box'>
                    <h3>Realestate Platform</h3>
                    <p>
                    With this project I wanted to tyr out HardHat and familiarize myself with this tool.
                    I followed a tutorial by Dapp University which is linked in the README. 
                    It is a real estate escrow smart contract with basic functions needed for a transaction including roles like buyer, seller, lender and inspector.
                    </p>
                    <div className='skill_box'>
                        <div><img src={solLogo} alt="logo solidity" className="skill_logo" /></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/realestate_escrow">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project_box'>
                    <h3>Ethereum Game</h3>
                    <p>
                    In this repository you can see my version of the game coded as part of the course "Ethereum Game Programming" at Moralis Academy. 
                    We used Phaser 3.15.1 as the game engine. The collected coins are ERC20 Tokens with which you can buy booster items which are ERC1155 tokens.
                    The game is deployed on Goerli TestNet.
                    </p>
                    <div className='skill_box'>
                        <div><FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/></div>
                        <div><img src={solLogo} alt="logo solidity" className="skill_logo" /></div>
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
                    </div>
                </div>

                <div className='project_box'>
                    <h3>Metaverse</h3>
                    <p>
                        Here you can find my version of the Moraland metaverse done as part of the course "Create your Metaverse".
                        As part of the course the the interaction between the ERC721 contract and Frontend was done with Moralis Servers V1. 
                        I instead chose Ethers.js to handle the interaction and also slightly changed the smart contract.
                    </p>
                    <div className='skill_box'>   
                        <div><FontAwesomeIcon icon={faEthereum} color="#fff"/></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/metaverse_project">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project_box'>
                    <h3>React.js Coin Exchange</h3>
                    <p>
                        I did this react App as part of the course react Web Development 101 at Moralis Academy. 
                        It is a frontend for a coin exchange where top coins are listed and some a balance is shown. 
                        We used the coinpaprika API to fetch data about top ranked coins.
                    </p>
                    <div className='skill_box'>
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
                    </div>
                </div>

                <div className='project_box'>
                    <h3>JS DEX Frontend</h3>
                    <p>
                        This DEX Frontend was built as part of the course "Javascript for Blockchain Developers" at Moralis Academy. 
                        It was built using the Coinpaprika API for fetching data on the top ranked coins.
                        Furthermore we made use of Moralis Server V1 aswell as a Plug in for a Fiat onramp and the Plug in for the 1inch API to perform swaps.
                    </p>
                    <div className='skill_box'>
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
                    </div>
                </div>

                <div className='project_box'>
                    <h3>Ethereum DEX</h3>
                    <p>
                        This project was done as part of the Ethereum Programming 201 course at Moralis Academy. 
                        It is my first introduction into using the ERC20 Standard and also improved my knowledge of coding with Solidity.
                        The project is using Truffle and Openzeppelin and consists of a Token, a Wallet and the DEX smart contract.
                    </p>
                    <div className='skill_box'>
                        <div><img src={solLogo} alt="logo solidity" className="skill_logo" /></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/eth201project">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project_box'>
                    <h3>Multi Signature Ethereum Wallet</h3>
                    <p>
                        This Project was for the Ethereum Smart Contract Programming 101 Course at Moralis Academy. 
                        It is a multi signature wallet where you need the approval of the majority of adresses which have been assigned the role of Admin to complete a transaction.
                    </p>
                    <div className='skill_box'>
                        <div><img src={solLogo} alt="logo solidity" className="skill_logo" /></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/Ethereum101-course-project">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            
                <div className='project_area'>
                
                <h2>Study projects in development or revision.</h2>

                <div className='project_box'>
                    <h3>AI Chat App</h3>
                    <p>
                        This project is a Next.js App with TypeScript using Tailwind.css and functions as an AI Chat, 
                        using ChatGPT API for handling chat prompts and Firebase for handling user logins. 
                        The user can choose between different ChatGPT versions.
                    </p>
                    <div className='skill_box'>
                        <div><img src={tsLogo} alt="logo typescript" className="skill_logo" /></div>
                        <div><FontAwesomeIcon icon={faCss3} color= "#28A4D9" /></div>
                        <div><FontAwesomeIcon icon={faReact} color= "#5ED4F4" /></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/ai_chat">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project_box'>
                    <h3>NFT Marketplace</h3>
                    <p>
                        This is my version of the NFT Marketplace, cloned from Academy Kitties @ Moralis Academy, done as part of the course "Build an NFT Market Place".
                        My version features bears instead of cats. The owner can mint 10 Generation 0 bears. after that you can breed bears, 
                        where the parents´ DNA determines the features of the new bear.                     
                    </p>
                    <div className='skill_box'>
                        <div><img src={solLogo} alt="logo solidity" className="skill_logo" /></div>
                        <div><FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color= "#F06529"/></div>
                        <div><FontAwesomeIcon icon={faCss3} color= "#28A4D9"/></div>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/paulsimroth/nft_marketplace">
                                <FontAwesomeIcon icon={faGithub} color= "#727274" />
                            </a>
                        </div>
                    </div>
                </div>

                </div>
                <div className='divider'></div>
            </div>
        </div>
    )
    }
};