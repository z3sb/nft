import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Common from '../components/ui/Common-section/Common'

const Contact = () => {
  const hadelSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Common title='Contact' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' className='m-auto text-center'>
              <h2>Drop a Message</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores similique, 
                perspiciatis reiciendis fugit libero beatae quasi exercitationem obcaecati dicta. 
                Blanditiis.
              </p>
              <div className="contact mt-4">
                <form onSubmit={hadelSubmit}>
                  <div className="form__input">
                    <input type="text" placeholder='Enter your name' />
                  </div>
                  <div className="form__input">
                    <input type="email" placeholder='Enter your email' />
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder='Enter subject' />
                  </div>
                  <div className="form__input">
                    <textarea rows="7" placeholder='Write message'></textarea>
                  </div>
                  <button className="bid__btn">Send a Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
export default Contact;