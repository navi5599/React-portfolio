import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import emailjs from '@emailjs/browser';

import './contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t3aw5v8',
        'template_jzfnqbe',
        form.current,
        'zre67_jv3bjsZq2Nj'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 id="contact" className="contact_heading">
        Contact me
      </h1>
      <div className="contact_card">
        <div className="second_card">
          <h3>My contact Info</h3>
          <ul className="contact_list">
            <li>
              <span className="contact_span">Phone</span>
              <a href="tel:+491707183441">+49 170 718 3441</a>
            </li>
            <li>
              <span className="contact_span">Skype</span>
              <a href="skype:uberman5599@hotmail.com">
                uberman5599@hotmail.com
              </a>
            </li>
            <li>
              <span className="contact_span">Email</span>
              <a href="mailto:ivkelava10@gmail.com">ivkelava10@gmail.com</a>
            </li>
          </ul>
        </div>

        <form ref={form} className="first_card">
          <h3>Send me a message</h3>
          <input
            id="name"
            name="name"
            type="text"
            className="contact_input"
            placeholder="Full name"
            required
          />
          <input
            id="phone"
            name="phone"
            type="text"
            className="contact_input"
            placeholder="Phone number"
            required
          />
          <input
            id="email"
            name="email"
            type="text"
            className="contact_input"
            placeholder="Email"
            required
          />
          <textarea
            id="message"
            name="message"
            className="contact_input text"
            placeholder="Your message.."
          ></textarea>
          <button className="contact_input submit_button" onClick={sendEmail}>
            SUBMIT
          </button>
        </form>

        <div className="second_card copy ">
          <ul className="contact_list">
            <li>
              <span>Phone</span>
              <a href="tel:+491707183441">+49 170 718 3441</a>
            </li>
            <li>
              <span>Skype</span>
              <a href="skype:uberman5599@hotmail.com">
                uberman5599@hotmail.com
              </a>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:ivkelava10@gmail.com">ivkelava10@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
