import React from 'react'
import Adventures from '../components/Adventures'

const Dashboard = () => {
  return (
    <div className="flex-1 bg-dashboard-color">
      <h1 className="mx-auto mt-[50px] mb-[35px] font-semibold text-xl text-items-purple w-4/5">
        Hi, User
      </h1>
      <div className="mx-auto w-4/5 flex justify-between mb-3">
        <select className="text-items-purple rounded-lg block w-64 p-2 font-medium text-base">
          <option selected="">Filter by Character</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <button className="bg-color-button text-button-light-gray font-semibold text-base px-5 rounded-full">
          New Adventure
        </button>
      </div>
      <Adventures />
    </div>
  )
}

export default Dashboard
