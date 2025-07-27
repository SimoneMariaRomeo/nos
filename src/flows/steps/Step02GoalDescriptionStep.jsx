import React, { useState } from 'react';
import StepIndicator from '../../components/StepIndicator';

function Step02GoalDescriptionStep({ data, onNext, step, total }) {
  const [goal, setGoal] = useState(data.goal || '');

  return (
    <div
      className="welcome-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#faf8ff'
      }}
    >
      <div
        className="welcome-card"
        style={{
          width: '100%',
          maxWidth: 480,
          background: '#fff',
          borderRadius: '2rem',
          boxShadow: '0 4px 24px #b47bff22',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <StepIndicator current={step} total={total} />

        <h1 className="title-xl" style={{ fontSize: '2.3rem', marginBottom: '1.2rem' }}>
          What’s your goal?
        </h1>

        <div className="subtitle-lg" style={{ marginBottom: '2.2rem', fontWeight: 500, fontSize: '1.1rem' }}>
          Describe your goal in one line.
        </div>

        <input
          type="text"
          className="goal-input"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="E.g., Run a half-marathon"
          style={{
            width: '100%',
            maxWidth: '330px',
            fontSize: '1.2rem',
            padding: '0.85rem 1.2rem',
            borderRadius: '1.2rem',
            border: '1.5px solid #bdbdbd',
            marginBottom: '2.4rem',
            boxSizing: 'border-box'
          }}
        />

        <button
          className="cta-btn"
          disabled={goal.trim() === ''}
          style={{
            opacity: goal.trim() === '' ? 0.5 : 1,
            cursor: goal.trim() === '' ? 'not-allowed' : 'pointer'
          }}
          onClick={() => onNext({ goal })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step02GoalDescriptionStep;
