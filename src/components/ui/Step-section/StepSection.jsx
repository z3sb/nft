import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './step.css';

const stepData = [
  {
    title: 'Setup your wallet',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum doloremque hic, magni incidunt debitis.",
    icon: 'ri-wallet-line',
  },
  {
    title: 'Create your collection',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum doloremque hic, magni incidunt debitis.",
    icon: 'ri-layout-masonry-line',
  },
  {
    title: 'Add you NFTs',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum doloremque hic, magni incidunt debitis.",
    icon: 'ri-image-line',
  },
  {
    title: 'List them for sale',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum doloremque hic, magni incidunt debitis.",
    icon: 'ri-list-check',
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-4'>
            <h3 className='step__title'>Create and sell your NFTs</h3>
          </Col>
          {
            stepData.map((item, index) => (
              <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                <div className="single__step__item">
                  <span><i className={item.icon}></i></span>
                  <div className="step__item__content">
                    <h5>
                      <Link to='/nft/wallet'>{item.title}</Link>
                    </h5>
                    <p>{item.desc}</p>
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
export default StepSection;