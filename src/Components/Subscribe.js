import React from 'react'
import './Footer.css';
import { Button } from './Button';

function Subscribe() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get newsletter to receive our best offer 
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
        </div>
    )
}

export default Subscribe;
