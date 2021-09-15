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
                <ul>
                    <li>
                        {/* update href with correct link */}
                        <a href="/"><img src="https://img.icons8.com/dotty/30/000000/test-account.png" alt="account" /> </a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Nav;