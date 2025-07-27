import React from 'react';

function StepIndicator({ current, total }) {
  return (
    <p className="step-indicator">Step {current} of {total}</p>
  );
}

export default StepIndicator; 