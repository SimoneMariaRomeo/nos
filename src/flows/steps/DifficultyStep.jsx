import React, { useState } from 'react';
import StarRating from '../../components/StarRating';
import StepIndicator from '../../components/StepIndicator';

function DifficultyStep({ data, onNext, step, total }) {
  const [difficulty, setDifficulty] = useState(data.difficulty || 0);

  return (
    <>
      <StepIndicator current={step} total={total} />
      <StarRating
        label="How difficult is your goal?"
        value={difficulty}
        onChange={setDifficulty}
      />
      <button disabled={!difficulty} onClick={() => onNext({ difficulty })}>Next</button>
    </>
  );
}

export default DifficultyStep; 