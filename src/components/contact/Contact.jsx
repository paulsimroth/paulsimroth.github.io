import React, { useRef } from 'react';
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import Menu from "../menu/Menu";

import "./contact.css";

/* Styling */


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
        
        <div className='container'>
            <Menu/>
            <div className='top_tag'>&lt;body&gt;</div>
            <Textarea>
                <h1>Contact Me!</h1>
                <p>
                    I am open to opportunities and projects in the blockchain space.
                    Also, if you have any other questions do not hesitate to contact me using the form below.
                </p>
                <p style={{color: "#ffd700"}}>By clicking the send button you confirm that you have seen and accepted the Privacy Policy!</p>
                <div className='contact_form'>
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
                                <input
                                className='send_btn'
                                type = "submit"
                                value = "Send">
                                </input>
                            </li>
                        </ul>
                    </form>
                </div>
            </Textarea>
            <div className='bottom_tag'>
                &lt;/body&gt;
                <br/>
                <div className='html_tag'>&lt;/html&gt;</div>
            </div> 
        </div>
        
    )
};