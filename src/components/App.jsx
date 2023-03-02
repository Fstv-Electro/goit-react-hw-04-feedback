import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistic/Statistics';
import Section from './Section/Section';
import Notification from "./Notification/Notification";

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedback = e => {
    const name = e.currentTarget.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback) {
      return Math.round((good / countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onFeedback} />{' '}
        </Section>
        <Section>
          {total ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positive}
          />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    );
};