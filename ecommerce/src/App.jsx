import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Cart from './components/Cart/Cart';
import Account from './components/Account/Account';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Return from './components/Return/Return';
import Transactions from './components/Transactions/Transactions';
import Unauthorized from './components/Unauthorized/Unauthorized';

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/return" element={<Return />} />
      <Route path="/account/transactions" element={<Transactions />} />
      <Route path='/unauthorized' element={<Unauthorized />} />
    </Route>
  ));

  return (

      <div className='app'>
        <RouterProvider router={router} />
      </div>

  );


}

export default App;