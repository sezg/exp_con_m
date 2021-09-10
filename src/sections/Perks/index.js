import PropTypes from 'prop-types';
import './index.scss';
import Nav from '../../components/Nav';
import PerkItem from './PerkItem';

const Perks = (props) => {
  Perks.propTypes = {
    setView: PropTypes.func,
  };

  const fillerText =
    'No commitment, cancel anytime. Never worry about forgetting a payment again!';

  const perksData = [
    {
      title: 'Subscription Payment Model',
      text: fillerText,
      styles: 'color-red',
    },
    {
      title: 'No Fee Cancelation Policy',
      text: fillerText,
      styles: 'color-blue',
    },
    {
      title: 'Subscription Payment Model',
      text: fillerText,
      styles: 'color-yellow',
    },
  ];

  // Create PerkItem components
  const perks = perksData.map((perk, index) => {
    return (
      <PerkItem
        key={index}
        title={perk.title}
        text={perk.text}
        styles={perk.styles}
      />
    );
  });

  return (
    <div className="Perks">
      {/* Nav Bar */}
      <Nav
        showButton={true}
        styles="bg-rainbow"
        setView={props.setView}
        section="perks"
      />

      {/* Main Content */}
      <main>
        {/* Section Text */}
        <div className="title">
          <h1>PERKS</h1>
        </div>

        {/* PerkItem Components */}
        <section className="perks">{perks}</section>
      </main>
    </div>
  );
};

export default Perks;
