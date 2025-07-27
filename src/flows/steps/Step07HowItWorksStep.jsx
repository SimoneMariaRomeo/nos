import React, { useState, useRef, useEffect } from 'react';
import StepIndicator from '../../components/StepIndicator';
import crazyGenie from '../../assets/crazy-genie.png';
import confetti from 'canvas-confetti';

function Step07HowItWorksStep({ data, onNext, step, total }) {
  const { kpiFrequency, kpi, refuseAmount, goal } = data;
  const [showNext, setShowNext] = useState(false);
  const [hover, setHover] = useState(false);
  const nextSectionRef = useRef(null);

  // Confetti rain on mount
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      confetti({
        particleCount: 6,
        startVelocity: 32,
        spread: 75,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.25 + 0.01
        },
        angle: Math.random() > 0.5 ? 60 : 120,
        shapes: ['image'],
        image: crazyGenie,
        scalar: 0.7 + Math.random() * 0.3
      });
      count++;
      if (count > 17) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  function handleAccept() {
    setShowNext(true);
    setTimeout(() => {
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 180);
  }

  const mainColor = "#462275";
  const blueBtn = "#1976d2";
  const greenBtn = "#43a047";

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#faf8ff'
      }}
    >
      <StepIndicator current={step} total={total} />

      {/* Main Section */}
      <div
        style={{
          width: '100%',
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 900,
            letterSpacing: '-0.06em',
            textAlign: 'center',
            marginBottom: '0.2em',
            marginTop: '0.4em',
            color: mainColor,
            textShadow: '0 4px 24px #caa6f8'
          }}
        >
          OMG!
        </h1>
        <div
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '0.2em',
            color: mainColor,
          }}
        >
          You're amazing!
        </div>
        {/* Genie PNG with white, glowing background */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'radial-gradient(circle, #fff 60%, #f3e9ff 100%)',
            borderRadius: 32,
            boxShadow: '0 0 32px 12px #be97fc44',
            margin: '1.2rem 0 1.5rem 0',
            padding: 24,
          }}
        >
          <img
            src={crazyGenie}
            alt="A crazy genie cheering you on"
            style={{
              maxWidth: 260,
              width: '85%',
              height: 'auto',
              display: 'block',
              background: 'none',
            }}
          />
        </div>
        {/* Centered paragraphs */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            margin: '0 auto 0.5em auto',
            color: mainColor
          }}>
            👏 First of all, hats off to you — going after <strong>{goal}</strong> is no small feat.
          </p>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            margin: '0 auto 0.5em auto',
            fontStyle: 'italic',
            color: mainColor
          }}>
            You may be wondering what happens next.
          </p>
          <p style={{
            fontSize: '1.4rem',
            fontWeight: 500,
            margin: '0 auto 0.4em auto',
            color: mainColor
          }}>
            You’ll check in <strong>{kpiFrequency}</strong> and record every time that you <strong>{kpi}</strong>.
          </p>
          <p style={{
            fontSize: '1.4rem',
            fontWeight: 500,
            margin: '0 auto 1.3em auto',
            color: mainColor
          }}>
            If you miss a check-in, nothing happens — the first time. But miss it twice, and you’ll lose <strong>${refuseAmount}</strong>.
          </p>
        </div>
        {/* Main CTA button */}
        <button
          style={{
            margin: '1.6rem 0 2.2rem 0',
            padding: '1.1rem 3.2rem',
            fontSize: '2rem',
            fontWeight: 700,
            borderRadius: '2rem',
            background: blueBtn,
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 24px #b47bff22',
            letterSpacing: '0.06em',
            transition: 'background 0.25s'
          }}
          onClick={handleAccept}
        >
          Challenge accepted
        </button>
      </div>

      {/* Reveal section */}
      <div
        ref={nextSectionRef}
        style={{
          width: '100%',
          maxWidth: 520,
          display: showNext ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '55vh',
          opacity: showNext ? 1 : 0,
          margin: '0 auto',
          paddingTop: showNext ? '4vh' : 0,
          transition: 'opacity 0.8s'
        }}
      >
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 500,
          color: mainColor,
          marginBottom: '1.4rem',
          whiteSpace: 'pre-line',
          textAlign: 'center'
        }}>
          <span style={{ fontStyle: 'italic' }}>
            In the next page, you'll connect your credit card to the app.
          </span>
          <br /><br />
          <span style={{ fontWeight: 600 }}>
            <b>
              There will be <span style={{ color: '#43a047' }}>no payment</span> as long as you check in regularly according to your self-imposed objective.
            </b>
          </span>
          <br /><br />
          <span style={{ fontStyle: 'italic' }}>
            You can stop the challenge and disconnect your card whenever you choose.
          </span>
          <br /><br />
          <span>
            <b>You are the master of your destiny.</b>
          </span>
          <br />
          <span>
            <b>Your mind is the only thing between you and achieving your goal.</b>
          </span>
          <br /><br />
          <span style={{
            fontSize: '2rem',
            fontWeight: 900,
            color: '#F44336',
            fontStyle: 'italic',
            textShadow: '0 2px 12px #FFEB3B44'
          }}>
            Be brave.<br />
            <span style={{
              fontWeight: 700,
              color: mainColor,
              fontStyle: 'normal'
            }}>Accept the challenge.</span>
          </span>
        </div>
        {/* Connect the Credit Card button with hover effect */}
        <button
          style={{
            margin: '1.6rem 0 2.2rem 0',
            padding: '1.1rem 3.2rem',
            fontSize: '2rem',
            fontWeight: 700,
            borderRadius: '2rem',
            background: hover ? greenBtn : blueBtn,
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 24px #b47bff22',
            letterSpacing: '0.06em',
            transition: 'background 0.25s'
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => onNext({})}
        >
          Connect the Credit Card
        </button>
      </div>
    </div>
  );
}

export default Step07HowItWorksStep;
