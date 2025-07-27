import React, { useState } from 'react';
import StarRating from '../../components/StarRating';
import StepIndicator from '../../components/StepIndicator';

function Step03DifficultyStep({ data, onNext, step, total }) {
  const [difficulty, setDifficulty] = useState(data.difficulty || 0);

  return (
    <>
      <StepIndicator current={step} total={total} />
      <StarRating
        label="How difficult do you think this goal is?"
        value={difficulty}
        onChange={setDifficulty}
      />
      <button disabled={!difficulty} onClick={() => onNext({ difficulty })}>Next</button>
    </>
  );
}

export default Step03DifficultyStep; 