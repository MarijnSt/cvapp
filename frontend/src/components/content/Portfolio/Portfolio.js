import React from 'react'

const Portfolio = () => {

    return (
        <div className="portfolio-container">
            <div className="page-header">
                <h1>Portfolio</h1>
                <p>During my training at BeCode we mostly made little excercises. I only recently started working on projects of my own. You won't find a lot of projects here YET.</p>
                <p>I'll keep updating this page as I finish more and more projects.</p>
            </div>

            <div className="linkedin-container">
                <h2>GitHub</h2>
                <p>Almost every exercise or project that I've worked on is on my GitHub.</p>
                <p>It can give you an idea of what I've been working on lately.</p>
                <p>You can take a look <a target="_blank" rel="noopener noreferrer" href="https://github.com/MarijnSt">here</a>.</p>
            </div>

            <div className="projects-container">
                <h2>Current projects</h2>
                <p>This website was my first project and now that it's finished, I can move on to other things.</p>
                <p>These will appear here once they're presentable.</p>
            </div>
        </div>
    )
}

export default Portfolio