import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faHtml5, faJsSquare, faReact, faGitAlt, faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faMoneyBillTransfer, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import "./education.css";
import Menu from "../menu/Menu";

/* Component*/

export default class Education extends Component{
    render(){
        return(
            
            <div className='container'>
                <Menu/>
                <div className='text_area2'>
                    <h1>My Education.</h1>

                    <h2>Ethereum & Blockchain Basics</h2>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Blockchain and Bitcoin</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faBitcoin} color= "#FF9900"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Blockchain Basics</li>
                                <li>Bitcoin Basics</li>
                                <li>Consensus Algorithms</li>
                                <li>UTXO Model</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Ethereum 101</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                            <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Basics</li>
                                <li>EVM</li>
                                <li>Consensus Mechanisms</li>
                                <li>Account Model</li>
                                <li>Smart Contracts</li>
                                <li>DApps</li>
                            </ul>
                            
                        </div>
                    </div>

                    <h2>Ethereum Smart Contract Development</h2>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Ethereum Smart Contract Programming 101</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Solidity Basics</li>
                                <li>Arrays Structs</li>
                                <li>Mappings</li>
                                <li>Error Handling</li>
                            </ul>
                            <ul>
                                <li>Data Location</li>
                                <li>Inheritance</li>
                                <li>Visibility</li>
                                <li>Events</li>
                                <li>External Calls</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Ethereum Smart Contract Programming 201</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Truffle Development</li>
                                <li>Truffle Unit Tests</li>
                                <li>MetaMask Integration</li>
                                <li>Truffle Migrations</li>
                            </ul>
                            <ul>
                                <li>Ethereum Oracles</li>
                                <li>TestNet Development</li>
                                <li>Ethereum DApps</li>
                                <li>Token Standard ERC20</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Ethereum Smart Contract Security</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>DAO Hack Replication</li>
                                <li>Parity Hack Replication</li>
                                <li>Hyperinflation Bug</li>
                                <li>Solidity Best Practices</li>
                            </ul>
                            <ul>
                                <li>Contract Design</li>
                                <li>Upgradeable Contracts</li>
                                <li>Proxy Contracts</li>
                                <li>Pausable Contracts</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>ChainLink Programming 101</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Oracles</li>
                                <li>Smart Contract Programming</li>
                                <li>ChainLink Node</li>
                                <li>Oracle Testing</li>
                                <li>Verifiable Randomness</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Full Stack</h2>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Ethereum Game Programming</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faBriefcase} color="#994d00"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Phaser Game</li>
                                <li>Computer Graphics</li>
                                <li>Business Use Cases</li>
                                <li>NFTs</li>
                                <li>Collectibles</li>
                            </ul>
                            <ul>
                                <li>Token Standards</li>
                                <li>ERC721</li>
                                <li>ERC1155</li>
                                <li>ERC20</li>
                                <li>Integration of Crypto into a Game</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h2>Frontend Development</h2>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>JavaScript Programming for Blockchain Developers</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Basics</li>
                                <li>Web Development</li>
                                <li>Types</li>
                                <li>Loops</li>
                                <li>Functions</li>
                            </ul>
                            <ul>
                                <li>Data Structures</li>
                                <li>NodeJS Basics</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Moralis SDK V1</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>React Web Development</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Creating React Apps</li>
                                <li>API Communication</li>
                                <li>Dev Environment for React</li>
                                <li>Functional Components</li>
                                <li>Class-based Components</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Decentralized Finance, FinTech & Trading</h2>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>FinTech 101</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/> 
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>FinTech Evolution</li>
                                <li>Six Pillars of Finance</li>
                                <li>Computing in Banks</li>
                                <li>KYC, KYT, KYD</li>
                            </ul>
                            <ul>
                                <li>Open Banking</li>
                                <li>Embedded Finance</li>
                                <li>Fintech Regulations</li>
                                <li>Banking API Aggregators</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>DeFi 101</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>DApps</li>
                                <li>Decentralized Money Market</li>
                                <li>MetaMask</li>
                                <li>DEXs</li>
                            </ul>
                            <ul>
                                <li>DeFi Risk Analysis</li>
                                <li>DeFi Financial Stack</li>
                                <li>DeFi Account Security</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>DeFi 201</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Analysis</li>
                                <li>Settlement Assurance</li>
                                <li>Centrifuge</li>
                                <li>Flash Loans</li>
                                <li>Yield Hacking</li>
                            </ul>
                            <ul>
                                <li>DeFi Interest Rate Swap</li>
                                <li>DeFi Financial Stack</li>
                                <li>Stablecoins</li>
                                <li>Dezentralized Insurance</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Technical Analysis 101</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Trading Basics</li>
                                <li>Technical Indicators</li>
                                <li>Technical Analysis Fundamentals</li>
                            </ul>
                            <ul>
                                <li>Trading Strategies</li>
                                <li>TradingView</li>
                                <li>Independent Trading</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Blockchain & Business</h2>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Blockchain Business MasterClass</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faBriefcase} color="#994d00"/>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Industry Use Cases</li>
                                <li>Centralized Systems</li>
                                <li>Decentralized Systems</li>
                                
                            </ul>
                            <ul>
                                <li>Hyperledger Fabric</li>
                                <li>Hyperledger Composer</li>
                                <li>Blockchain Tree</li>
                                <li>Permissioned Blockchains</li>
                            </ul>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Blockchain for Enterprise – Baseline Protocol & Unibright</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>Subjects: <br/>
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faBriefcase} color="#994d00"/>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color= "#85bb65"/>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this course I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Unibright Framework</li>
                                <li>Corda & Quorum</li>
                                <li>Enterprise Blockchain</li>
                                <li>Baseline Protocol</li>
                            </ul>
                            <ul>
                                <li>Zero-Knowledge Proof</li>
                                <li>Hyperledger</li>
                                <li>Baseline & DeFi</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Academic Education</h2>

                    <div className='skill_card'>
                        <div className='skill_header'>
                            <h3>Bachelor of Arts, History</h3>
                            <h4>@University of Vienna</h4>
                            <h4>Subject: <br/>
                                <p>History</p>
                            </h4>
                        </div>
                        <div className='skill_text'>
                        <p>In this degree I learned and gained knowledge in these topics</p>
                            <ul>
                                <li>Sientific methods</li>
                                <li>Research processes</li>
                                <li>Theories of Historical sience</li>
                            </ul>
                            <ul>
                                <li>Introduction to Czech</li>
                                <li>History of different geographic areas, topics and periods</li>
                                <li>Working with primary sources</li>
                            </ul>
                        </div>
                    </div>
                    <div className='divider'></div>
                </div>
            </div>            
        )
    }
};