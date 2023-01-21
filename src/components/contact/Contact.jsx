import React, { useRef } from 'react';
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import Menu from "../menu/Menu";

/* Styling */
const Container = styled.div`
    width: 100%;
    will-change: contents;
    height: 90%;
    top: -1vh;
    min-height: 566px;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 0.5s forwards;
    font-family: 'Segoe UI';
`;

const Textarea = styled.div`
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translateY(-50%);
    width: 60%;
    max-height: 90%;

    h1 {
        color: #ffd700;
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
            opacity: 0.6;
            animation: fadeIn 1s 1s backwards;
            
        }

        &::after {
            content: "</h1>";
            color: #ffd700;
            font-size: 18px;
            position: absolute;
            margin-top: 18px;
            margin-left: 20px;
            opacity: 0.6;
            animation: fadeIn 1s 1s backwards;
            
        }
    }

    h2 {
        color: #8d8d8d;
        margin-top: 30px;
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 3px;
        animation: fadeIn 1s 1.1s backwards;
    }

    p {
        font-size: 16px;
        color: #fff;
        font-weight: 300;
        min-width: fit-content;
        animation: pulse 1s;
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

const Contactform = styled.div`
    width: 100%;
    margin-top: 20px;

    ul {
        padding: 0;
        margin: 0;

        li {
            padding: 0;
            margin: 0;
            list-style: none;
            margin-bottom: 10px;
            overflow: hidden;
            display: block;
            position: relative;
            opacity: 0;
            animation: fadeInUp 2s 2s;
            animation-fill-mode: forwards;
            clear: both;
        } 
        
        .half {
            width: 49%;
            margin-left: 2%;
            float: left;
            clear: none;

            &:first-child {
                margin: 0;
            }
        }
    }

    input[type="text"],
    input[type="email"] {
        width: 100%;
        border: 0;
        background: #115173;
        height: 50px;
        font-size: 16px;
        color: #fff;
        padding: 0 20px;
        box-sizing: border-box;
    }

    textarea {
        width: 100%;
        border: 0;
        background: #115173;
        height: 50px;
        font-size: 16px;
        color: #fff;
        min-height: 150px;
        padding: 10px 20px;
        box-sizing: border-box;
    }
`;

const SendButton = styled.input`
    color: #ffd700;
    background: 0 0;
    font: 12px;
    letter-spacing: 3px;
    text-decoration: none;
    padding: 8px 10px;
    border: 2px solid #ffd700;
    float: right;
    border-radius: 4px;

    &:hover {
        background: #ffd700;
        color: #022c43;
        transition: all 0.5s ease;
    }
`;


/* functional Component*/

export default function Contact (){

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_txf716a',
                'template_g5ndd1g',
                refForm.current,
                '9cUE8JtRij6qm2bx2'
            )
            .then(() => {
                    alert("Message succesfully sent!");
                    window.location.reload(false);
                },
                () => {
                    alert("failed to send message. Please try again");
                }
            )
    };

    return(
        
        <Container>
            <Menu/>
            <Toptag>&lt;body&gt;</Toptag>
            <Textarea>
                <h1>Contact Me!</h1>
                <p>
                    I am open to opportunities and projects in the blockchain space.
                    Also, if you have any other questions do not hesitate to contact me using the form below.
                </p>
                <p style={{color: "#ffd700"}}>By clicking the send button you confirm that you have seen and accepted the Privacy Policy!</p>
                <Contactform>
                    <form ref = {refForm} onSubmit = {sendEmail}>
                        <ul>
                            <li className='half'>
                                <input 
                                name = "user_name" 
                                type = "text" 
                                Placeholder = "Name" 
                                required>
                                </input>
                            </li>
                            <li className='half'>
                                <input 
                                name = "user_email"
                                type = "email"  
                                Placeholder = "Email" 
                                required>
                                </input>
                            </li>
                            <li>
                                <input 
                                name = "subject" 
                                type = "text" 
                                Placeholder = "Subject" 
                                required>
                                </input>
                            </li>
                            <li>
                                <textarea
                                name = "message" 
                                Placeholder = "Message" 
                                required>
                                </textarea>
                            </li>
                            <li>
                                <SendButton
                                type = "submit"
                                value = "Send">
                                </SendButton>
                            </li>
                        </ul>
                    </form>
                </Contactform>
            </Textarea>
            <Bottomtag>
                &lt;/body&gt;
                <br/>
                <HTMLTag>&lt;/html&gt;</HTMLTag>
            </Bottomtag> 
        </Container>
        
    )
};