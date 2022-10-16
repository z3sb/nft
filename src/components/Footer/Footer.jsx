import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css';

const myAccount = [
  {
    display: 'Author Profile', 
    url: '/nft/seller-profile'
  },
  {
    display: 'Create Item', 
    url: '/nft/create'
  },
  {
    display: 'Collection', 
    url: '/nft/market'
  },
  {
    display: 'Edit Profile', 
    url: '/nft/edit-profile'
  },
];
const resoures = [
  {
    display: 'Help Center', 
    url: '#'
  },
  {
    display: 'Partner', 
    url: '#'
  },
  {
    display: 'Community', 
    url: '#'
  },
  {
    display: 'Activity', 
    url: '#'
  },
];
const company = [
  {
    display: 'About', 
    url: '#'
  },
  {
    display: 'Career', 
    url: '#'
  },
  {
    display: 'Ranking', 
    url: '#'
  },
  {
    display: 'Contact Us', 
    url: '/nft/contact'
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='6' sm='6' className='mb-4'>
            <div className="logo">
              <h1 className='d-flex gap-2 align-items-center stroke__color'><span><i className="ri-fire-fill"></i></span> NFTs</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Tempore quis officiis nobis iusto quibusdam delectus facere voluptatum eius veritatis recusandae?
            </p>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
            <h5>My Account</h5>
            <ListGroup className='list__group'>
              {
                myAccount.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
            <h5>Resources</h5>
              <ListGroup className='list__group'>
                {
                  resoures.map((item, index) => (
                    <ListGroupItem key={index} className="list__item">
                      <Link to={item.url}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6' className='mb-4'>
            <h5>Company</h5>
            <ListGroup className='list__group'>
              {
                company.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3' md='6' sm='6' className='mb-4'>
            <h5>NewsLetter</h5>
            <input type="text" className='newsletter' placeholder='Email' />
            <div className="social__links d-flex gap-3 align-items-center">
              <span>
                <a href='https://www.facebook.com/profile.php?id=100044635810599' target='_blank'>
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a href='https://www.instagram.com/z3.sb' target='_blank'>
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href='https://twitter.com/Haider68756653' target='_blank'>
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
              <span>
                <a href='https://t.me/z3_sb' target='_blank'>
                  <i className="ri-telegram-line"></i>
                </a>
              </span>
              <span>
                <a href='https://www.linkedin.com/in/haider-xr-a0581523b' target='_blank'>
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </Col>
          <Col lg='12' className='mt-4 text-center'>
            <p className="copyright">Copyrights 2022, Developed by Haider Fadel. @z3.sb</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;