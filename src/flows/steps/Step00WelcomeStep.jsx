import React from 'react';

function Step00WelcomeStep({ onNext }) {
  const handleYes = () => onNext({ ready: 'yes' });
  const handleNo = () => onNext({ ready: 'no' });

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        {/* Large, primary-coloured title */}
        <h1 className="title-xl">Welcome!</h1>

        {/* Subtitle / body text */}
        <div className="subtitle-lg">
          This is your magical genie&nbsp;🧞‍♂️&nbsp;app,
          ready to empower you to achieve your goals!
          <br /><br />
          <strong>Do you have a goal in mind?</strong>
        </div>

        {/* YES / NO buttons */}
        <div className="buttons">
          <button className="cta-btn yes" onClick={handleYes}>
            <span>YES</span>
            <span style={{ fontSize: '2rem', display: 'block' }}>💪</span>
          </button>
          <button className="cta-btn no" onClick={handleNo}>
            <span>NO</span>
            <span style={{ fontSize: '2rem', display: 'block' }}>😔</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step00WelcomeStep;
