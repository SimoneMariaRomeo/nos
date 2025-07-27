import React, { useState } from 'react';
import StarRating from '../../components/StarRating';
import StepIndicator from '../../components/StepIndicator';

function Step04MotivationStep({ data, onNext, step, total }) {
  const [motivation, setMotivation] = useState(data.motivation || 0);

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
          How motivated are you?
        </h1>

        <div className="subtitle-lg" style={{ marginBottom: '1.4rem', fontWeight: 500, fontSize: '1.08rem' }}>
          How important is this goal to you?<br />
          (1 = I don't care much, 5 = My heart’s on fire)
        </div>

        <StarRating
          label=""
          value={motivation}
          onChange={setMotivation}
        />

        <button
          className="cta-btn"
          disabled={!motivation}
          style={{
            opacity: !motivation ? 0.5 : 1,
            cursor: !motivation ? 'not-allowed' : 'pointer',
            marginTop: '2.2rem'
          }}
          onClick={() => onNext({ motivation })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step04MotivationStep;
