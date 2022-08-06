import React, { Component } from 'react';
import {Outlet} from "react-router-dom";
import Menu from "./Menu";
import styled from "styled-components";

const Page = styled.div`
    width: 100%;
    height: 90%;
    position: absolute;
    top: 5%;
    margin: 0 auto;
`;

const Toptag = styled.span`
    bottom: auto;
    top: 35px;
    color: #ffd700;
    opacity: 0.6;
    position: absolute;
    bottom: 0;
    left: 120px;
    font-size: 18px;
`;

const Bottomtag = styled.span`
    color: #ffd700;
    opacity: 0.6;
    position: absolute;
    bottom: 10px;
    left: 120px;
    font-size: 18px;
`;

const HTMLTag = styled.span`
    margin-left: -20px;
`;

export default class Layout extends Component{
    render(){
        return(
            <div>
                <Page>
                    <Menu/>
                    <Toptag>&lt;body&gt;</Toptag>

                    <Outlet/>

                    <Bottomtag>
                        &lt;/body&gt;
                        <br/>
                        <HTMLTag>&lt;/html&gt;</HTMLTag>
                    </Bottomtag>
                </Page>
            </div>
        )
    }
};