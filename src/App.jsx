import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components'
import Adventures from './pages/Adventures'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="w-[220px] fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>

        <Routes>
          {/* pages  */}
          <Route path="/adventures" element={<Adventures />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
