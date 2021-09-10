import PropTypes from 'prop-types';

const InputField = (props) => {
  InputField.propTypes = {
    label: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    dropdown: PropTypes.bool,
    options: PropTypes.array,
    styles: PropTypes.string,
  };

  InputField.defaultProps = {
    dropdown: false,
    options: [],
  };

  // Dropdown options
  let options;
  if (props.options) {
    options = props.options.map((opt) => {
      return (
        <option key={opt} value={opt}>
          {opt}
        </option>
      );
    });
  }

  return (
    <div className={`InputField ${props.styles}`}>
      {/* Field Label */}
      <div className="label">{props.label}</div>

      {/* Select Field */}
      {!props.dropdown && (
        <input
          value={props.value}
          onChange={(event) => props.onChange(props.field, event.target.value)}
        />
      )}

      {/* Input Field */}
      {props.dropdown && (
        <select
          value={props.value}
          onChange={(event) => props.onChange(props.field, event.target.value)}
        >
          {options}
        </select>
      )}
    </div>
  );
};

export default InputField;
