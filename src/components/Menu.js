import React from 'react'
import MenuItem from './MenuItem'

//images
// nog proberen om met svg te werken
import home from '../images/menu-icons/home.png'
import skills from '../images/menu-icons/skills.png'
import work from '../images/menu-icons/work.png'
import github from '../images/menu-icons/github.png'
import contact from '../images/menu-icons/contact.png'

const Menu = ({handleClick}) => {
    const menuItems = [
        {
            name: 'Home',
            icon: home
        },
        {
            name: 'Skills',
            icon: skills
        },
        {
            name: 'Experience',
            icon: work
        },
        {
            name: 'Portfolio',
            icon: github
        },
        {
            name: 'Contact',
            icon: contact
        }
    ]

    const returnMenu = () => menuItems.map(item => 
        <MenuItem key={item.name} item={item} handleClick={handleClick} />
    )

    return (
        <div className="menu-container">
            {returnMenu()}
        </div>
    )
}

export default Menu