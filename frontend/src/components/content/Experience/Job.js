import React from 'react'

const Job = ({period, company, title, description}) => {

    return (
        <div className="job-container">
            <p className="period">{period}</p>
            <p className="company">{company}</p>
            <p className="jobtitle">{title}</p>
            <p className="description">{description}</p>
        </div>
    )
}

export default Job