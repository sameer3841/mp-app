import React from 'react'
import { Card } from '../Card'
import { CardContainer } from '../CardContainer'

export const About = () => {
  return (
    <>
    <section className='about--container'>
      <div className='about--section'>
        <h2 className='meet-our-team'>Meet our Team</h2>
        <CardContainer/>
      </div>
    </section>
    </>
  )
}
