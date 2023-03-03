import Loader from 'react-loaders';
import { AnimatedLets } from '../../components/exporter';
import { animatedLetters, titleSetter } from '../../utils/exporter';
import LeafMap from './Map/LeafMap';
import Form from './Form/Form';

const Contact = () => {
  const { className, arr } = animatedLetters('Contact me');
  titleSetter('Contact');

  return (
    <>
      <div className="container contact-page">
        <section className="text-zone">
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
            <Form />
          </section>
        </section>
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
