import React from 'react';
import './Home.css';
import { Contact } from '../components/Contact';

export const More = () => {
  return (
    <div>
        <div className='morecontainer morecontainer-1'>
          <h1 className='text head'>More Details of the Car</h1>
          <p className='text para'>The LC car was built using parts from a Picar. To satisfy the requirements of the project some parts from the Picar were put aside or swapped for Arduino hardware and electronic components. The car has sensors to detect color and movement from the laser. For the LC Car to be successful we must research Arduino technology and make sure that all parts are purchased and that all the necessary parts of the Picar are also included in the set. Below are the materials we need for the car to be built. Last but not least we will make sure to have a follow-up with the project twice a week and make a visit to the maker space where we will do the 3d printing. We will also be using Fusion360 which is the most important part of this project because this allows us to help construct the car until we get to the final design.</p>
        </div>
        <div class="listing">
        <div className='material list'>
          <h1>Material List</h1>
          <ul>
            <li>Pi Car</li>
            <li>MG996r</li>
            <li>28BYJ-48 + Driver ULN2003</li>
            <li>RF-300 Motor</li>
            <li>A4988 Driver</li>
            <li>4 Channel Relay Module</li>
            <li>7805 Voltage Regulator</li>
            <li>Pin Header Male/Female 1x40</li>
            <li>TSOP4838</li>
            <li>HC-06 Module</li>
          </ul>
        </div>
        <div className='tools list'>
          <h1>Tools</h1>
          <ul>
            <li>Fusion360</li>
            <li>3D Printer</li>
            <li>Air-soft Ammunition</li>
            <li>Servos</li>
            <li>Arduino IDE</li>
          </ul>
        </div>
        </div>
        <div className='morecontainer'>
          <h2 className='text head'>Unfortunate Issues</h2>
          <p className='text para'>
When our 3D printer ran dry, halting production of the picar's crane, we pivoted swiftly. Opting for a wood-based body, we sourced the necessary parts and crafted a sturdy, reliable crane. Surprisingly, it outperformed expectations, boasting seamless functionality and intuitive manual controls. This unexpected challenge spurred innovation, showcasing our team's adaptability and problem-solving prowess.</p>
        </div>
        <Contact/>
    </div>
  )
}
