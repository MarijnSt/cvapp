import React from 'react'

const Voluntary = ({period, location, description}) => {

    return (
        <div className="voluntary-container">
            <p className="volperiod">{period}</p>
            <p className="vollocation">{location}</p>
            <p className="description">{description}</p>
        </div>
    )
}

export default Voluntary