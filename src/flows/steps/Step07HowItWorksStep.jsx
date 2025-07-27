import React from 'react';
import StepIndicator from '../../components/StepIndicator';

function Step07HowItWorksStep({ data, onNext, step, total }) {
  const { kpiFrequency, kpi, refuseAmount, goal } = data;

  return (
    <>
      <StepIndicator current={step} total={total} />
      <h3>OMG! You're amazing!</h3>
      <p>👏 First of all, hats off to you — going after <strong>{goal}</strong> is no small feat.</p>
      <p>You may be wondering what happens next.</p>
      <p>You’ll check in <strong>{kpiFrequency}</strong> and record every time that you <strong>{kpi}</strong>.</p>
      <p>If you miss a check-in, nothing happens — the first time. But miss it twice, and you’ll lose <strong>${refuseAmount}</strong>.</p>
      <p>In the next page, you'll connect your credit card to the app. There will be no payment as long as you check in regularly according to your self-imposed objective.</p>
      <p>You can stop the challenge and disconnect your card whenever you choose. You are the master of your destiny. Your mind is the only thing between you and achieving your goal.</p>
      <p><strong>Be brave. Accept the challenge.</strong></p>
      <button onClick={() => onNext({})}>Challenge accepted</button>
    </>
  );
}

export default Step07HowItWorksStep;
