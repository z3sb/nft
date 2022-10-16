import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Nftcard from '../Nft-card/Nftcard';
import {NFT__DATA} from '../../../assets/data/data'
import './live-auction.css';


const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span><Link to='/nft/market'>Explore more</Link></span>
            </div>
          </Col>
          {
            NFT__DATA.slice(0, 4).map((item, index) => (
              <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                <Nftcard item={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
export default LiveAuction;