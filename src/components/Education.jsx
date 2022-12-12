import React, { Component } from 'react';
import styled from "styled-components";

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
    margin-top: 30px;
    width: 89vw;
    height: 99vh;
    overflow: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: felx-start;
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

const SkillContainer = styled.div`
    width: 700px;
    height: 150px;
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
        transform: scale(1.05);
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
        font-style: 11px;
        color: #fff;
        font-weight: 300;
        min-width: fit-content;
        animation: pulse 1s;
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
                        <h3>CERTIFICATE 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 4</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 5</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 6</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 7</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 8</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 9</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 10</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 11</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 12</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 13</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                    <SkillContainer>
                        <h3>CERTIFICATE 14</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error cumque omnis veritatis vitae ducimus!</p>
                    </SkillContainer>

                </Textarea>
            </Container>            
        )
    }
};