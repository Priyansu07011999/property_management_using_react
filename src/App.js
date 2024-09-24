import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar} from './components'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
