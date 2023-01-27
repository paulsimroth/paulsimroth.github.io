import React, { Component } from 'react';
import {Link} from "react-router-dom";

import Menu from "../menu/Menu";

/*Component*/

export default class Home extends Component{
    render(){
        return(
            
            <div className='container'>
                <Menu/>
                <div className='top_tag'>&lt;body&gt;</div>
                <div className='text_area'>
                    <h1>Hi, <br/> I´m Paul. <br/> blockchain developer.</h1>
                    <br/>
                    <h2>Solidity / Javascript / React.js / CSS / HTML</h2>  
                    <br/>
                    <Link to="/contact" ><button className='button1'>CONTACT ME!</button></Link>

                </div>
                
                <div className='bottom_tag'>
                    &lt;/body&gt;
                    <br/>
                    <div className='html_tag'>&lt;/html&gt;</div>
                </div>
            </div>
           
        )
    }
};