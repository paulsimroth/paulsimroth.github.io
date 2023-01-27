import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Menu from "../menu/Menu";

import "./contact.css";

/*Component*/

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
            <div className='text_area'>
                <h1>Contact Me!</h1>
                <p>
                    I am open to opportunities and projects in the blockchain space.
                    Also, if you have any other questions do not hesitate to contact me using the form below.
                    Let me know how we can work together!
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
            </div>
            <div className='bottom_tag'>
                &lt;/body&gt;
                <br/>
                <div className='html_tag'>&lt;/html&gt;</div>
            </div> 
        </div>
        
    )
};