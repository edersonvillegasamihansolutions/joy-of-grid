import React from 'react'

export default function PhotoGrid() {
  // Function to generate a random number within a given range
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Function to generate a random Lorem Picsum image URL
  function getRandomImageURL(width: number, height: number) {
    const randomImageID = getRandomNumber(1, 100)
    return `https://picsum.photos/${width}/${height}?image=${randomImageID}`
  }

  const loopCount = 12

  return (
    <div>
      <h1>Photo Grid</h1>
      <section className='photo-grid'>
        {Array.from({ length: loopCount }, (_, index) => {
          return (
            <div
              key={index}
              className={`card ${index % 3 === 0 ? 'card-wide' : ''} ${index % 2 === 0 ? 'card-tall' : ''}`}
              style={{
                backgroundImage: `url(${getRandomImageURL(1000, 1000)})`,
              }}
            >
              {index + 1}
            </div>
          )
        })}
      </section>
    </div>
  )
}
