import { useSelector } from 'react-redux'
import './App.css'
import React from 'react'
import { RootState } from './store/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {RegisterComponent} from './components/auth/registerComponent'
import {LoginComponent} from './components/auth/loginComponent'
import { NavBarComponent } from './components/layout/navBarComponent'
import { DataComponent } from './components/dataComponent'



const App: React.FC = () => {

  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<RegisterComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/data" element={<DataComponent />} />
      </Routes>  
    </Router>
  )
}

export default App
