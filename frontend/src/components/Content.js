import React from 'react'

import Home from './content/Home/Home'
import Skills from './content/Skills/Skills'
import Experience from './content/Experience/Experience'
import Portfolio from './content/Portfolio/Portfolio'
import Contact from './content/Contact/Contact'

const Content = ({display}) => {
    let displayContent
    switch(display) {
        case "Home":
            displayContent = <Home />
            break;
        case "Skills":
            displayContent = <Skills />
            break;
        case "Experience":
            displayContent = <Experience />
            break;
        case "Portfolio":
            displayContent = <Portfolio />
            break;
        case "Contact":
            displayContent = <Contact />
            break;
        default:
            displayContent = <Home />
    }

    return (
        <div className="content-container">
            {displayContent}
        </div>
    )
}

export default Content