import React, { useRef } from 'react';
import Loader from 'react-loaders';
import { AnimatedLets, Toastify } from '../../components/exporter';
import './contact.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { animatedLetters, titleSetter } from '../../utils/exporter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Map from './Map';

const Contact = () => {
  const { className, arr } = animatedLetters('Contact me');
  titleSetter('Contact');

  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  // function success(pos) {
  //   const crd = pos.coords;

  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // navigator.geolocation.getCurrentPosition(success, error, options);

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
      <div className="container contact-page">
        <Toastify />
        <div className="text-zone">
          <h1>
            <AnimatedLets
              className={className}
              stringArr={arr}
              startPoint={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form action="" ref={form} onSubmit={sendEmail}>
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
                  <textarea
                    name="user_message"
                    placeholder="Message"
                    required
                  />
                </li>
              </ul>
              <input type="submit" value="SEND" className="send-button" />

              {/* <button type="submit" className="send-button">
                SEND
              </button> */}
            </form>
          </div>
        </div>
        <div className="info-map">
          Nijat Niyazov, <br />
          Azerbaijan, <br />
          Baku, <br />
          Yasamal 156, <br />
          <span>nidzhat.niyazov@gmail.com</span>
        </div>
        {/* <div className="map-wrap">
          <MapContainer center={[40.389, 49.803]} zoom={20}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.389, 49.803]}>
              <Popup>I live here, come over for a cup of coffee :) </Popup>
            </Marker>
          </MapContainer>
        </div> */}
        <div className="map-wrap">
          <Map />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
