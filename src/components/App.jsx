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

import { render } from "@testing-library/react";
import { Component } from "react";
import Section from "./Section/Section";


export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state
  return good + neutral + bad
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  return Math.round(good / this.countTotalFeedback() * 100);
};

  counterOfFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));

  };
  


render() {
  return (
    <>
      <Section title='Please leave feedback'>
      </Section>
    </>
  )
};