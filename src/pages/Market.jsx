import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import {NFT__DATA} from '../assets/data/data';
import Nftcad from '../components/ui/Nft-card/Nftcard'
import Common from '../components/ui/Common-section/Common';
import '../styles/market.css'
const Market = () => {
  const [data, setData] = useState(NFT__DATA);
  const handleSort = (e) => {
    const filterValue = e.target.value;
    if(filterValue === 'high'){
      const filterData = NFT__DATA.filter(item => item.currentBid >= 6);
      setData(filterData)
    } else if(filterValue === 'all'){
      const filterData = NFT__DATA;
      setData(filterData)
    } else if(filterValue === 'mid'){
      const filterData = NFT__DATA.filter(item => item.currentBid >= 5.50 && item.currentBid < 6);
      setData(filterData)
    } else if(filterValue === 'low'){
      const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.50);
      setData(filterData)
    }
  }
  return (
    <>
      <Common title={'MarketPlace'} />
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter">
                  <select onChange={handleSort}>
                    <option value='all'>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>
            {
              data?.map((item, index) => (
                <Col lg='3' md='4' sm='6' className='mb-4' key={index} >
                  <Nftcad item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  )
}
export default Market;