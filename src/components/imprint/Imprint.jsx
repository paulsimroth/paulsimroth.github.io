import React, { Component } from 'react';

import Menu from "../menu/Menu";
import secret from "./secret.json";

/* Component*/

export default function Imprint (){

    const name = secret.name;
    const address = secret.address;
    const city = secret.city;
    const phone = secret.phone;
    const email = secret.mail;

    return(
        
        <div className='container'>
            <Menu/>
            <div className='text_area3'>
                <h1>IMPRINT.</h1>

                <h2>Publisher and media owner:</h2>
                <p>{name}</p>
                <p>{address}</p>
                <p>{city}</p>

                <h2>Contact</h2>
                <p>Telephone: {phone}</p>
                <p>E-Mail: {email}</p>
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
                
            </div>
        </div>
    )
};