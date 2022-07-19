import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as MagicHat } from '../assets/Iconos/Magic Hat.svg'
import { ReactComponent as Logout } from '../assets/Iconos/Loguot.svg'
// import Star from '../assets/Iconos/Star.svg'

import links from '../data/links'

const Sidebar = () => {
  const activeLink =
    'text-items-purple flex items-center p-[7.5px] font-semibold'
  const normalLink =
    'text-items-gray hover:text-items-purple flex items-center p-[7.5px] font-medium'

  // const iconStarShow = 'text-items-purple w-2.5 ml-2.5 visible'
  // const iconStarHidden = 'text-items-purple w-2.5 ml-2.5 invisible'

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <div className="grid place-items-center">
          <Link to="" className="items-center mt-[25.5px] flex">
            <div className="w-11 mr-[10.67px]">
              <MagicHat />
            </div>
            <h1 className="text-[#4E1469] text-xl font-semibold tracking-[0.25px] leading-5">
              Gandalf's <br /> Book
            </h1>
          </Link>
        </div>

        <div className="grid place-items-center mt-[49.5px]">
          {links.map((link) => (
            <div className="grid gap-3" key={link.items}>
              {link.items.map((item) => (
                <NavLink
                  to={`/${item.name}`}
                  key={item.name}
                  // className="flex items-center p-[7.5px]"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <div className="w-[25px] mr-[10px]">{item.icon}</div>
                  <span className="capitalize">{item.name}</span>
                  {/* <div>
                  <img src={Star} />
                </div> */}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Link to="" className="flex items-center justify-around mb-[25.5px]">
        <h1 className="text-items-gray text-[17px] font-medium tracking-[0.25px] leading-5">
          Logout
        </h1>
        <div className="w-7">
          <Logout />
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
