import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import LinkedIn from '../images/linkedin.svg'
import EmailImage from  '../images/sending_email.png'



export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1an10qx', 'template_bl1fv6e', form.current, {
        publicKey: 'ya5rByi0IqfTvOXOL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>  
        <h1 className='contact--header'>Contact US</h1>
        <h3>Get in touch</h3>  
        <p className='form--description'>We would love your feedback! Don't hesitate to send us an email about our project. 
        If you have any questions or any feedback for us, fill out the form below 😊</p>
        <p className='contact--info'>✉️louisvalery2022@gmail.com <img src={LinkedIn}></img><a href='https://www.linkedin.com/in/valery-louis/'>LinkedIn</a> </p>
        <h1 className='contact--send--message--text'>Send us a Message 👇</h1>
        <div className='form--image--container'>
        <form ref={form} onSubmit={sendEmail}>
            <label className='name--label'>Name</label>
            <input type="text" name="user_name" className='name--input' required placeholder='enter your name'/>
            <label className='email--label'>Email</label>
            <input type="email" name="user_email" className='email--input' required placeholder='enter your email'/>
            <label className='message--label'>Message</label>
            <textarea name="message"  placeholder='Enter message..'/>
            <input type="submit" value="Send"/>
        </form>
        <img className='contact-email--image' src={EmailImage}></img>
        </div>
    </div>

  )
}
