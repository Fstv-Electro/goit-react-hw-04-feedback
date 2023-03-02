import React from "react";
import PropTypes from 'prop-types';
import { FlexedList, Text } from "./Statistics.styled";


const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positiveFeedback,
}) => {
    return (
        <>
            <FlexedList>
            <li><Text>Good: {good}</Text></li>
            <li><Text>Neutral: { neutral }</Text></li>
            <li><Text>Bad: { bad }</Text></li>
            <li><Text>Total: {total}</Text></li>
            <li><Text>Positive feedback: {positiveFeedback}%</Text></li>
            </FlexedList>
        </>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;