import React from 'react'

const Skill = ({name, level, extra}) => {
    const max = 4
    let active = []
    let nonactive = []
    for (let i = 0; i < level; i++) {
        active.push('')
    }
    let result1 = active.map(item => <div className="line active">{item}</div>)

    for (let j = level; j < max; j++){ 
        nonactive.push('')
    }
    let result2 = nonactive.map(item => <div className="line">{item}</div>)

    let displaySkill = result1.concat(result2)
    return (
        <div className="skill">
            <h3 className="name">{name}</h3>
            <div className="bar">{displaySkill}</div>
            <p className="extra">{extra}</p>
        </div>
    )
}
export default Skill