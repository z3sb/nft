import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Common from '../components/ui/Common-section/Common';
import '../styles/wallet.css'

const walletData = [
  {
    title: "Bitcoin",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in itaque dicta beatae quidem. Dolor.',
    icon: 'ri-bit-coin-line'
  },
  {
    title: "Coinbase",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in itaque dicta beatae quidem. Dolor.',
    icon: 'ri-coin-line'
  },
  {
    title: "Metamask",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in itaque dicta beatae quidem. Dolor.',
    icon: 'ri-money-cny-circle-line'
  },
  {
    title: "Autheum",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in itaque dicta beatae quidem. Dolor.',
    icon: 'ri-money-pound-circle-fill'
  }
]
const Wallet = () => {
  return (
    <>
      <Common title='Connect Wallet' />
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center' >
              <div className="contact__header">
                <h3 className='text-light'>Connect your wallet</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Iste debitis quae earum corrupti nam nostrum eaque nihil omnis aut? Nihil.
                </p>
              </div>
            </Col>
            {
              walletData.map((item, index) => (
                <Col lg='3' md='4' sm='6' key={index} className='mb-4' >
                  <div className="wallet__item">
                    <span><i className={item.icon}></i></span>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  )
}
export default Wallet;