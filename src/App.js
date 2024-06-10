import React, { useState } from "react";
import "./App.css";
import SplashScreen from "./SplashScreen";

const questions = [
  { id: 1, question: "17 rounded off to the nearest 10 is..", options: ["10", "20", "17"], answer: "20" },
  { id: 2, question: "45 rounded off to the nearest 10 is..", options: ["50", "45", "40"], answer: "50" },
  { id: 3, question: "75 rounded off to the nearest 10 is..", options: ["70", "80", "175"], answer: "80" },
  { id: 4, question: "19 rounded off to the nearest 10 is..", options: ["20", "10", "19"], answer: "20" },
  { id: 5, question: "64 rounded off to the nearest 10 is..", options: ["64", "70", "60"], answer: "60" },
  { id: 6, question: "0 rounded off to the nearest 10 is..", options: ["10", "1", "0"], answer: "0" },
  { id: 7, question: "98 rounded off to the nearest 10 is..", options: ["80", "100", "89"], answer: "100" },
  { id: 8, question: "199 rounded off to the nearest 10 is..", options: ["190", "100", "200"], answer: "200" },
  { id: 9, question: "94 rounded off to the nearest 10 is..", options: ["100", "94", "90"], answer: "100" },
  { id: 10, question: "165 rounded off to the nearest 10 is..", options: ["160", "170", "150"], answer: "170" },
  { id: 11, question: "445 rounded off to the nearest 10 is..", options: ["450", "440", "500"], answer: "450" },
  { id: 12, question: "999 rounded off to the nearest 10 is..", options: ["990", "1,000", "909"], answer: "1,000" },
];

const optionLabels = ["A", "B", "C"];

function App() {
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    const newScore = answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].answer ? 1 : 0);
    }, 0);
    setScore(newScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(""));
    setScore(null);
    setSubmitted(false);
  };

  return (
    <div className="App">
      {isSplashVisible && <SplashScreen onHide={() => setIsSplashVisible(false)} />}
      {!isSplashVisible && (
        <div className="container">
          <div className="header">
            <h2>Rounding Off to Nearest 10</h2>
            <div className="user-info">
              <label>
                Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              &nbsp;&nbsp;
              {score !== null && (
                <label>
                  Score: <input type="text" className="score" disabled value={score} />
                </label>
              )}
            </div>
            <div className="instructions">
              <h4>Circle the correct answers.</h4>
            </div>
          </div>
          <div className="questions">
            {questions.map((q, index) => (
              <div key={index} className="question">
                <p><b>({q.id}) </b>{q.question}</p>
                <ul>
                  {q.options.map((option, i) => (
                    <li key={i} className={`option ${answers[index] === option ? "selected" : ""} ${submitted ? (option === q.answer ? "correct" : answers[index] === option ? "incorrect" : "") : ""
                      }`}>
                      <label className="option-label">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          checked={answers[index] === option}
                          onChange={() => handleOptionChange(index, option)}
                          disabled={submitted}
                        />
                        <span className="custom-radio"></span>
                        <span className="option-text">{optionLabels[i]}. {option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
          </div>
          <footer>
            <p>&copy; <a href="http://www.mathinenglish.com">www.mathinenglish.com</a></p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
