import React from 'react';

function Nav(props) {
    const {
        setContactSelected,
      } = props;

    return (
      <header>
        <h1 className = "header-title">Welcome to My React Portfolio</h1>
            
            <nav className = "test">
                <ul className="flex-row">
                    <li>
                        <a href = "#me" onClick = {() => setContactSelected(true)}>Me, Myself and I</a>
                    </li>
                    <li>
                        <a href = "#contact-us" onClick = {() => setContactSelected(false)}>What I Can Do</a>
                    </li>
                    <li>
                        <a className = "monay" href = "#contributions" onClick = {() => setContactSelected(false)}>My Projects</a>
                    </li>
                    <li>
                        <a href = "#search" onClick = {() => setContactSelected(false)}>Contact Me</a>
                    </li>
            </ul>
        </nav>
      </header>
    );
}

export default Nav;