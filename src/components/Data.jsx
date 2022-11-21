import React, { Component } from 'react';
import styled from "styled-components";

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
    left: 15%;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    max-height: 90%;

    h1 {
        color: #fff;
        font-size: 53px;
        margin: 0;
        font-family: "Coolvetica";
        font-weight: 400;
    }

    h2 {
        color: #8d8d8d;
        margin-top: 30px;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: 3px;
        animation: fadeIn 1s 1.8s backwards;
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