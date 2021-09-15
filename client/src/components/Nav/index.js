import React from 'react';
import headerImage from "../../assets/nav/logo.png";

function Nav() {

    return (
        <header>

            <h2>
                <a data-testid="link" href="/">
                    <img src={headerImage} style={{ width: "10%", height: "10%" }} alt="logo" /> 
                </a>
            </h2>

            <nav>
            <a href="/"><img src="https://img.icons8.com/dotty/30/000000/test-account.png" alt="account" /> </a>
            </nav>

        </header>
    );
}

export default Nav;