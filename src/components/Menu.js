import React from 'react'

//images
import home from '../images/menu-icons/home.png'
import skills from '../images/menu-icons/skills.png'
import work from '../images/menu-icons/work.png'
import github from '../images/menu-icons/github.png'
import contact from '../images/menu-icons/contact.png'

const Menu = ({handleClick}) => {

    return (
        <div className="menu-container">
            <div className="menu-item" onClick={handleClick}>
                <img className="icon" src={home} />
                <p>Home</p>
            </div>

            <div className="menu-item" onClick={handleClick}>
                <img className="icon" src={skills} />
                <p>Skills</p>
            </div>

            <div className="menu-item" onClick={handleClick}>
                <img className="icon" src={work} />
                <p>Experience</p>
            </div>

            <div className="menu-item" onClick={handleClick}>
                <img className="icon" src={github} />
                <p>Portfolio</p>
            </div>

            <div className="menu-item" onClick={handleClick}>
                <img className="icon" src={contact} />
                <p>Contact</p>
            </div>            
        </div>
    )
}

export default Menu