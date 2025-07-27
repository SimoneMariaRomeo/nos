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
        <h2>Are you ready to put in effort?</h2>
        
        <p>Being the best version of yourself is not easy. Only with efforts you'll achieve their goal.</p>
        
        <div className="genie-section">
          <p className="genie-instruction">Click on the genie when you're ready to put in effort!</p>
          <img 
            src="/genie-poster.png" 
            alt="Muscular genie with 'NO PAIN, NO GAIN' motto" 
            className="genie-image"
            onClick={handleYes}
          />
        </div>
      </div>
    </div>
  );
}

export default Step01GoalPromptStep; 