import React from 'react'
import logo from './assets/bhd-logo.svg'



export default function Header() {
    return(
        <React.Fragment>
            <div className="header--container">
                <div className="logo--container">
                    <img src={logo}></img>
                </div>
            </div>
        </React.Fragment>
    )
}

