import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = () => {
  Footer.propTypes = {
    setView: PropTypes.func,
  };

  return (
    <div className="Footer">
      <div className="contact">
        <span>
          <a href="mailto:support@experienceconcerts.co">
            <i className="fa fa-envelope" />
            support@experienceconcerts.co
          </a>
        </span>
      </div>

      <div className="copyright">
        <h2>EXP|CON</h2>
        <div>
          2019 &copy; All Rights Reserved | Speer Technologies Incorporated
        </div>
      </div>
    </div>
  );
};

export default Footer;
