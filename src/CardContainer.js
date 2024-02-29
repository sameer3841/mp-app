import React, { useEffect, useState } from 'react'
import data from './data.js'
import { Card } from './Card.js';
import left from './left.png'
import right from './right2.png'
import Valery from './images/Valery.jpg'
import Ceasar from './images/Ceasar.jpg'
import Sameer from './images/sameer.jpg'
import Brandon from './images/brandon.jpg'
import IMG from './images/img.jpg'




export const CardContainer = () => {

    let img = [Valery, Sameer, Brandon, Ceasar, IMG, IMG ]

    const [userData, setUserData] = useState();
    let [index, setIndex] = useState(0)
    let [image, setImage] = useState(img[0])
    let [name, setName] = useState(data[0].name)
    let [about, setAbout] = useState(data[0].about)

    useEffect(()=>{
        setUserData(data)
    })

    function getNextMember(){
        let temp = (index + 1) % data.length;
        // if(temp >= data.length){
        //     temp = 0;
        // }
        setIndex(t => temp)
        changeCard();
    }

    function getPrevMember(){
        let temp = index - 1;
        if(temp < 0){
            temp = data.length-1;
        }
        setIndex(t => temp)
        changeCard();
    }

    
    function changeCard(){
        if(userData){
            let name = userData[index].name
            let about = userData[index].about
            let image = img[index];
            setAbout(about)
            setImage(image)
            setName(name)
        }
    }
    


  return (
    
    <div className='main--card--container'>
        <button onClick={getPrevMember}><img src={left} height={50} width={50}></img></button>
        <Card name={name} img={image} about={about}/>
        <button onClick={getNextMember}><img src={right} height={50} width={50}></img></button>
    </div>
  )
}
