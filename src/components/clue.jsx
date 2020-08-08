import React, { useState } from 'react';
// import AnswerField from './AnswerField';
import AnswerField from './AnswerField';
// import Hint from './hint';
import Confetti from './confetti';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ clueData, onSolved, onNextButtonClicked }) => {

  const [answers, setAnswers] = useState([]);
  const [confirmed, setConfirmed] = useState(clueData.answers ? null : true);

  useEffect(() => {
    setAnswers([]);
    setConfirmed(null);
  }, [clueData])

  const onAnswerChange = index => (value) => {
    // setAnswer(e.target.value);
    var newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  const confirmAnswers = () => {
    var correct = true;
    for (let i = 0; i < clueData.answers.length; i++) {
      if (!answers[i]) {
        // Answer missing
        correct = false;
        break;
      }
      if (clueData.answers[i].toLowerCase() !== answers[i].toLowerCase()) {
        // Answer incorrect
        correct = false;
        break;
      }
    }
    setConfirmed(correct);
    if (correct) {
      onSolved(clueData.id);
    }
  }


  const renderSubmit = () => {

    const answerSubmitted = clueData.answers && confirmed != null; // If there are answers to submit, and one has been submitted (confirmed will be true or false)
    return (
      <div className="center">
        {answerSubmitted && !confirmed && <h3>Try again!</h3>}
        {answerSubmitted && confirmed && clueData.successMessage && <ReactMarkdown source={clueData.successMessage} />}
        {!confirmed && <button onClick={confirmAnswers} className="primary mt-2">Submit</button>}
        {confirmed &&
          <button onClick={onNextButtonClicked} className="primary">Next</button>
        }
      </div>
    );
  }

  return (
    <div>
      {clueData.clue && <ReactMarkdown source={clueData.clue} />}
      {clueData.question && <ReactMarkdown source={clueData.question} />}
      <br />
      {clueData.webAnswer && (
        <div>
          {/* <Hint hint={clueData.hint} /> */}
          {clueData.answers.map((a, index) =>
            <AnswerField
              key={index}
              clueId={clueData.id}
              answer={clueData.answers[index]}
              onChange={onAnswerChange(index)}
            />
          )}
          <br />
          {renderSubmit()}
          <Confetti active={confirmed} />
          {/* <HintStateContext.Provider value={clueData.hint} /> */}
        </div>
      )}

    </div >
  )
}