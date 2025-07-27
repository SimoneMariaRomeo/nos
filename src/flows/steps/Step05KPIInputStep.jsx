import React, { useState } from 'react';
import StepIndicator from '../../components/StepIndicator';

function Step05KPIInputStep({ data, onNext, step, total }) {
  const [kpi, setKpi] = useState(data.kpi || '');
  const [kpiFrequency, setKpiFrequency] = useState(data.kpiFrequency || 'daily');
  const [showKPIExplanation, setShowKPIExplanation] = useState(false);
  const [dailyTime, setDailyTime] = useState(data.dailyTime || '');
  const [weeklyDays, setWeeklyDays] = useState(data.weeklyDays || []); // array of strings
  const [monthlyCount, setMonthlyCount] = useState(data.monthlyCount || '');

  const handleKPIClick = () => {
    setShowKPIExplanation(!showKPIExplanation);
  };

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
    <>
      <StepIndicator current={step} total={total} />
      <label>
        What recurring <span 
          className="kpi-highlight" 
          onClick={handleKPIClick}
          title="Click for explanation"
        >
          KPI
        </span> will you track?
        <input
          type="text"
          value={kpi}
          onChange={(e) => setKpi(e.target.value)}
          placeholder="E.g., Miles run"
        />
      </label>
      
      {showKPIExplanation && (
        <div className="kpi-explanation">
          <p>
            <strong>What are the actions that you should do in order to achieve your goal?</strong>
          </p>
          <p>
            For example, if your goal is to <em>lose weight</em> you may want to set as your KPI to <strong>go to the gym three times a week</strong>.
          </p>
          <p>
            <strong>We recommend to choose the most important action that you would like to do.</strong>
          </p>
          <p>
            Be ambitious but also realistic: <em>you should really be able to stick to your plan</em>.
          </p>
        </div>
      )}
      
      <label>
        Frequency:
        <select value={kpiFrequency} onChange={(e) => setKpiFrequency(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>

      {/* Conditional sub-inputs */}
      {kpiFrequency === 'daily' && (
        <label>
          By what time of day?
          <input type="time" value={dailyTime} onChange={(e) => setDailyTime(e.target.value)} />
        </label>
      )}

      {kpiFrequency === 'weekly' && (
        <div className="weekly-days">
          <span>Select days of the week:</span>
          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day) => (
            <label key={day} className="weekday">
              <input
                type="checkbox"
                checked={weeklyDays.includes(day)}
                onChange={() => toggleWeekday(day)}
              />
              {day}
            </label>
          ))}
        </div>
      )}

      {kpiFrequency === 'monthly' && (
        <label>
          How many times per month?
          <input
            type="number"
            min="1"
            value={monthlyCount}
            onChange={(e) => setMonthlyCount(e.target.value)}
          />
        </label>
      )}

      {/* Recap box */}
      {isValid() && (
        <div className="kpi-recap">{getRecap()}</div>
      )}

      <button disabled={!isValid()} onClick={() => onNext({ kpi, kpiFrequency, dailyTime, weeklyDays, monthlyCount })}>Confirm</button>
    </>
  );
}

export default Step05KPIInputStep; 