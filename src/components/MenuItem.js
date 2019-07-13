import React from 'react'

const MenuItem = ({item, handleClick}) => {
    const alt = `${item.name} menu icon`
    return (
        <div className="menu-item" onClick={handleClick} key={item.name}>
            <img className="icon" src={item.icon} alt={alt}/>
            <p>{item.name}</p>
        </div>
    )
}

export default MenuItem