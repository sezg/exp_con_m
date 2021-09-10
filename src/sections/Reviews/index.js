/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import './index.scss';
import Nav from '../../components/Nav';
import ReviewItem from './ReviewItem';
import speaker from '../../assets/spksmall.png';

const Reviews = (props) => {
  Reviews.propTypes = {
    setView: PropTypes.func,
    view: PropTypes.string,
  };

  const fillerText = "Love it, it's the best. I can't live without it!";

  const reviewData = [
    {
      rating: 5,
      author: 'Artist',
      text: fillerText,
    },
    {
      rating: 5,
      author: 'Producer',
      text: fillerText,
    },
    {
      rating: 5,
      author: 'Music Fan',
      text: fillerText,
    },
  ];

  // Create ReviewItem components
  const reviews = reviewData.map((review, index) => {
    return (
      <ReviewItem
        key={index}
        rating={review.rating}
        author={review.author}
        text={review.text}
      />
    );
  });

  return (
    <div className="Reviews">
      {/* Nav Bar */}
      <Nav
        showButton={true}
        styles="color-blue"
        setView={props.setView}
        section="info"
      />

      {/* Main Content */}
      <main>
        {/* Images */}
        <section className="left">
          <img src={speaker} />
          <img src={speaker} />
        </section>

        {/* Section Text */}
        <section className="right">
          <div className="title">
            <h1>REVIEWS</h1>
          </div>
          {/* ReviewItem Components */}
          <section className="reviews">{reviews}</section>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
