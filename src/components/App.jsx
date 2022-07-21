// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export const App = () => {
const options = ['GOOD', 'NEUTRAL', 'BAD'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 


const countTotalFeedback = () => {
  return good + neutral + bad
};

const countPositiveFeedbackPercentage = () => {
  return Math.round((good / countTotalFeedback()) * 100);
};

 const counterOfFeedback = e => {
    const name = e;

    switch (name) {
      case options[0]:
        setGood(good => good + 1);
        break;

      case options[1]:
        setNeutral(neutral => neutral + 1);
        break;

      case options[2]:
        setBad(bad => bad + 1);
        break;

      default:
        throw new Error('Error');
    }
  };


  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={counterOfFeedback}> 
        </FeedbackOptions>
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}

          />) : <Notification message='There is no feedback'/>
  }  </Section>
    </>
  )
  };
