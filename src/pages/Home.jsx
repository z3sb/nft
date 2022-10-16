import React from 'react'
import HeroSection from '../components/ui/HeroSection';
import LiveAuction from '../components/ui/Live-Auction/LiveAuction';
import SellerSection from '../components/ui/Seller-section/SellerSection';
import StepSection from '../components/ui/Step-section/StepSection';
import Trending from '../components/ui/Trending-section/Trending';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  )
}
export default Home;