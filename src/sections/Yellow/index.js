import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import './index.scss';

const Yellow = (props) => {
  Yellow.propTypes = {
    setView: PropTypes.func,
  };

  const [state, setState] = useState({
    showImage1: false,
  });

  const showImage = (image, hide = false) => {
    const key = 'showImage' + image;
    setState({ ...state, [key]: !hide });
  };

  return (
    <div className="Yellow">
      {/* Nav Bar */}
      <Nav
        showButton={true}
        styles="color-yellow"
        setView={props.setView}
        section="info"
      />

      {/* Main Content */}
      <main>
        {/* Interactive Area */}
        <section className="demo-interactive">
          <div className={`reveal1 ${state.showImage1 ? 'invert' : ''}`}>
            <Button
              text="REVEAL"
              styles="circle"
              onMouseOver={() => showImage(1)}
              onMouseOut={() => showImage(1, true)}
            />
            <div className={`cover1 ${state.showImage1 ? 'show' : ''}`} />
          </div>

          <div className="circle1" />
        </section>

        {/* Section Text */}
        <section className="demo-text">
          <h1>FRONT ROW SEATS</h1>
          <h2>Experience concerts up close and personal.</h2>
          <Button text="SEE DEMO" styles="large color-yellow" />
        </section>
      </main>
    </div>
  );
};

export default Yellow;
