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
    <div
      className="welcome-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#faf8ff'
      }}
    >
      <div
        className="welcome-card"
        style={{
          width: '100%',
          maxWidth: 520,
          background: '#fff',
          borderRadius: '2rem',
          boxShadow: '0 4px 24px #b47bff22',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <StepIndicator current={step} total={total} />

        <h1 className="title-xl" style={{ fontSize: '2rem', marginBottom: '1.2rem' }}>
          What would you risk for your dream?
        </h1>

        <div className="subtitle-lg" style={{ marginBottom: '1.5rem', fontWeight: 500, fontSize: '1.09rem' }}>
          If a genie could grant your goal or give you money,<br />
          what's the <strong>biggest amount you'd refuse?</strong>
        </div>

        <label
          style={{
            fontWeight: 600,
            color: '#462275',
            width: '100%',
            maxWidth: 340,
            marginBottom: '1.1rem'
          }}
        >
          <span style={{ fontSize: '1.06rem', display: 'block', marginBottom: '0.4rem' }}>
            Choose your “no pain, no gain” number:
          </span>
          <select
            value={refuseAmount}
            onChange={(e) => setRefuseAmount(e.target.value)}
            style={{
              width: '100%',
              padding: '0.8rem',
              fontSize: '1.1rem',
              borderRadius: '1rem',
              border: '1.2px solid #bdbdbd',
              marginBottom: '1.3rem'
            }}
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
        <div
          className={`genie-recap ${refuseAmount ? 'confirmed' : ''}`}
          style={{
            background: '#f3f0fd',
            color: '#1976d2',
            padding: '0.7rem 1.2rem',
            borderRadius: '0.8rem',
            fontWeight: 600,
            fontSize: '1.1rem',
            margin: '1.1rem 0 2rem 0',
            minHeight: 32,
            textAlign: 'center',
            opacity: refuseAmount ? 1 : 0.55
          }}
        >
          {getRecap()}
        </div>

        <button
          className="cta-btn"
          disabled={refuseAmount === ''}
          style={{
            opacity: refuseAmount === '' ? 0.5 : 1,
            cursor: refuseAmount === '' ? 'not-allowed' : 'pointer'
          }}
          onClick={() => onNext({ refuseAmount })}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Step06GenieQuestionStep;
