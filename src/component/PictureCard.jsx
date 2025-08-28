import React from 'react'


function PictureCard({picture}) {
  return (
    <div>
        <h3>{picture.heading}</h3>
        <img src={picture.url} alt={picture.heading} />
        <p>{picture.description}</p>
    </div>
  )
}

export default PictureCard