import React from 'react';

import './modal.css'

const Modal = ({setShowModal}) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal" onClick={() => setShowModal(false)}><i className="ri-close-line"></i></span>
        <h6 className='text-center text-light'>Place a Bid</h6>
        <p className='text-center text-light'>You must bid at least <span className='money'>5.89 ETH</span></p>
        <div className="input__item mb-4">
          <input type="number" placeholder='00: 00 ETH' />
        </div>
        <div className="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder='Enter quantity' />
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <p>Service Free</p>
          <span className='money'>0.89 ETH</span>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <p>Total Bid Amount</p>
          <span className='money'>5.89 ETH</span>
        </div>
          <div className='text-center model__btn'>
            <button className="bid__btn">Place a Bid</button>
          </div>
      </div>
    </div>
  )
}

export default Modal