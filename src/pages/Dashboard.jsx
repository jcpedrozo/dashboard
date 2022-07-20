import React, { useContext, useEffect, useState } from 'react'
import { Adventure, SliderOver } from '../components'
import { FormContext } from '../context/FormContext'

const Dashboard = () => {
  const { state } = useContext(FormContext)
  const [adventures, setAdventures] = useState([])

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setAdventures([...adventures, state])
  }, [state])

  return (
    <div className="flex-1 bg-dashboard-color">
      <h1 className="mx-auto mt-[50px] mb-[35px] font-semibold text-xl text-items-purple w-4/5">
        Hi, User
      </h1>
      <div className="mx-auto w-4/5 flex justify-between mb-3">
        <select className="text-items-purple rounded-lg block w-64 p-2 font-medium text-base">
          <option defaultValue="">Filter by Character</option>
        </select>
        <button
          className="bg-color-button text-button-light-gray font-semibold text-base px-5 rounded-full"
          onClick={handleClose}
        >
          New Adventure
        </button>
      </div>
      <SliderOver isOpen={isOpen} handleClose={handleClose} />
      {adventures.map(
        (adventure, index) =>
          state.adventure_name.length > 0 && (
            <Adventure adventure={adventure} key={index} />
          )
      )}
    </div>
  )
}

export default Dashboard
