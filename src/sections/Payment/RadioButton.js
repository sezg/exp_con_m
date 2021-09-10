import PropTypes from 'prop-types';

const RadioButton = (props) => {
  RadioButton.propTypes = {
    label: PropTypes.string,
    selected: PropTypes.bool,
    styles: PropTypes.string,
    onClick: PropTypes.func,
  };

  return (
    <div
      className={`RadioButton ${props.styles}`}
      onClick={() => props.onClick(props.label)}
    >
      {/* Toggler */}
      <div className={`toggle ${props.selected ? 'selected' : ''}`} />

      {/* Label */}
      <span>{props.label}</span>
    </div>
  );
};

export default RadioButton;
