import React from 'react';

import LogoApp from '../assets/images/logoHomebanking.png';

const Logo = () => {
  return (
    <div>
      <figure>
        <img className='logo' src={LogoApp} alt="logo Banco Saint Patrick" />
        <figcaption>
          <span className='text-bank'>BANCO</span>
          <span className='text-name'>SAINT PATRICK</span>
        </figcaption>
      </figure>
    </div>
  )
}

export default Logo;

