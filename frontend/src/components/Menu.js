import React from 'react'
import MenuItem from './MenuItem'

//images
// nog proberen om met svg te werken
// import home from '../images/menu-icons/home.png'
// import home from '../images/menu-svg/home.svg'
// import skills from '../images/menu-icons/skills.png'
// import work from '../images/menu-icons/work.png'
// import github from '../images/menu-icons/github.png'
// import contact from '../images/menu-icons/contact.png'

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