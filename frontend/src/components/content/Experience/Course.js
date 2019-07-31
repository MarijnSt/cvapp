import React from 'react'

const Course = ({title, degree, school}) => {

    return (
        <div className="course-container">
            <p className="course-title">{title}</p>
            <p className="course-degree">{degree}</p>
            <p className="course-school">{school}</p>
        </div>
    )
}

export default Course