import PropTypes from 'prop-types';

const ReviewItem = (props) => {
  ReviewItem.propTypes = {
    rating: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
  };

  // Create star elements for the review rating including halves
  const stars = [];
  const full = Math.floor(props.rating);
  const half = props.rating - full > 0;
  for (let index = 0; index < full; index++) {
    stars.push(<i key={index} className="fa fa-star" />);
  }
  if (half) {
    stars.push(<i className="fa fa-star-half" />);
  }

  return (
    <div className="ReviewItem">
      {/* Ratings */}
      {stars}

      {/* Author */}
      <h2>{props.author.toUpperCase()}</h2>

      {/* Quote */}
      <h3>&ldquo;{props.text}&rdquo;</h3>
    </div>
  );
};

export default ReviewItem;
