import React from 'react'
import Job from './Job'
import Course from './Course'
import Voluntary from './Voluntary'

const Experience = () => {

    return (
        <div className="experience-container">
            <div className="page-header">
                <h1>Experience</h1>
                <p>You'l find relevant work experience and education on this page.</p>
            </div>
            <div className="work-container">
                <h2>Work experience</h2>
                <Job 
                    period="August 2017 - October 2017"
                    company="Pecu Nino BVBA"
                    title="Digital Marketeer BIO internship"
                    description="Making e-mailcampaigns and landing pages"
                />
                <Job 
                    period="October 2017 - September 2018"
                    company="Verbond der Vlaamse Tandartsen"
                    title="Webmaster and graphic designer"
                    description="Maintaining the website and social media. Designing magazine articles, posters, brochures, ..."
                />
            </div>
            
            <div className="volunteer-container">
                <h2>Volunteer work</h2>
                <Voluntary 
                    period="2009 - 2015"
                    location="Chiro Jospaai Aaigem"
                    description="Leader for 6 years (4 years as head leader). Designing posters, flyers, clothing, ... Maintaining website and social media"
                />
                <Voluntary 
                    period="2015 - 2018"
                    location="Chiro Gewest Aalst"
                    description="Leader for 3 years. Help and support Chiro's from the Aalst region. Designing posters, flyers, ... Maintaining website and social media"
                />
            </div>

            <div className="education-container">
                <h2>Education</h2>
                <Course 
                    title="Highest degree"
                    degree="ASO Modern Languages - Sciences"
                    school="Sint-Maartensinstituut Aalst, 2010"
                />
                <Course 
                    title="Current education"
                    degree="Web Development Training"
                    school="BeCode Gent, 2019"
                />
            </div>
        </div>
    )
}

export default Experience 