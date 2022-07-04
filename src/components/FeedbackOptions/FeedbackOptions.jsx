import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackStyled, FeedbackItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<FeedbackStyled>
        {options.map(option => (<FeedbackItem  key={option}>
            <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </FeedbackItem>))}
    </FeedbackStyled>)
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;