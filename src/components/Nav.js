import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Nav.scss';

const Nav = (props) => {
  Nav.propTypes = {
    showButton: PropTypes.bool,
    styles: PropTypes.string,
    setView: PropTypes.func,
    section: PropTypes.string,
  };

  Nav.defaultProps = {
    showButton: false,
    styles: '',
  };

  const [state, setState] = useState({
    showMenu: false,
  });

  const toggleMenu = () => {
    setState({ showMenu: !state.showMenu });
  };

  const handleClick = (view) => {
    props.setView(view);
    toggleMenu();
  };

  return (
    <div className="Nav">
      <div className={`nav-bg-container ${state.showMenu ? '' : 'hidden'}`}>
        <div className="nav-bg"></div>
        <div className="menu">
          <div
            className={`nav-item ${props.section === 'info' ? 'active' : ''}`}
          >
            <h1 onClick={() => handleClick('main')}>WHAT IS IT</h1>
          </div>
          <div
            className={`nav-item ${props.section === 'perks' ? 'active' : ''}`}
          >
            <h1 onClick={() => handleClick('perks')}>PERKS</h1>
          </div>
          <div
            className={`nav-item ${
              props.section === 'pricing' ? 'active' : ''
            }`}
          >
            <h1 onClick={() => handleClick('pricing')}>PRICING</h1>
          </div>
        </div>
      </div>
      <section className={`nav-left ${state.showMenu ? 'active' : ''}`}>
        <i className="fa fa-bars" onClick={() => toggleMenu()} />
        <h2>EXP|CON</h2>
      </section>

      <section className="nav-right">
        {props.showButton && (
          <Button
            text="TRY IT NOW"
            styles={props.styles}
            onClick={() => handleClick('pricing')}
          />
        )}
      </section>
    </div>
  );
};

export default Nav;
