import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const shortid = require('shortid');

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
          key={shortid.generate()}
          className={css.button}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;