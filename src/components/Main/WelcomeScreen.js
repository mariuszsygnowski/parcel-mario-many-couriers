import React from 'react';
import './welcomeScreen.scss';

const WelcomeScreen = () => {
  return (
    <div className='welcomeScreen'>
      <div className='welcomeScreen__logo'>
        <p className='welcomeScreen__logo__first'>
          <span>par</span>
          <span>cel</span>
        </p>
        <p className='welcomeScreen__logo__second'>
          <span>mar</span>
          <span>io</span>
        </p>
      </div>
      <p className='welcomeScreen__motto'>Find your best courier and compare prices from different websites</p>
    </div>
  );
};

export default WelcomeScreen;
