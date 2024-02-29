import React from 'react'

export const Card = (props) => {
  return (
    <div className='card--container'>
        <img src={props.img} alt="" className='card--image'></img>
        <h3 >Name:</h3>
        <div className='card--name'>{props.name}</div>
        <h3>About:</h3>
        <div className='card--description'>{props.about}</div>
    </div>
  )
}
