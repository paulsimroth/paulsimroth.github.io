import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import Menu from "../menu/Menu";

/* Styling */


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
        font-size: 13px;
        letter-spacing: 3px;
        animation: fadeIn 1s 1.8s backwards;
    }
`;
/* Component*/

export default class Home extends Component{
    render(){
        return(
            
            <div className='container'>
                <Menu/>
                <div className='top_tag'>&lt;body&gt;</div>
                <Textarea>
                    <h1>Hi, <br/> I´m Paul. <br/> blockchain developer.</h1>
                    <br/>
                    <h2>Solidity / Javascript / React.js / CSS / HTML</h2>  
                    <br/>
                    <Link to="/contact" ><button className='button1'>CONTACT ME</button></Link>

                </Textarea>
                
                <div className='bottom_tag'>
                    &lt;/body&gt;
                    <br/>
                    <div className='html_tag'>&lt;/html&gt;</div>
                </div>
            </div>
           
        )
    }
};