import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({handleClick}) => {
    const menuItems = ['Home', 'Skills', 'Experience', 'Portfolio', 'Contact']

    const returnItems = () => menuItems.map(item => 
        <MenuItem key={item} item={item} handleClick={handleClick} />
    )

    return (
        <div className="menu-container">
            <div className="menu-items">
                {returnItems()}
            </div>
        </div>
    )
}

export default Menu