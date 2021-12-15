import React from 'react'
import emailjs from 'emailjs-com'

import { ContactForm, FormInputs } from './styles'

export function Form() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_aq8r1tz', 'template_efnmnug', e.target, 'user_bQxTD8Swl6pq4HDXxaDVd')
      .then((result) => {
          console.log(result.text)
      })
      e.target.reset() //form reset
  }

  return (
    <ContactForm onSubmit={ sendEmail }> 
      <FormInputs>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
          <input id='name' type='text' name='name'
          placeholder='Tell me your name' required/>
      </FormInputs>

      <FormInputs>
        <label htmlFor='email' className='form-label'>
          E-mail
        </label>
          <input id='email' type='email' name='email'
          placeholder='Tell me your e-mail' required />
      </FormInputs>

      <FormInputs>
        <label htmlFor='subject' className='form-label'>
          Subject
        </label>
        <select id="subject" name="subject">
          <option value="choose">Choose</option>
          <option value="quickCall">Quick call</option>
          <option value="freelance">Freelance</option>
          <option value="help">Help</option>
          <option value="others">Others</option>
        </select>
      </FormInputs>

      <FormInputs>
        <label htmlFor='message' className='form-label'>
          Message
        </label>
          <textarea id='message' type='message' name='message'
          placeholder='Hi! I’d like to talk to you about {something},' required></textarea>
      </FormInputs>
      <button type="submit">Send to Bruno</button>
    </ContactForm>
  )
}