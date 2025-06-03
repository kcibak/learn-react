// filepath: src/pages/Dog.tsx

function Dog() {
  return (
    <div>
      <h2>Dog</h2>
      <p>
        Dogs (Canis familiaris) are domesticated mammals and one of the most popular household pets.
        Known for their loyalty, companionship, and versatile roles in human society, dogs have been
        bred in numerous varieties.
      </p>      <p>
        Dogs serve in various roles including service animals, emotional support, search and rescue,
        law enforcement, and simple companionship.
      </p>      <img 
        src="/images/dog.jpeg" 
        alt="Dog" 
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

export default Dog;
