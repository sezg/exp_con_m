import PropTypes from 'prop-types';
import Button from '../../components/Button';

const PricingItem = (props) => {
  PricingItem.propTypes = {
    package: PropTypes.string,
    timeframe: PropTypes.string,
    price: PropTypes.string,
    info: PropTypes.array,
    styles: PropTypes.string,
    setView: PropTypes.func,
  };

  // Create the details list
  const details = props.info.map((item, index) => {
    return (
      <li key={index}>
        <i className="fa fa-music" />
        <h3>{item}</h3>
      </li>
    );
  });

  return (
    <div className="PricingItem">
      {/* Package Type */}
      <h2 className={'color-' + props.styles}>{props.package}</h2>

      {/* Divider */}
      <div className={`line border-${props.styles}`} />

      {/* Payment Type */}
      <h2 className={'color-' + props.styles}>{props.timeframe}</h2>

      {/* Package Price */}
      <h1 className={'color-' + props.styles}>{props.price}</h1>

      {/* Package Details */}
      <div className="list">{details}</div>

      {/* Payments Link */}
      <Button
        text={'SELECT'}
        styles={'bg-' + props.styles}
        onClick={() => props.setView('payment')}
      />
    </div>
  );
};

export default PricingItem;
