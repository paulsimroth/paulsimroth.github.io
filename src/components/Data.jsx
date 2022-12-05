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

export default class Home extends Component{
    render(){
        return(
            
            <Container>
                <Menu/>
                <Textarea>
                    <h1>PRIVACY STATEMENT</h1>
                    <p>Last update: 28.11.2022</p>
                    <h2>Purpose of the privacy policy</h2>
                    <p>This Privacy Policy describes what data is collected and how it is used.</p>
                    <h2>Data collected and how it is processed</h2>
                    <p>
                        Your personal data is collected when the contact form is filled out.
                        Processed data consists of: 
                        <ul>
                            <li>Name</li>
                            <li>E-Mail Address</li>
                            <li>Subject</li>
                            <li>Message entered in the contact form</li>
                        </ul>
                        Your personal data will be used to communicate with you when providing general information or requests. 
                        My processing for the purpose of communicating is based on my legitimate interest to do so or on your prior consent.
                        No data will be given to third parties.
                        <br/>
                        Your personal data is stored for as long as necessary for the purpose they were collected for, 
                        but no longer than permitted by applicable law.
                        <br/>
                        <h3>EmailJs</h3>
                        This website uses EmailJs to send data from the contact form to the site owner.
                        For more information on the service, go to:  <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noreferrer">https://www.emailjs.com/legal/privacy-policy/</a>
                        <br/>
                        <h3>Protonmail</h3>
                        Messages sent via the contact form will be sent to the site owner´s Proton Mail account. 
                        The da
                        For more information on the service, go to:  <a href="https://proton.me/legal/privacy" target="_blank" rel="noreferrer">https://proton.me/legal/privacy</a>
                    </p>
                    <h2>Your rights</h2>
                    <p>
                        You have the right to information regarding which of your personal data is processed and to access and rectify such personal data.
                        You may request to erase or restrict the processing of your personal data without undue delay and for any reason.
                    </p>
                </Textarea>
            </Container>            
        )
    }
};