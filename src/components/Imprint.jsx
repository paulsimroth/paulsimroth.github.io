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
    left: 11%;
    top: -1vh;
    margin-top: 30px;
    width: 89vw;
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
                    <h1>IMPRINT</h1>

                    <h2>Publisher and media owner:</h2>
                    <p>Paul Simroth</p>
                    <p>Anzengrubergasse 32</p>
                    <p>A-3400 Klosterneuburg</p>

                    <h2>Contact</h2>
                    <p>Telephone: +43650 9832538</p>
                    <p>E-Mail: paul.simroth@proton.me</p>
                    <br/>
                    <p>Disclosure requirement under § 25 of the Austrian Media Act (Mediengesetz, MedienG)</p>

                    <h2>Basic Direction</h2>


                    <p>Last update: 21.11.2022</p>
                    <p>Responsible for content: Paul Simroth</p>
                </Textarea>
            </Container>
        )
    }
};