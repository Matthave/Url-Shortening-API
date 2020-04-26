import React from 'react';

function Shorter(props) {
  const { handleInputValue, addNewShortenLink, inputValue } = props;
  return (
    <div className='shortenWrap'>
      <section className='shorten'>
        <div className="shorten__formWrap">
          <input
            type="text"
            className="shorten__input"
            placeholder='Shorten a link here..'
            onChange={(e) => handleInputValue(e)}
            value={inputValue}
          />
          <span className="shorten__invalid"></span>
          <button
            className="shorten__btn"
            onClick={() => addNewShortenLink()}
          >Shorten It!</button>
        </div>
      </section>
    </div>
  )
}

export default Shorter
