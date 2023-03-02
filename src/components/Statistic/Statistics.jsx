import React from "react";
import PropTypes from 'prop-types';
import { FlexedList, Text } from "./Statistics.styled";
import Notification from "../Notification/Notification";

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positiveFeedback,
}) {
    return (
        <>
            {total() > 0 ? (
                <FlexedList>
                <li><Text>Good: {good}</Text></li>
                <li><Text>Neutral: { neutral }</Text></li>
                <li><Text>Bad: { bad }</Text></li>
                <li><Text>Total: {total()}</Text></li>
                <li><Text>Positive feedback: {positiveFeedback()}%</Text></li>
                </FlexedList>
            ) : (
                <Notification message="There is no feedback" />
            )}
        </>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};
