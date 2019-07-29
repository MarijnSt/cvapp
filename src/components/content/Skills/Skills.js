import React from 'react'
import Skill from './Skill'

const Skills = () => {

    return (
        <div className="skills-container">
            <div className="header">
                <h1>Skills</h1>
                <p>
                    I still have a long way to go but here's an overview of my programming skills rigth now. 
                    I'm feeling pretty comfortable with the basic languages HTML, CSS and Javascript and I recently started learning the MERN stack.
                    You'll find some other relevant skills at the bottom of the page.
                </p>
            </div>
            <div className="frontend-skills">
                <h2>Frontend</h2>
                <Skill name="HTML 5" level="3" extra="Good level"/>
                <Skill name="CSS 3 / Sass" level="3" extra="Good level, basic knowledge of Sass"/>
                <Skill name="Javascript" level="2" extra="ES6+ basic knowledge"/>
                <Skill name="React" level="1" extra="Started learning recently"/>
            </div>
            <div className="backend-skills">
                <h2>Backend</h2>
                <Skill name="NodeJS" level="1" extra="Started learning recently"/>
                <Skill name="Express" level="1" extra="Started learning recently"/>
                <Skill name="MongoDB" level="1" extra="Started learning recently"/>
            </div>
            <div className="languages">
                <h2>Languages</h2>
                <Skill name="Dutch" level="4" extra="Mother tongue"/>
                <Skill name="English" level="3" extra="Good level"/>
                <Skill name="French" level="2" extra="Basic level"/>
            </div>
            <div className="other">
                <h2>Other</h2>
                <h3>Adobe Creative Cloud</h3>
                <p>Good knowledge of Photoshop and Illustrator</p>
                <p>Basic knowledge of Indesign, Premiere Pro and After Effects</p>
            </div>
        </div>
    )
}

export default Skills