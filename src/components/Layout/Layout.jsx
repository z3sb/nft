import React from 'react'
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Layout = (props) => {
  return (
    <>
      <Header />
      <div>
        <Routers></Routers>
      </div>
      <Footer />
    </>
  )
}
export default Layout;