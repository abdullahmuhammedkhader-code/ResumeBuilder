import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import ResumeSteps from "./pages/ResumeSteps"
import UserForm from "./pages/UserForms"
import ViewResume from "./pages/ViewResume"
import Downloads from "./pages/Downloads"
import PageNotFound from './pages/PageNotFound'
import Footer from './Components/Footer'
import Header from "./Components/Header"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/steps' element={<ResumeSteps/>}/>
        <Route path='/forms' element={<UserForm/>}/>
        <Route path='/resume/:id/view' element={<ViewResume/>}/>
        <Route path='/downloads' element={<Downloads/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        

      </Routes>
      <Footer/>
    </>
  )
}

export default App
