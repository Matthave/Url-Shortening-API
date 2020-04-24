import React from 'react';
import headerImg from '../images/illustration-working.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__img' src={headerImg} alt="workImg" />
      <div className="header__wrapText">
        <h2 className='header__title'>More than just shorter links</h2>
        <p className='header__text'>
          Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <button className="header__btn">Get Started</button>
      </div>
    </header>
  )
}

export default Header
