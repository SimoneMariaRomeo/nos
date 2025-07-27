import React from 'react';

function Step01GoalPromptStep({ onNext }) {
  const handleYes = () => {
    onNext({ hasGoal: 'yes' });
  };

  const handleNo = () => {
    onNext({ hasGoal: 'no' });
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        {/* Big, themed title */}
        <h1 className="title-xl">Are you ready to put in effort?</h1>

        {/* Motivational subtitle */}
        <div className="subtitle-lg" style={{ marginBottom: '2rem' }}>
          Being the best version of yourself is not easy.<br />
          Only through effort will you achieve your goals.
        </div>

        {/* Genie mascot section */}
        <div className="genie-section" style={{ textAlign: 'center' }}>
          <div
            className="genie-instruction"
            style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: 'var(--primary)',
              marginBottom: '0.7em'
            }}
          >
            Click on the genie when you’re ready to put in effort!
          </div>
          <img
            src="/genie-poster.png"
            alt="Muscular genie with 'NO PAIN, NO GAIN' motto"
            className="genie-image"
            style={{
              width: '230px',
              maxWidth: '85%',
              margin: '0 auto',
              cursor: 'pointer',
              display: 'block',
              borderRadius: '1.2rem',
              boxShadow: '0 4px 24px #b47bff22',
              transition: 'box-shadow 0.25s'
            }}
            onClick={handleYes}
          />
        </div>

        {/* Optional NO button for accessibility */}
        <div style={{ marginTop: '2.5rem' }}>
          <button className="cta-btn no" onClick={handleNo}>
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step01GoalPromptStep;
