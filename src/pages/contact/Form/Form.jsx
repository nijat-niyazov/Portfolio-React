import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Toastify } from '../../../components/exporter';
import './form.scss';

const Form = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6zplz7v', // SERVICE_ID
        'template_z3drwvk', // TEMPLATE_ID
        form.current, // ref.current
        '2aA2dI64TuKIY5SO2' // PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message succesfully sent!');
          e.target.reset(); // to reset your form
          // window.location.reload(false);
        },
        error => {
          toast.error('Failed to send the message. Try again!');
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Toastify />
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <div className="halfs">
            <li className="half">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
            </li>
            <li className="half">
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
              />
            </li>
          </div>
          <li>
            <input
              type="text"
              name="user_subject"
              placeholder="Subjects"
              required
            />
          </li>
          <li>
            <textarea name="user_message" placeholder="Message" required />
          </li>
        </ul>
        <input type="submit" value="SEND" className="send-button" />
      </form>
    </>
  );
};

export default Form;
