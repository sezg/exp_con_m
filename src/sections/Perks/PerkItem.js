import PropTypes from 'prop-types';

const PerkItem = (props) => {
  PerkItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    styles: PropTypes.string,
  };

  return (
    <div className="PerkItem">
      {/* Divider */}
      <div className={`line ${props.styles}`} />

      {/* Title */}
      <h2 className={props.styles}>{props.title}</h2>

      {/* Text */}
      <h3>{props.text}</h3>
    </div>
  );
};

export default PerkItem;
