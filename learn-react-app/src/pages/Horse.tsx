// filepath: src/pages/Horse.tsx
import React from 'react';

function Horse() {
  return (
    <div>
      <h2>Horse</h2>
      <p>
        Horses (Equus caballus) are large domesticated mammals that have been bred for various purposes
        including transportation, agriculture, warfare, and sport. They've played a significant role in
        human civilization throughout history.
      </p>      <p>
        Known for their strength, speed, and intelligence, horses come in various breeds specialized for
        different purposes, from racing and show jumping to farm work and companionship.
      </p>      <img 
        src="/images/horse.jpeg" 
        alt="Horse" 
        style={{
          width: '100%',
          maxWidth: '400px',
          height: 'auto',
          margin: '20px auto',
          display: 'block',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
}

export default Horse;
