import React from 'react';
import '../App.css'; // Reuse existing styles

function StarRating({ label, value, onChange }) {
  return (
    <div className="star-rating">
      {label && <p>{label}</p>}
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= value ? 'star filled' : 'star'}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating; 