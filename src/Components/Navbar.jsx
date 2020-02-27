import React from 'react';
import * as GhibliLogo from '../images/logo.png';

function Navbar(props) {
    return (
        <div>
            <img id= "ghibli-logo" src = {GhibliLogo} alt= "ghibli-logo"/>
            <button onClick= {() => props.loadFilms()}>Load films</button>
        </div>
    )
}

export default Navbar ;