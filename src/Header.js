import React from 'react';
import './Header.css'

function Header(props) {
    console.log(props);
    return (
        <header className="App-header">
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header
