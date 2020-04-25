import React from 'react'
import facebookImg from '../images/icon-facebook.svg';
import instagramImg from '../images/icon-instagram.svg';
import pinterestImg from '../images/icon-pinterest.svg';
import twitterImg from '../images/icon-twitter.svg';

function Footer() {
  return (
    <footer>
      <div className="boostLink">
        <h2 className="boostLink__title">Boost your link today</h2>
        <button className="boostLink__btn">Get Started</button>
        {/* <img src={boostImg} alt="" className="boostLink__img" /> */}
      </div>
      <div className="contact">
        <h2 className="contact__title">Shortly</h2>
        <ul className="contact__list">
          <li className="contact__link">Features</li>
          <li className="contact__link">Link Shortening</li>
          <li className="contact__link">Branded Links</li>
          <li className="contact__link">Analytics</li>
        </ul>
        <ul className="contact__list">
          <li className="contact__link">Resources</li>
          <li className="contact__link">Blog</li>
          <li className="contact__link">Developers</li>
          <li className="contact__link">Support</li>
        </ul>
        <ul className="contact__list">
          <li className="contact__link">Company</li>
          <li className="contact__link">About</li>
          <li className="contact__link">Our Team</li>
          <li className="contact__link">Careers</li>
          <li className="contact__link">Contact</li>
        </ul>
      </div>
      <div className="socialMedia">
        <img src={facebookImg} alt="" className="socialMedia__img" />
        <img src={twitterImg} alt="" className="socialMedia__img" />
        <img src={pinterestImg} alt="" className="socialMedia__img" />
        <img src={instagramImg} alt="" className="socialMedia__img" />
      </div>
    </footer>
  )
}

export default Footer
