import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

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

        &::before {
            content: "<h1>";
            color: #ffd700;
            font-size: 18px;
            position: absolute;
            margin-top: -50px;
            left: 15px;
            animation: fadeIn 1s 1.7s backwards;
            opacity: 0.6;
        }

        &::after {
            content: "</h1>";
            color: #ffd700;
            font-size: 18px;
            position: absolute;
            margin-top: 18px;
            margin-left: 20px;
            animation: fadeIn 1s 1.7s backwards;
            opacity: 0.6;
        }
    }

    h2 {
        color: #8d8d8d;
        margin-top: 30px;
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 3px;
        animation: fadeIn 1s 1.8s backwards;
    }
`;

const Toptag = styled.span`
    bottom: auto;
    top: 35px;
    color: #ffd700;
    opacity: 0.6;
    position: absolute;
    bottom: 0;
    left: 10%;
    font-size: 18px;
`;

const Bottomtag = styled.span`
    top: 90%;
    color: #ffd700;
    opacity: 0.6;
    position: absolute;
    bottom: 10px;
    left: 10%;
    font-size: 18px;
`;

const HTMLTag = styled.span`
    margin-left: -20px;
`;

const ContactBtn = styled.button`
    color: #ffd700;
    background: #022c43; 
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 4px;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid #ffd700;
    margin-top: 25px;
    float: left;
    animation: fadeIn 1s 1.8s backwards;
    white-space: nowrap;

    &:hover {
        background: #ffd700;
        color: #022c43;
    }
`;

/* Component*/

export default class Home extends Component{
    render(){
        return(
            
            <Container>
                <Menu/>
                <Toptag>&lt;body&gt;</Toptag>
                <Textarea>
                    <h1>Hi, <br/> I´m Paul. <br/> blockchain developer.</h1>
                    <br/>
                    <h2>Solidity / Javascript / React.js / CSS / HTML</h2>  
                    <br/>
                    <Link to="/contact" ><ContactBtn>CONTACT ME</ContactBtn></Link>

                </Textarea>
                
                <Bottomtag>
                    &lt;/body&gt;
                    <br/>
                    <HTMLTag>&lt;/html&gt;</HTMLTag>
                </Bottomtag> 
            </Container>
            
        )
    }
};