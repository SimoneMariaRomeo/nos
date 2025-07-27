import React, { useState } from 'react';
import './App.css';
import Step00WelcomeStep from './flows/steps/Step00WelcomeStep';
import Step01GoalPromptStep from './flows/steps/Step01GoalPromptStep';
import Step02GoalDescriptionStep from './flows/steps/Step02GoalDescriptionStep';
import Step03DifficultyStep from './flows/steps/Step03DifficultyStep';
import Step04MotivationStep from './flows/steps/Step04MotivationStep';
import Step05KPIInputStep from './flows/steps/Step05KPIInputStep';
import Step06GenieQuestionStep from './flows/steps/Step06GenieQuestionStep';
import Step07HowItWorksStep from './flows/steps/Step07HowItWorksStep';
import Step08FinalSuccessStep from './flows/steps/Step08FinalSuccessStep';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

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
  const [hasGoal, setHasGoal] = useState(null); // yes / no
  const [difficulty, setDifficulty] = useState(0);
  const [motivation, setMotivation] = useState(0);
  const [goal, setGoal] = useState('');
  const [kpi, setKpi] = useState('');
  const [kpiFrequency, setKpiFrequency] = useState('daily');
  const [dailyTime, setDailyTime] = useState('');
  const [weeklyDays, setWeeklyDays] = useState([]); // array of strings
  const [monthlyCount, setMonthlyCount] = useState('');
  const [refuseAmount, setRefuseAmount] = useState('');
  
  // Confetti state (lifted from WelcomeStep)
  const [celebrate, setCelebrate] = useState(false);
  const [showMotivationExit, setShowMotivationExit] = useState(false);
  const { width, height } = useWindowSize();

  // Total number of steps in the "happy path" flow (when user is ready & motivated)
  const totalSteps = 8;

  // Handlers to move forwards/backwards
  const next = () => setStep((s) => s + 1);
  const reset = () => {
    setStep(0);
    setReady(null);
    setHasGoal(null);
    setDifficulty(0);
    setMotivation(0);
    setGoal('');
    setKpi('');
    setKpiFrequency('daily');
    setDailyTime('');
    setWeeklyDays([]);
    setMonthlyCount('');
    setRefuseAmount('');
    setShowMotivationExit(false);
    setCelebrate(false);
  };

  // Early exits / alternative screens
  if (ready === 'no') {
    return (
      <main className="container">
        <h2>It's okay to take a break! 💤</h2>
        <p>Come back whenever have a goal in mind. We'll be here cheering for you!</p>
        <button onClick={reset}>Restart</button>
      </main>
    );
  }

  if (hasGoal === 'no') {
    return (
      <main className="container">
        <h2>Take your time! 🤔</h2>
        <p>It\'s important to have a clear goal in mind before we start. Come back when you have something specific you want to achieve!</p>
        <button onClick={reset}>Restart</button>
      </main>
    );
  }

  if (showMotivationExit) {
    return (
      <main className="container">
        <h2>Let's build up some motivation first! 💪</h2>
        <p>Your motivation seems lower than the difficulty you chose. Come back when you feel more motivated – you've got this!</p>
        <button onClick={reset}>Restart</button>
      </main>
    );
  }



  // Render step content
  let content;
  switch (step) {
    case 0: // Welcome
      content = (
        <Step00WelcomeStep 
          onNext={(data) => {
            setReady(data.ready);
            if (data.ready === 'yes') {
              next();
            }
          }}
        />
      );
      break;
    case 1: // Goal prompt
      content = (
        <Step01GoalPromptStep 
          onNext={(data) => {
            setHasGoal(data.hasGoal);
            if (data.hasGoal === 'yes') {
              setCelebrate(true); // Trigger confetti at App level
              // Wait 0.5 seconds before changing screen
              setTimeout(() => next(), 500);
            }
          }}
        />
      );
      break;
    case 2: // Goal description
      content = (
        <Step02GoalDescriptionStep 
          data={{ goal }}
          onNext={(data) => {
            setGoal(data.goal);
            next();
          }}
          step={2}
          total={totalSteps}
        />
      );
      break;
    case 3: // Difficulty
      content = (
        <Step03DifficultyStep 
          data={{ difficulty }}
          onNext={(data) => {
            setDifficulty(data.difficulty);
            next();
          }}
          step={3}
          total={totalSteps}
        />
      );
      break;
    case 4: // Motivation
      content = (
        <Step04MotivationStep 
          data={{ motivation }}
          onNext={(data) => {
            setMotivation(data.motivation);
            // Check if motivation is lower than difficulty
            if (data.motivation > 0 && data.motivation < difficulty) {
              setShowMotivationExit(true);
            } else {
              next();
            }
          }}
          step={4}
          total={totalSteps}
        />
      );
      break;
    case 5: // KPI input
      content = (
        <Step05KPIInputStep 
          data={{ kpi, kpiFrequency }}
          onNext={(data) => {
            setKpi(data.kpi);
            setKpiFrequency(data.kpiFrequency);
            setDailyTime(data.dailyTime || '');
            setWeeklyDays(data.weeklyDays || []);
            setMonthlyCount(data.monthlyCount || '');
            next();
          }}
          step={5}
          total={totalSteps}
        />
      );
      break;
    case 6: // Genie question
      content = (
        <Step06GenieQuestionStep 
          data={{ refuseAmount, kpi, kpiFrequency, dailyTime, weeklyDays, monthlyCount }}
          onNext={(data) => {
            setRefuseAmount(data.refuseAmount);
            next();
          }}
          step={6}
          total={totalSteps}
        />
      );
      break;
    case 7: // How it works
      content = (
        <Step07HowItWorksStep 
          data={{ kpiFrequency, kpi, refuseAmount }}
          onNext={() => next()}
          step={7}
          total={totalSteps}
        />
      );
      break;
    case 8: // Final success
      content = (
        <Step08FinalSuccessStep 
          data={{ goal }}
          onNext={reset}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <>
      {/* Confetti layer (rendered at App level so it persists across steps) */}
      {celebrate && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={250}
          recycle={false}
          // use various celebration emojis
          drawShape={(ctx) => {
            const emojis = ['🎉', '🎊', '🎈', '🎆', '🎇', '✨', '💪', '🔥', '⭐', '🏆'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            ctx.font = '20px serif';
            ctx.fillText(randomEmoji, -10, 10);
          }}
        />
      )}
      
      {content}
    </>
  );
}

export default App;
