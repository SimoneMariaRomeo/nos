import React, { useState } from 'react';
import StepIndicator from '../../components/StepIndicator';

function Step06GenieQuestionStep({ data, onNext, step, total }) {
  const [refuseAmount, setRefuseAmount] = useState(data.refuseAmount || '');

  // Money options in euros
  const moneyOptions = [
    { value: '10', label: '€10' },
    { value: '25', label: '€25' },
    { value: '50', label: '€50' },
    { value: '100', label: '€100' },
    { value: '250', label: '€250' },
    { value: '500', label: '€500' },
    { value: '1000', label: '€1,000' },
    { value: '2500', label: '€2,500' },
    { value: '5000', label: '€5,000' },
    { value: '10000', label: '€10,000' },
    { value: '25000', label: '€25,000' },
    { value: '50000', label: '€50,000' },
    { value: '100000', label: '€100,000' },
    { value: '250000', label: '€250,000' },
    { value: '500000', label: '€500,000' },
    { value: '1000000', label: '€1,000,000' }
  ];

  const buildKPIDescription = () => {
    const { kpi, kpiFrequency, dailyTime, weeklyDays, monthlyCount } = data;
    if (!kpi) return '';
    if (kpiFrequency === 'daily') return `${kpi} daily at ${dailyTime || 'a chosen time'}`;
    if (kpiFrequency === 'weekly') return `${kpi} on ${weeklyDays.length ? weeklyDays.join(', ') : 'selected days'}`;
    if (kpiFrequency === 'monthly') return `${kpi} ${monthlyCount || ''} ${monthlyCount === '1' ? 'time' : 'times'} per month`;
    return `${kpi}`;
  };

  const getRecap = () => {
    const kpiText = buildKPIDescription();
    if (!kpiText) return '';
    const selected = moneyOptions.find(o => o.value === refuseAmount);
    const moneyText = selected ? selected.label : '€X';
    return `${kpiText} is more important to me than winning ${moneyText}`;
  };

  return (
    <>
      <StepIndicator current={step} total={total} />
      <label>
        If a genie could grant your goal or give you money, what's the highest amount you'd refuse? (€)
        <br />
        <span className="instruction-text">Pick an amount, be ambitious</span>
        <select
          value={refuseAmount}
          onChange={(e) => setRefuseAmount(e.target.value)}
        >
          <option value="">Select an amount...</option>
          {moneyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      {/* Recap box */}
      {(
        <div className={`genie-recap ${refuseAmount ? 'confirmed' : ''}`}>{getRecap()}</div>
      )}

      <button disabled={refuseAmount === ''} onClick={() => onNext({ refuseAmount })}>Confirm</button>
    </>
  );
}

export default Step06GenieQuestionStep; 