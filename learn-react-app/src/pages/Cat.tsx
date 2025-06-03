// filepath: src/pages/Cat.tsx
import React from 'react';

function Cat() {
  return (
    <div>
      <h2>Cat</h2>
      <p>
        Cats (Felis catus) are small carnivorous mammals known for their independent nature,
        agility, and hunting skills. They have been domesticated for thousands of years and are
        popular household pets around the world.
      </p>      <p>
        Known for their purring, meowing, and playful behavior, cats come in a wide variety of breeds,
        each with distinctive characteristics and temperaments.
      </p>      <img 
        src="/images/cat.jpeg" 
        alt="Cat" 
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

export default Cat;
