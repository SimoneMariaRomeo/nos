import React from 'react';

function WelcomeStep({ onNext }) {
  const handleYes = () => {
    // move on immediately since confetti is handled at App level
    onNext({ ready: 'yes' });
  };

  const handleNo = () => onNext({ ready: 'no' });

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h2>Welcome!</h2>
                <p>This is your magical genie🧞‍♂️app, ready to empower you achieve your goals!<br /><br />
           Do you have a goal in mind?
         </p>
        <p>
           
        </p>

        <div className="buttons">
          <button className="yes" onClick={handleYes}>
            <div className="button-text">YES</div>
            <div className="button-emoji">💪</div>
          </button>
          <button className="no" onClick={handleNo}>
            <div className="button-text">NO</div>
            <div className="button-emoji">😔</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeStep;
