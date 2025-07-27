import React, { useState } from 'react';
import './App.css';

// Star rating input component
function StarRating({ label, value, onChange }) {
  return (
    <div className="star-rating">
      <p>{label}</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= value ? 'star filled' : 'star'}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// Simple step indicator component
function StepIndicator({ current, total }) {
  return (
    <p className="step-indicator">Step {current} of {total}</p>
  );
}

function App() {
  // Flow state
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(null); // yes / no
  const [difficulty, setDifficulty] = useState(0);
  const [motivation, setMotivation] = useState(0);
  const [goal, setGoal] = useState('');
  const [kpi, setKpi] = useState('');
  const [kpiFrequency, setKpiFrequency] = useState('daily');
  const [refuseAmount, setRefuseAmount] = useState('');

  // Total number of steps in the "happy path" flow (when user is ready & motivated)
  const totalSteps = 7;

  // Handlers to move forwards/backwards
  const next = () => setStep((s) => s + 1);
  const reset = () => {
    setStep(0);
    setReady(null);
    setDifficulty(0);
    setMotivation(0);
    setGoal('');
    setKpi('');
    setKpiFrequency('daily');
    setRefuseAmount('');
  };

  // Early exits / alternative screens
  if (ready === 'no') {
    return (
      <main className="container">
        <h2>It\'s okay to take a break! 💤</h2>
        <p>Come back whenever you feel ready to put in the effort. We\'ll be here cheering for you!</p>
        <button onClick={reset}>Restart</button>
      </main>
    );
  }

  if (step === 2 && motivation > 0 && motivation < difficulty) {
    return (
      <main className="container">
        <h2>Let\'s build up some motivation first! 💪</h2>
        <p>Your motivation seems lower than the difficulty you chose. Come back when you feel more motivated – you\'ve got this!</p>
        <button onClick={reset}>Restart</button>
      </main>
    );
  }

  // Render step content
  let content;
  switch (step) {
    case 0: // Welcome
      content = (
        <>
          <h2>Welcome!</h2>
          <p>Are you ready to put in effort?</p>
          <div className="buttons">
            <button onClick={() => { setReady('yes'); next(); }}>Yes</button>
            <button onClick={() => setReady('no')}>No</button>
          </div>
        </>
      );
      break;
    case 1: // Difficulty
      content = (
        <>
          <StepIndicator current={1} total={totalSteps} />
          <StarRating
            label="How difficult is your goal?"
            value={difficulty}
            onChange={(val) => setDifficulty(val)}
          />
          <button disabled={!difficulty} onClick={next}>Next</button>
        </>
      );
      break;
    case 2: // Motivation
      content = (
        <>
          <StepIndicator current={2} total={totalSteps} />
          <StarRating
            label="How motivated / how important is this goal to you?"
            value={motivation}
            onChange={(val) => setMotivation(val)}
          />
          <button disabled={!motivation} onClick={next}>Next</button>
        </>
      );
      break;
    case 3: // Goal prompt
      content = (
        <>
          <StepIndicator current={3} total={totalSteps} />
          <label>
            Describe your goal in one line:
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="E.g., Run a half-marathon"
            />
          </label>
          <button disabled={goal.trim() === ''} onClick={next}>Next</button>
        </>
      );
      break;
    case 4: // KPI prompt
      content = (
        <>
          <StepIndicator current={4} total={totalSteps} />
          <label>
            What recurring KPI will you track?
            <input
              type="text"
              value={kpi}
              onChange={(e) => setKpi(e.target.value)}
              placeholder="E.g., Miles run"
            />
          </label>
          <label>
            Frequency:
            <select value={kpiFrequency} onChange={(e) => setKpiFrequency(e.target.value)}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </label>
          <button disabled={kpi.trim() === ''} onClick={next}>Next</button>
        </>
      );
      break;
    case 5: // Genie question
      content = (
        <>
          <StepIndicator current={5} total={totalSteps} />
          <label>
            If a genie could grant your goal or give you money, what\'s the highest amount you\'d refuse? (USD)
            <input
              type="number"
              min="0"
              value={refuseAmount}
              onChange={(e) => setRefuseAmount(e.target.value)}
            />
          </label>
          <button disabled={refuseAmount === ''} onClick={next}>Next</button>
        </>
      );
      break;
    case 6: // Rules
      content = (
        <>
          <StepIndicator current={6} total={totalSteps} />
          <h3>How it works</h3>
          <ul>
            <li>You\'ll check in {kpiFrequency} and mark your KPI "{kpi}".</li>
            <li>If you miss a check-in, you \u201close\u201d ${refuseAmount} (no actual payment in this MVP).</li>
            <li>Stay consistent to keep your money and reach your goal!</li>
          </ul>
          <button onClick={next}>Sounds good</button>
        </>
      );
      break;
    case 7: // Connect card / final
      content = (
        <>
          <h2>🎉 You\'re all set!</h2>
          <p>We believe in you! Good luck on achieving your goal: "{goal}"</p>
          <p>(Payment integration coming soon. For now, just keep crushing it!)</p>
          <button onClick={reset}>Start Over</button>
        </>
      );
      break;
    default:
      content = null;
  }

  return (
    <main className="container">
      {content}
    </main>
  );
}

export default App;
