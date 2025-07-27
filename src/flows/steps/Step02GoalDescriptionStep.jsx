import React, { useState } from 'react';
import StepIndicator from '../../components/StepIndicator';

function Step02GoalDescriptionStep({ data, onNext, step, total }) {
  const [goal, setGoal] = useState(data.goal || '');

  return (
    <>
      <StepIndicator current={step} total={total} />
      <label>
        Describe your goal in one line:
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="E.g., Run a half-marathon"
        />
      </label>
      <button disabled={goal.trim() === ''} onClick={() => onNext({ goal })}>Next</button>
    </>
  );
}

export default Step02GoalDescriptionStep; 