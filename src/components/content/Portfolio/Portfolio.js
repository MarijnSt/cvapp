import React from 'react'
import Project from './Project'

const Portfolio = () => {

    return (
        <div className="portfolio-container">
            <div className="port-header">
                <h1>Portfolio</h1>
                <p>During my training, we mostly made little excercises. I only recently started working on projects of my own. You won't find a lot of projects here YET.</p>
                <p>I'll keep updating this page while I finish more and more projects.</p>
            </div>

            <div className="linkedin-container">
                <h2>GitHub</h2>
                <p>Almost every exercise or project I've worked on, is on my GitHub.</p>
                <p>It can give you an idea what I've been working on lately.</p>
                <p>You can take a look <a target="_blank" href="https://github.com/MarijnSt">here</a></p>
            </div>

            <div className="projects-container">
                <h2>Projects</h2>
                <p>I'm working on a personal homepage right now. It's not finished yet but you can take a look <a target="_blank" href="https://github.com/MarijnSt">here</a></p>
            </div>
        </div>
    )
}

export default Portfolio