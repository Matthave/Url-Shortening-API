import React from 'react';
import iconRecoginition from '../images/icon-brand-recognition.svg';
import iconDetailed from '../images/icon-detailed-records.svg';
import iconCustomizable from '../images/icon-fully-customizable.svg';

const boxes = [
  {
    id: 1,
    image: iconRecoginition,
    title: 'Brand Recognition',
    text: `Boost your brand recognition with each click. Generic links don’t
    mean a thing. Branded links help instil confidence in your content.`,
  },
  {
    id: 2,
    image: iconDetailed,
    title: 'Detailed Records',
    text: `Gain insights into who is clicking your links. Knowing when and where
    people engage with your content helps inform better decisions.`,
  },
  {
    id: 3,
    image: iconCustomizable,
    title: 'Fully Customizable',
    text: `Improve brand awareness and content discoverability through customizable
    links, supercharging audience engagement.`,
  }
]

function Stats() {
  const boxesMap = boxes.map((box) => (
    <div key={box.id} className="box">
      <div src='' alt="" className="box__img"></div>
      <h2 className="box__title">{box.title}</h2>
      <p className="box__text">{box.text}</p>
    </div>
  ))
  return (
    <section className='stats'>
      <h2 className="stats__title">Advanced Statistics</h2>
      <p className="stats__text">Track how your links are performing across the web with our
      advanced statistics dashboard.
      </p>
      {boxesMap}
    </section>
  )
}

export default Stats
// Advanced Statistics



// Brand Recognition



// Detailed Records



// Fully Customizable

