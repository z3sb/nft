import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Common from '../components/ui/Common-section/Common';
import { Link, useParams } from 'react-router-dom';
import {NFT__DATA} from '../assets/data/data';
import LiveAuction from '../components/ui/Live-Auction/LiveAuction';
import '../styles/nft-details.css'

const NtfDetails = () => {
  const {id} = useParams();
  const [singleNft] = NFT__DATA.filter(item => item.id === id);
  return (
    <>
      <Common title={singleNft.title} />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <img src={singleNft.imgUrl} alt="" className='w-100 single__nft-img' />
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className="single__nft__content">
                <h2>{singleNft.title}</h2>
                <div className='d-flex align-items-center justify-content-between my-4'>
                  <div className='d-flex align-items-center gap-4 single__nft-seen'>
                    <span><i className="ri-eye-line"></i> 234</span>
                    <span><i className="ri-heart-line"></i> 1234</span>
                  </div>
                  <div className='d-flex align-items-center gap-2 single__nft-more'>
                    <span><i className="ri-send-plane-line"></i></span>
                    <span><i className="ri-more-2-line"></i></span>
                  </div>
                </div>
                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={singleNft.creatorImg} alt="" className="w-100" />
                  </div>
                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>
                <p className='my-4'>{singleNft.desc}</p>
                <button className='bid__btn d-flex align-items-center gap-2 w-100 justify-content-center'><i className="ri-shopping-bag-line"></i><Link to='/wallet'>Place a Big</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </>
  )
}
export default NtfDetails;