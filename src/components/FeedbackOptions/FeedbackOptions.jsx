import React from 'react';
import PropTypes from 'prop-types';
import { FlexedBtn, Button, Div } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <Div>
            <FlexedBtn>
                {options.map(option => (
                    <li key={option}>
                        <Button type="button" name={option} onClick={onLeaveFeedback}>
                            {option}
                        </Button>
                    </li>
                ))}
            </FlexedBtn>
        </Div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};