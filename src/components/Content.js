import React from 'react'

import Home from './Home'
import Skills from './Skills'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contact from './Contact'

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