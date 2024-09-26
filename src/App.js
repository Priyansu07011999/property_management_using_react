import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/cartContext';
import Navbar from './components/Navbar';
import {Home, Team, Contact, Cart, Properties, Checkout } from './components';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
