import React, { useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import { AnimatedLets, Toastify } from '../../components/exporter';
import { toast } from 'react-toastify';
import './contact.scss';
import emailjs from '@emailjs/browser';
import { animatedLetters, titleSetter } from '../../utils/exporter';
import LeafMap from './LeafMap';

const info =
  "Our restaurant has been serving delicious dishes and desserts since 1990. Since its opening, our restaurant has been known for its mouth-watering food, warm atmosphere and friendly staff. In the beginning, our menu featured a variety of traditional dishes, but over the years, as tastes and trends have changed, we have adapted our menu to include more contemporary options. Despite these changes, we have always remained true to our roots, and our famous dishes from the 90s are still a staple on our menu. Our restaurant quickly gained a reputation for serving some of the best food in the area, and it wasn't long before we were attracting food critics and culinary enthusiasts from all over the city. But it wasn't just our savory dishes that drew people in; our desserts were also a huge hit. We have always had a passion for pastry and have spent years perfecting our recipes for cakes, pies, and other sweet treats. It's this dedication that has earned us the reputation of having the best desserts in town. As the years have gone by, we have seen many changes in the restaurant industry, but one thing has remained constant: our commitment to quality. Today, our restaurant is still a favorite among locals and visitors alike, and we look forward to many more years of serving delicious food and memories to our customers. We are proud to have been a part of the community for over three decades and look forward to serving for many more to come.";

const Contact = () => {
  const { className, arr } = animatedLetters('Contact me');
  titleSetter('Contact');

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
      {/* <TutMap /> */}
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
          <section className="contact-form">
            {/* <p>
              {info.split('.').map((sentence, dot) => {
                if ((dot + 1) % 3 === 0) {
                  return (
                    <span key={dot}>
                      {sentence}.
                      <br />
                      <br />
                    </span>
                  );
                }
                return <span key={dot}>{sentence}.</span>;
              })}
            </p> */}
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
            </form>
          </section>
        </div>
        <section className="map-section">
          <div className="info-map">
            Nijat Niyazov, <br />
            Azerbaijan, <br />
            Baku, <br />
            Yasamal 156, <br />
            <span>nidzhat.niyazov@gmail.com</span>
          </div>
          <div className="map-wrap">
            <LeafMap />
          </div>
        </section>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;

// export const contacLoaders = async () => {

// };
