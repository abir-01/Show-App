import React from 'react'
import Featured from './components/Featured'
import Summary from './components/Summary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/Show-App/' element={<Featured />} />
          <Route exact path='/Show-App/summary' element={<Summary />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App