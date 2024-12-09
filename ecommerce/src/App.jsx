import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Cart from './components/Cart';
import Account from './components/Account';
import Product from './components/Product';
import Login from './components/Login/Login';

const App = () => {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/product/:id" element={<Product />} />
    </Route>
    ));
  
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );


}

export default App;