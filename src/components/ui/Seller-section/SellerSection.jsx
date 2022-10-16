import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { SELLER__DATA } from '../../../assets/data/data';
import './seller.css'

const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <div className="seller__section-title">
              <h3>Top Seller</h3>
            </div>
          </Col>
          {
            SELLER__DATA.map((item, index) => (
              <Col lg='2' md='3' sm='4' xs='6' className='mb-4' key={index}>
                <div className="single__seller-card d-flex align-items-center gap-3">
                  <div className="seller__img">
                    <img src={item.sellerImg} alt='' className='w-100' />
                  </div>
                  <div className="seller__content">
                    <h6>{item.sellerName}</h6>
                    <h6>{item.currentBid}</h6>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
export default SellerSection;