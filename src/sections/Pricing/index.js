import PropTypes from 'prop-types';
import './index.scss';
import Nav from '../../components/Nav';
import PricingItem from './PricingItem';

const Pricing = (props) => {
  Pricing.propTypes = {
    setView: PropTypes.func,
  };

  const pricingData = [
    {
      package: 'Basic',
      timeframe: 'Monthly',
      price: '$9',
      info: [
        'Very good',
        'Amazing',
        'Perfect job',
        'Love this',
        "It's so good",
        'Features',
      ],
      styles: 'red',
    },
    {
      package: 'Advanced',
      timeframe: 'Yearly',
      price: '$99',
      info: [
        'Very very good',
        'Even more amazing',
        'Perfect job',
        'Love this more',
        "It's so so good",
        'More features',
      ],
      styles: 'yellow',
    },
    {
      package: 'Pro',
      timeframe: 'Yearly',
      price: '$120',
      info: [
        'Very very good',
        'Even more amazing',
        'Perfect job',
        'Love this more',
        "It's so so good",
        'More features',
      ],
      styles: 'blue',
    },
  ];

  // Create PerkItem components
  const pricing = pricingData.map((item, index) => {
    return (
      <PricingItem
        key={index}
        package={item.package}
        timeframe={item.timeframe}
        price={item.price}
        info={item.info}
        styles={item.styles}
        setView={props.setView}
      />
    );
  });

  return (
    <div className="Pricing">
      {/* Nav Bar */}
      <Nav setView={props.setView} section="pricing" />

      {/* Main Content */}
      <main>
        {/* Section Text */}
        <div className="text">
          <h1>PRICING</h1>
          <h2>
            Test out our app today! Choose from three subscription-based payment
            models.
          </h2>
        </div>

        {/* PricingItem Components */}
        <section className="packages">{pricing}</section>
      </main>
    </div>
  );
};

export default Pricing;
