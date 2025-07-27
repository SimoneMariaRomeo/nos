import React, { useState } from 'react';
import StarRating from '../../components/StarRating';
import StepIndicator from '../../components/StepIndicator';

function Step03DifficultyStep({ data, onNext, step, total }) {
  const [difficulty, setDifficulty] = useState(data.difficulty || 0);

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

        <h1 className="title-xl" style={{ fontSize: '2.1rem', marginBottom: '1.4rem' }}>
          How difficult is your goal?
        </h1>

        <div className="subtitle-lg" style={{ marginBottom: '1.4rem', fontWeight: 500, fontSize: '1.05rem' }}>
          Rate the challenge from 1 (super easy) to 5 (epic quest)
        </div>

        <StarRating
          label=""
          value={difficulty}
          onChange={setDifficulty}
        />

        <button
          className="cta-btn"
          disabled={!difficulty}
          style={{
            opacity: !difficulty ? 0.5 : 1,
            cursor: !difficulty ? 'not-allowed' : 'pointer',
            marginTop: '2.2rem'
          }}
          onClick={() => onNext({ difficulty })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step03DifficultyStep;
