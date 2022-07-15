import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import magicHat from '../assets/Iconos/Magic Hat.svg'

const Sidebar = () => {
  return (
    <div className="h-screen pb-10">
      <div className="grid place-items-center">
        <Link
          to=""
          onClick={() => {}}
          className="items-center mt-[25.5px] flex"
        >
          <img src={magicHat} alt="" className="w-11 mr-[10.67px]" />
          <h1 className="text-[#4E1469] text-xl font-semibold tracking-[0.25px] leading-5">
            Gandalf's <br /> Book
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
