import React, { useState } from 'react';
import 'animate.css';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './contact.css';

function Contact() {
  const [success, setSuccess] = useState('');
  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    //Validate form with yup
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name should be less than 20 characters')
        .required('Name is required'),
      phone: Yup.number()
        .typeError('You should use numbers!')
        .required('Phone is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string().required('Why would you send an empty message? ..'),
    }),

    onSubmit: (values, actions) => {
      console.log(values);

      //Send an email via emailjs
      emailjs
        .send(
          'service_t3aw5v8',
          'template_jzfnqbe',
          values,
          'zre67_jv3bjsZq2Nj'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess('Message has been sent. Thank you!');
            setTimeout(() => {
              setSuccess('');
            }, 3000);
            actions.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

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

        <form onSubmit={formik.handleSubmit} className="first_card">
          <h3>Send me a message</h3>
          <input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="contact_input"
            placeholder="Full name"
          />

          {formik.touched.name && formik.errors.name ? (
            <p className="error_msg">{formik.errors.name}</p>
          ) : (
            ''
          )}

          <input
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="contact_input"
            placeholder="Phone number"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="error_msg">{formik.errors.phone}</p>
          ) : (
            ''
          )}

          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="contact_input"
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error_msg">{formik.errors.email}</p>
          ) : (
            ''
          )}

          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="contact_input text"
            placeholder="Your message.."
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="error_msg">{formik.errors.message}</p>
          ) : (
            ''
          )}

          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="contact_input submit_button"
          >
            SEND
          </button>
          <p className="success_message">{success}</p>
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
