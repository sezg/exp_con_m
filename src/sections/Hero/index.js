import PropTypes from 'prop-types';
import './index.scss';
import Button from '../../components/Button';
import Nav from '../../components/Nav';

const images = {
  1: 'https://i.imgur.com/tCVoxEa.jpg',
  2: 'https://i.imgur.com/ZgasQhN.jpg',
  3: 'https://i.imgur.com/6HKIoTL.jpg',
};

const Hero = (props) => {
  Hero.propTypes = {
    imageID: PropTypes.number,
    onClick: PropTypes.func,
    setView: PropTypes.func,
    view: PropTypes.string,
  };

  return (
    <div
      className="Hero"
      style={{ backgroundImage: `url(${images[props.imageID]})` }}
    >
      {/* Nav Bar */}
      <Nav setView={props.setView} section="info" />

      {/* Main Content */}
      <main>
        {/* Section Text */}
        <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
        <h3>
          Experience your favourite artists like never before and from the
          comfort of your own home.
        </h3>
        <Button
          text="TRY IT NOW"
          styles="bg-rainbow large"
          onClick={() => props.setView('pricing')}
        />
      </main>

      {/* Slideshow Controls */}
      <div className="controls">
        <div
          className={`control-button ${props.imageID === 1 ? 'selected' : ''}`}
          onClick={() => props.onClick(1)}
        />
        <div
          className={`control-button ${props.imageID === 2 ? 'selected' : ''}`}
          onClick={() => props.onClick(2)}
        />
        <div
          className={`control-button ${props.imageID === 3 ? 'selected' : ''}`}
          onClick={() => props.onClick(3)}
        />
      </div>
    </div>
  );
};

export default Hero;
