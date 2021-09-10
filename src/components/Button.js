import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
  };
  return (
    <div
      className={`Button ${props.styles}`}
      onClick={props.onClick ? () => props.onClick() : null}
      onMouseOver={props.onMouseOver ? () => props.onMouseOver() : null}
      onMouseOut={props.onMouseOut ? () => props.onMouseOut() : null}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default Button;
