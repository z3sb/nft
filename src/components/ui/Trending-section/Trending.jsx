import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { NFT__DATA } from '../../../assets/data/data';
import Nftcad from '../Nft-card/Nftcard';
import './trending.css'

const Trending = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h3 className="trending__title">Trending</h3>
          </Col>
          {
            NFT__DATA.slice(0, 8).map((item, index) => (
              <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                <Nftcad item={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
export default Trending;