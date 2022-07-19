import React from 'react'
import plaheholder from '../assets/placeholder.png'

const Adventures = () => {
  return (
    <div className="mx-auto rounded-lg bg-color-adventures w-4/5 mb-4">
      <div className="py-5 flex justify-start items-center">
        <img
          src={plaheholder}
          alt=""
          className="w-[87px] h-[87px] rounded-lg mx-4"
        />
        <div className="text-18 font-medium tracking-[0.25px] leading-5">
          <h1 className="text-title-adventure mb-4 leading-[27px]">
            Destroy The Ring on Mount Doom
          </h1>
          <div className="grid grid-cols-2 gap-x-28 gap-y-3 content-center">
            <span className="text-items-purple">Frodo Baggins</span>
            <div className="flex items-center">
              <span className="rounded-full bg-text-adventures w-2 h-2 mr-2.5"></span>
              <span className="text-14 text-text-adventures">Origin</span>
            </div>
            <span className="text-14 text-items-gray">Hobbit</span>
            <div className="flex items-center">
              <span className="rounded-full bg-text-adventures w-2 h-2 mr-2.5"></span>
              <span className="text-14 text-text-adventures">Destination</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adventures
