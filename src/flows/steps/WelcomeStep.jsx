import React from 'react';

function WelcomeStep({ onNext }) {
  return (
    <>
      <h2>Welcome!</h2>
      <p>Are you ready to put in effort?</p>
      <div className="buttons">
        <button onClick={() => onNext({ ready: 'yes' })}>Yes</button>
        <button onClick={() => onNext({ ready: 'no' })}>No</button>
      </div>
    </>
  );
}

export default WelcomeStep; 