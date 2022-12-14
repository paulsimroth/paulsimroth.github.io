import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faHtml5, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

import Menu from "./Menu";

/* Styling */
const Container = styled.div`
    width: 100%;
    will-change: contents;
    height: 90%;
    top: -1vh;
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
        height: 60px;
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

const SkillContainer = styled.div`
    width: 750px;
    height: 160px;
    margin: 20px;
    padding: 6px;
    border: 2px solid #ffd700;
    border-radius: 10px;
    font-size: 12px;
    letter-spacing: 2px;
    box-sizing: border-box;
    float: left;
    clear: none;

    display: flex;
    flex-direction: column;

    &:hover {
        transform: scale(1.05);
        border: 3px solid #ffd700;
        transition: all 0.5s ease;
    }

`;

const SkillText = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: justify;
    font-style: 11px;
    color: #fff;
    font-weight: 300;
    animation: pulse 1s;
    
    p {

        
        
    }

    li{
        color: #fff;
        font-size: 12px;  
    }
`;

const SkillHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
        color: #fff;
        font-size: 25px;
        margin: 0;
        font-family: "Coolvetica";
        font-weight: 400;
    }

    h4 {
        color: #fff;
        font-size: 15px;
        margin: 5px;
        font-family: "Coolvetica";
        font-weight: 400;
        letter-spacing: 4px;
    }
`;

/* Component*/

export default class Education extends Component{
    render(){
        return(
            
            <Container>
                <Menu/>
                <Textarea>
                    <h1>Here you can see my education</h1>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 1</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 2</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 3</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 4</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 5</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 6</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 7</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 8</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 9</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 10</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 11</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 12</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 13</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                    <SkillContainer>
                        <SkillHeader>
                            <h3>CERTIFICATE 14</h3>
                            <h4>@Moralis Academy</h4>
                            <h4>I used and improved: 
                                <FontAwesomeIcon icon={faEthereum} color="#fff"/>
                                <FontAwesomeIcon icon={faHtml5} color= "#F06529"/>
                                <FontAwesomeIcon icon={faCss3} color= "#28A4D9"/>
                                <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D"/>
                                <FontAwesomeIcon icon={faReact} color= "#5ED4F4"/>
                                <FontAwesomeIcon icon={faGamepad} color= "#ffffcc"/>
                                <FontAwesomeIcon icon={faGitAlt} color= "#F06529"/>
                            </h4>
                        </SkillHeader>
                        <SkillText>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi voluptatum, ipsa mollitia minima repellendus eum molestiae voluptas saepe rerum nemo, at, optio commodi quia ad. Vero facere nobis eius?</p>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </SkillText>
                    </SkillContainer>

                </Textarea>
            </Container>            
        )
    }
};