// eslint-disable-next-line no-unused-vars
import React, {useState, useRef} from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [nav, setNav] = useState({
        menu: [
            {
                title: 'Главная',
                link: '/',
            },
            {
                title: 'Информация',
                link: '/information',
            },
        ]
    })

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="navbar-brand">GitHub Search</div>
            <ul className="navbar-nav">
                {nav.menu.map((item, i) => {
                    return (
                        <li className="nav-item" key={i}>
                            <NavLink className="nav-link" to={item.link}>{item.title} <span className="sr-only">(current)</span></NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
