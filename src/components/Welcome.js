import '../styles/Welcome.css';
import React from 'react';

function Welcome() {

    if (window.innerWidth > 800) {
        return <div id="welcome-div">
            <h1>Pinlo</h1>
            <h2>BETA</h2>
            <br/>
            <h3>Create a board in the top left to get started.</h3>
        </div>
    } else {
        return <div id="welcome-div">
            <h3>Sorry, Pinlo is not supported with this viewport. Check it out on a computer or tablet!</h3>
        </div>
    }
}

export default Welcome;