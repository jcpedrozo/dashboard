import React, { useContext } from 'react'
import plaheholder from '../assets/placeholder.png'
import { FormContext } from '../context/FormContext'

const Adventure = ({ adventure }) => {
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
            {adventure.adventure_name}
          </h1>
          <div className="grid grid-cols-2 gap-x-28 gap-y-3 content-center">
            <span className="text-items-purple">{adventure.name}</span>
            <div className="flex items-center">
              <span className="rounded-full bg-text-adventures w-2 h-2 mr-2.5"></span>
              <span className="text-14 text-text-adventures">
                Origin <span className="text-base">{adventure.origin}</span>
              </span>
            </div>
            <span className="text-14 text-items-gray">Hobbit</span>
            <div className="flex items-center">
              <span className="rounded-full bg-text-adventures w-2 h-2 mr-2.5"></span>
              <span className="text-14 text-text-adventures">
                Destination{' '}
                <span className="text-base">{adventure.destination}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adventure
