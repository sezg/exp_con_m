/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import speaker from '../../assets/spkbig.png';
import './index.scss';

const Red = (props) => {
  Red.propTypes = {
    setView: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
  };

  const [state, setState] = useState({
    playAudio: false,
  });

  const toggleAudio = () => {
    if (state.playAudio) {
      props.onPause();
      setState({ playAudio: false });
    } else {
      props.onPlay();
      setState({ playAudio: true });
    }
  };

  return (
    <div className="Red">
      {/* Nav Bar */}
      <Nav
        showButton={true}
        styles="color-red"
        setView={props.setView}
        section="info"
      />

      {/* Main Content */}
      <main>
        {/* Section Text */}
        <section className="demo-text">
          <h1>SUPERIOR SOUND</h1>
          <h2>Experience live versions of your favourite songs.</h2>
          <Button text="SEE DEMO" styles="large color-red" />
        </section>

        {/* Interactive Area */}
        <section className="demo-interactive">
          <div className="speaker">
            <img src={speaker} />
          </div>
          <div className="speaker">
            <img src={speaker} />
          </div>
          <Button
            text={'CLICK'}
            styles="circle"
            onClick={() => toggleAudio()}
          />
        </section>
      </main>
    </div>
  );
};

export default Red;
