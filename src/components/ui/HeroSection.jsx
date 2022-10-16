import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './hero-section.css';
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <h2>Discover rare digital art and collect <span className=' stroke__color'>sell extraordinary</span> NFTs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam error, 
                rerum placeat hic sint ullam corrupti et neque eos voluptatum.
              </p>
              <div className="hero__btns d-flex align-items-center gap-4">
                <button className='d-flex align-items-center gap-2 explore__btn'><i className="ri-rocket-line"></i><Link to='/nft/market'>Explore</Link></button>
                <button className='d-flex align-items-center gap-2 create__btn'><i className="ri-ball-pen-line"></i><Link to='/nft/create'>Create</Link></button>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default HeroSection;