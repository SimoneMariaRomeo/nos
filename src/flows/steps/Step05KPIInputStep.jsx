import React, { useState } from 'react';
import StepIndicator from '../../components/StepIndicator';

function Step05KPIInputStep({ data, onNext, step, total }) {
  const [kpi, setKpi] = useState(data.kpi || '');
  const [kpiFrequency, setKpiFrequency] = useState(data.kpiFrequency || 'daily');
  const [showKPIExplanation, setShowKPIExplanation] = useState(false);
  const [dailyTime, setDailyTime] = useState(data.dailyTime || '');
  const [weeklyDays, setWeeklyDays] = useState(data.weeklyDays || []);
  const [monthlyCount, setMonthlyCount] = useState(data.monthlyCount || '');

  const handleKPIClick = () => setShowKPIExplanation((prev) => !prev);

  const toggleWeekday = (day) => {
    setWeeklyDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const isValid = () => {
    if (kpi.trim() === '') return false;
    if (kpiFrequency === 'daily') return dailyTime !== '';
    if (kpiFrequency === 'weekly') return weeklyDays.length > 0;
    if (kpiFrequency === 'monthly') return monthlyCount !== '' && Number(monthlyCount) > 0;
    return false;
  };

  const getRecap = () => {
    if (!isValid()) return '';
    if (kpiFrequency === 'daily') {
      return `I commit to ${kpi} daily at ${dailyTime}`;
    }
    if (kpiFrequency === 'weekly') {
      return `I commit to ${kpi} on ${weeklyDays.join(', ')}`;
    }
    if (kpiFrequency === 'monthly') {
      const timesText = monthlyCount === '1' ? 'time' : 'times';
      return `I commit to ${kpi} ${monthlyCount} ${timesText} per month`;
    }
    return '';
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
          What’s your recurring action?
        </h1>

        <div className="subtitle-lg" style={{ marginBottom: '1.5rem', fontWeight: 500, fontSize: '1.08rem' }}>
          Set a <span
            className="kpi-highlight"
            style={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={handleKPIClick}
            title="Click for an explanation"
          >KPI</span> (Key Progress Indicator) to track your journey.
        </div>

        {showKPIExplanation && (
          <div
            className="kpi-explanation"
            style={{
              background: '#f3f0fd',
              borderRadius: '1rem',
              padding: '1rem 1.3rem',
              marginBottom: '1.4rem',
              color: '#462275',
              fontSize: '1rem',
              textAlign: 'left'
            }}
          >
            <p><strong>What are the actions that you should do in order to achieve your goal?</strong></p>
            <p>For example, if your goal is to <em>lose weight</em> you may want to set as your KPI to <strong>go to the gym three times a week</strong>.</p>
            <p><strong>We recommend choosing the most important action you’d like to do.</strong></p>
            <p>Be ambitious but realistic: <em>you should really be able to stick to your plan</em>.</p>
          </div>
        )}

        <input
          type="text"
          className="goal-input"
          value={kpi}
          onChange={(e) => setKpi(e.target.value)}
          placeholder="E.g., Miles run"
          style={{
            width: '100%',
            maxWidth: '330px',
            fontSize: '1.1rem',
            padding: '0.8rem 1.2rem',
            borderRadius: '1.1rem',
            border: '1.5px solid #bdbdbd',
            marginBottom: '1.5rem',
            boxSizing: 'border-box'
          }}
        />

        <label style={{ fontWeight: 600, color: '#462275', width: '100%', maxWidth: 340, marginBottom: '1.1rem' }}>
          Frequency:
          <select
            value={kpiFrequency}
            onChange={(e) => setKpiFrequency(e.target.value)}
            style={{
              width: '100%',
              padding: '0.7rem',
              fontSize: '1.1rem',
              borderRadius: '0.7rem',
              marginTop: '0.5rem',
              border: '1.2px solid #bdbdbd'
            }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>

        {/* Conditional sub-inputs */}
        {kpiFrequency === 'daily' && (
          <label style={{ width: '100%', maxWidth: 340, color: '#462275', marginBottom: '1.1rem' }}>
            By what time of day?
            <input
              type="time"
              value={dailyTime}
              onChange={(e) => setDailyTime(e.target.value)}
              style={{
                width: '100%',
                padding: '0.7rem',
                fontSize: '1.05rem',
                borderRadius: '0.7rem',
                marginTop: '0.5rem',
                border: '1.2px solid #bdbdbd'
              }}
            />
          </label>
        )}

        {kpiFrequency === 'weekly' && (
          <div className="weekly-days" style={{ marginBottom: '1.1rem', width: '100%', maxWidth: 340, color: '#462275' }}>
            <span style={{ fontWeight: 600 }}>Select days of the week:</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '0.4rem' }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <label key={day} className="weekday" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <input
                    type="checkbox"
                    checked={weeklyDays.includes(day)}
                    onChange={() => toggleWeekday(day)}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>
        )}

        {kpiFrequency === 'monthly' && (
          <label style={{ width: '100%', maxWidth: 340, color: '#462275', marginBottom: '1.1rem' }}>
            How many times per month?
            <input
              type="number"
              min="1"
              value={monthlyCount}
              onChange={(e) => setMonthlyCount(e.target.value)}
              style={{
                width: '100%',
                padding: '0.7rem',
                fontSize: '1.05rem',
                borderRadius: '0.7rem',
                marginTop: '0.5rem',
                border: '1.2px solid #bdbdbd'
              }}
            />
          </label>
        )}

        {/* Recap box */}
        {isValid() && (
          <div className="kpi-recap" style={{
            background: '#f3f0fd',
            color: '#1976d2',
            padding: '0.7rem 1.2rem',
            borderRadius: '0.8rem',
            fontWeight: 600,
            fontSize: '1.1rem',
            margin: '1.4rem 0'
          }}>
            {getRecap()}
          </div>
        )}

        <button
          className="cta-btn"
          disabled={!isValid()}
          style={{
            opacity: !isValid() ? 0.5 : 1,
            cursor: !isValid() ? 'not-allowed' : 'pointer',
            marginTop: '0.8rem'
          }}
          onClick={() =>
            onNext({
              kpi,
              kpiFrequency,
              dailyTime,
              weeklyDays,
              monthlyCount,
            })
          }
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Step05KPIInputStep;
