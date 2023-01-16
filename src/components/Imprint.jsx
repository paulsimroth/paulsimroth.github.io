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
    left: 10%;
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
    }
`;

/* Component*/

export default class Imprint extends Component{
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
                    <p>Responsible for content: Paul Simroth</p>
                    <p>Disclosure requirement under § 25 of the Austrian Media Act (Mediengesetz, MedienG).</p>

                    <h2>Basic Direction:</h2>
                    <p>This website is the personal website of Paul Simroth. It is used for showcasing the work of the publisher and to provide an opportunity for contact.</p>
                    <h2>Please note:</h2>
                    <p>
                        The content  offered here is for general information.Referrals and links to other internet offers have been carefully selected. 
                        However, their content, accuracy, timeliness, completeness and availability are not within my sphere of influence and I do not assume any guarantee/liability for this.
                    </p>
                    <p>
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
                        INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
                        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
                        WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </p>
                    <br/>
                    <p>Last update: 21.11.2022</p>
                    
                </Textarea>
            </Container>
        )
    }
};