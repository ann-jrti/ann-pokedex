import './style.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const formSubmitApi = 'https://formsubmit.co/ajax/andreamaso.sm@gmail.com';
  const backHome = useNavigate();
  const [response, updateResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(formSubmitApi, {
      method: "POST"
    })
      .then(response => response.json())
      .then(info => {
        updateResponse('Thank you for your registration!')
        setTimeout(() => {
          backHome('/home')
        }, 3000)
      })
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>

        <h2 className='form__register-title'>Register here</h2>
        <div className="form__input-container">
          <label className="form__label" htmlFor="name">Name</label>
          <input className="form__input" name="name" type="text" placeholder="Your name" required></input>
        </div>

        <div className="form__input-container">
          <label className="form__label" htmlFor="email">Email</label>
          <input className="form__input" name="email" type="email" placeholder="Your Email" required></input>
        </div>

        <textarea placeholder="Your Message" name="message" rows="5" required></textarea>
        <button className="submit" type="submit">Submit</button>
        <h2>{response}</h2>
      </form>

    </main>

  )
}

export default Contact;