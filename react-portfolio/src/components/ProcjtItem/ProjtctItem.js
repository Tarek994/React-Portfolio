import React from 'react'

const ProjtctItem = ({image, name}) => {
  return (
    <div className="ProjectItem">
        <div className='bgImage' style={{backgroundImage: `url(${image})`}}/>
        <h1>{name} </h1>
    </div>
  )
}

export default ProjtctItem