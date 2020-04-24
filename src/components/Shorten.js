import React from 'react';
import bgShortenMobile from '../images/bg-shorten-mobile.svg';

function Shorter(props) {
  return (
    <div className='shortenWrap'>
      <section className='shorten'>
        <img src={bgShortenMobile} alt="" className="shorten__img" />
        <div className="shorten__formWrap">
          <input
            type="text"
            className="shorten__input"
            placeholder='Shorten a link here..'
            onChange={(e) => props.handleInputValue(e)}
            value={props.inputValue}
          />
          <button
            className="shorten__btn"
            onClick={() => props.addNewShortenLink()}
          >Shorten It!</button>
        </div>
      </section>
      {/* <div className="shortenLink">
        <a className="shortenLink__old">113131313</a>
        <hr />
        <a className="shortenLink__new">13131213</a>
        <button className="shortenLink__btn">Copy!</button>
      </div> */}
    </div>
  )
}

export default Shorter
