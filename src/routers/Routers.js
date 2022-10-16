import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from '../pages/Contact';
import Create from '../pages/Create';
import Home from '../pages/Home';
import Market from '../pages/Market'
import NftDetails from '../pages/NftDetails';
import Wallet from '../pages/Wallet';
const Routers = () => {
  return (
    <Routes>
      <Route path='/nft' element={<Navigate to='/nft/home' />} />
      <Route path='/nft/home' element={<Home />} />
      <Route path='/nft/market' element={<Market />} />
      <Route path='/nft/create' element={<Create />} />
      <Route path='/nft/contact' element={<Contact />} />
      <Route path='/nft/wallet' element={<Wallet />} />
      <Route path='/nft/market/:id' element={<NftDetails />} />
    </Routes>
  )
}
export default Routers;