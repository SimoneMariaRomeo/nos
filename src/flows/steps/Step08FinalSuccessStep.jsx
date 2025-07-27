import React from 'react';

function Step08FinalSuccessStep({ data, onNext }) {
  const { goal } = data;

  return (
    <>
      <h2>🎉 You're all set!</h2>
      <p>We believe in you! Good luck on achieving your goal: "{goal}"</p>
      <p>(Payment integration coming soon. For now, just keep crushing it!)</p>
      <button onClick={() => onNext({})}>Start Over</button>
    </>
  );
}

export default Step08FinalSuccessStep; 