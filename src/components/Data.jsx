import React, { Component } from 'react';
import styled from "styled-components";

import Menu from "./Menu";

/* Styling */
const Container = styled.div`
    width: 100%;
    will-change: contents;
    height: 90%;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 1s forwards;
`;

const Textarea = styled.div`
    position: absolute;
    left: 15%;
    top: 10vh;
    width: 40%;
    max-height: 90%;
    overflow: auto;

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
        letter-spacing: 3px;
        animation: fadeIn 1s 0.2s backwards;
    }
`;

/* Component*/

export default class Home extends Component{
    render(){
        return(
            
            <Container>
                <Menu/>
                <Textarea>
                    <h1>DATA POLICY</h1>

                </Textarea>
            </Container>
           
            
        )
    }
};