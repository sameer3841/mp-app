import React from 'react';
import './Home.css';


export const Home = () => {
  return (    
  <div>
    
    <div>
      <img className='picarimg' src={require('../images/Picar.jpg')}/>
      </div>
    <div className='containerHome'>
      <h2 className='text head'>Welcome to our Mid Program Project</h2>
      <p className='text para'> In this course, our group has been assigned the task of using our creativity and applying our programming skills to build a gadget using Arduino hardware and software. We aim to develop a unique and functional gadget.</p>
      <p className='text para'>To achieve our goal, we plan to carefully analyze and evaluate the requirements of the project. We will engage in extensive research to identify what we need to build our gadget and to determine what the best approach is for starting our project. We will also conduct rigorous testing and experimentation to ensure that our gadget is reliable, effective, and user-friendly.</p>
      <p className='text para'>Throughout the course, we will be using this page to share our journey with you. We will provide detailed accounts of our progress, including our successes and challenges, and offer insights into our development process. </p>
    </div>
    
    
    <div>
        <img className='turretimg' src={require('../images/turret.png')}/>
    </div>
      <div className='containerHome2'>
        <h2 className='text head'>Concept</h2>
        <p className='text para'>For this project, we chose a car as our gadget. Seeing how many car gadgets are controlled with Bluetooth or remote devices, we decided to add different aspects to our car to make it unique. Instead of being controlled with a Bluetooth device, the car will be laser-controlled, meaning that its movement will be directed using a laser. The car will also have a claw mounted on top of it to grab and move objects. To give the car additional functions, it will be placed in an environment that it can interact with.</p>
      </div>

  </div>
  
    
    
  )
}
