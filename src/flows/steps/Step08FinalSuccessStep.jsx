import React from 'react';

function Step08FinalSuccessStep({ data, onNext }) {
  const { goal } = data;

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        background: 'none'
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 900,
          color: '#462275',
          textAlign: 'center',
          letterSpacing: '-0.04em',
          margin: '0 0 0.5em 0'
        }}
      >
        You're not afraid to lose your money! 😱😱
      </h1>
      <div
        style={{
          fontSize: '1.7rem',
          fontWeight: 700,
          color: '#462275',
          textAlign: 'center',
          marginBottom: '1.2em'
        }}
      >
        You can’t connect your credit card right now.<br />
        <span style={{ color: '#1976d2' }}>
          <b>BUT YOU TOTALLY PASSED THE AMBITION TEST!</b>
        </span>
        <br /><br />
        You genuinely believe in yourself. You’re already halfway to reaching your goal: <strong>{goal}</strong>.<br />
        Keep showing up. I believe in you—you’ve got this! 💪
      </div>
      <div
        style={{
          fontSize: '1.2rem',
          color: '#666',
          textAlign: 'center',
          marginBottom: '2em',
          fontStyle: 'italic'
        }}
      >
        (Payment integration is a bit tricky, so it’s not live yet. <br />
        If you really want this feature, email me at <a href="mailto:simone.m.romeo@gmail.com" style={{ color: '#1976d2', textDecoration: 'underline' }}>simone.m.romeo@gmail.com</a>.<br />
        For now, just keep crushing your goals!)
      </div>
      <button
        onClick={() => onNext({})}
        style={{
          margin: '1rem 0 0 0',
          padding: '1rem 2.2rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          borderRadius: '1.4rem',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '0.06em',
          boxShadow: '0 4px 24px #b47bff22',
          transition: 'background 0.25s'
        }}
      >
        Start Over
      </button>
    </div>
  );
}

export default Step08FinalSuccessStep;
