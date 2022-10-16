import React, {useRef, useEffect} from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
const navLinks = [
  {
    display: 'Home',
    url: 'nft/home'
  },
  {
    display: 'Market',
    url: 'nft/market'
  },
  {
    display: 'Create',
    url: 'nft/create'
  },
  {
    display: 'Contact',
    url: 'nft/contact'
  }
];
const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__shrink');
      }else{
        headerRef.current.classList.remove('header__shrink');
      }
    })
    return () => {
      window.removeEventListener('scroll', () => console.log('Hello'))
    }
  }, [])

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h1 className='d-flex gap-2 align-items-center stroke__color'><span><i className="ri-fire-fill"></i></span> NFTs</h1>
          </div>
          <div className="nav__menu" ref={menuRef}>
            <ul className="nav__list">
              <div className="close__menu" onClick={toggleMenu}><i className="ri-close-line"></i></div>
              {
                navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''} onClick={toggleMenu}>{item.display}</NavLink>
                  </li>
                ))
              }
              <li className="nav__item">
                <NavLink></NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__right d-flex align-items-center gap-5">
            <button className="btn d-flex gap-2 align-items-center">
              <span><i className="ri-wallet-line"></i></span>
              <Link to='/nft/wallet'>
                Connect Wallet
              </Link>
            </button>
            <span className="mobile__menu" onClick={toggleMenu}><i className="ri-menu-line"></i></span>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default Header;