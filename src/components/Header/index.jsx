import React from 'react'
import logo from "../../assets/image/logo.svg"
import { NavLink } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";

export default function Header() {
  return (
    <header>
      <div className="wrap flex j-between" style={{ width: "90%" }}>
        <LuMenu size={26} color="var(--bg-white)" />
        <NavLink to="/">
          <img
            className='logo'
            src={logo}
            alt=""
          />
        </NavLink>
        <nav className='flex' style={{ gap: 30 }}>
          <NavLink to="/"> ГЛАВНАЯ </NavLink>
          <NavLink to="/at-home"> ДОМА </NavLink>
          <NavLink to="/bath"> БАНИ </NavLink>
        </nav>
        <div className='header_end'>
          <h4 className='flex' style={{ gap: 3 }}>
            <span>Санкт-Петербург:</span> <a href='tel: 8 (812) 603-72-22'>8 (812) 603-72-22</a>
          </h4>
          <h4 className='flex' style={{ gap: 3 }}>
            <span>Москва:</span> <a href='tel:8 (499) 380-77-33'>8 (499) 380-77-33</a>
          </h4>
        </div>
      </div>
    </header>
  )
}