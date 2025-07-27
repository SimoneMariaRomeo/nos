import React, { useState } from 'react';
import StarRating from '../../components/StarRating';
import StepIndicator from '../../components/StepIndicator';

function Step04MotivationStep({ data, onNext, step, total }) {
  const [motivation, setMotivation] = useState(data.motivation || 0);

  return (
    <>
      <StepIndicator current={step} total={total} />
      <StarRating
        label="How motivated / how important is this goal to you?"
        value={motivation}
        onChange={setMotivation}
      />
      <button disabled={!motivation} onClick={() => onNext({ motivation })}>Next</button>
    </>
  );
}

export default Step04MotivationStep; 