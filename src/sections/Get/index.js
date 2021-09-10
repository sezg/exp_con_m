import PropTypes from 'prop-types';
import './index.scss';
import Nav from '../../components/Nav';
import Button from '../../components/Button';

const Get = (props) => {
  Get.propTypes = {
    setView: PropTypes.func,
    view: PropTypes.string,
  };

  return (
    <div className="Get">
      {/* Nav Bar */}
      <Nav setView={props.setView} view={props.view} />

      {/* Main Content */}
      <main>
        {/* Section Text */}
        <div className="left">
          <h1>GET EXP|CON NOW</h1>
          <h2>Purchase and download the app.</h2>
        </div>

        {/* Try It Now Button */}
        <div className="right">
          <Button
            text="TRY IT NOW"
            styles="bg-rainbow xlarge"
            onClick={() => props.setView('pricing')}
          />
        </div>
      </main>

      <div />
    </div>
  );
};

export default Get;
