import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components'
import Dashboard from './pages/Dashboard'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-[220px] relative sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>

        <Routes>
          {/* pages  */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
