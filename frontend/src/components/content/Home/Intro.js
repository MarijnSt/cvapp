import React from 'react'

const Intro = () => {

    return(
        <div className="intro-container">
            <div className="header">
                <h1>Hi!</h1>
                <h2>Welcome to my cv</h2>
            </div>
            <div className="introtext">
                <p>This website is built to help me find an internship as a junior web developer. It's supposed to give you an idea of what I'm already capable of doing.</p>
                <p>I've made both the frontend and backend for this website with React, NodeJS and Express.
                    If you want a closer look at the code, you can find it on <a target="_blank" rel="noopener noreferrer" href="https://github.com/MarijnSt/cvapp">this github repository</a>.</p>
                <p>Take a look around and if you're interested, feel free to contact me via the contact page or <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marijn-stammeleer/">linkedin</a>.</p>
            </div>
        </div>
    )
}

export default Intro