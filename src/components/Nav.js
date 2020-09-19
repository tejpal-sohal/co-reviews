/* Nav Comp 
Renders NavBar
*/

import React from 'react';
import logo from '../styles/logo.svg'


const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="https://www.checkout.com/" aria-label="checkout.com">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        </nav>
    )
}

export default Nav