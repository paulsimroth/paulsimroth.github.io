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
    top: 0vh;
    margin-top: 30px;
    width: 80vw;
    height: 99vh;
    overflow: auto;
    overflow-x: hidden;

    h1 {
        color: #ffd700;
        font-size: 50px;
        margin: 0;
        font-family: "Coolvetica";
        font-weight: 400;
    }

    h2 {
        color: #fff;
        margin-top: 30px;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 3px;
        animation: fadeIn 1s 0.2s backwards;
    }

    p {
        color: #fff;
        font-size: 12px;
        letter-spacing: 2px;
        animation: fadeIn 1s 0.2s backwards;
        text-align: justify;

        a{
            color: #fff;
        }
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
                    <p>THE PAGE IS CURRENTLY NOT READY</p>
                </Textarea>
            </Container>            
        )
    }
};