import React from 'react'
import Tour from './Tour'

const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
        <div className='tours'>
          {tours.map((tour) => {
            return <Tour tour={tour} key={tour.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Tours
