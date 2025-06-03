
function About() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#e9f5ff', 
        borderRadius: '6px',
        borderLeft: '4px solid #4dabf7'
      }}>
        <h3 style={{ color: '#1971c2', marginTop: 0 }}>Fun Fact About React</h3>
        <p style={{ color: '#495057', lineHeight: 1.6 }}>
          React was first deployed on Facebook's News Feed in 2011, but it wasn't released as an open-source project until May 2013 
          at JSConf US. Initially, many developers criticized React's approach, but it eventually became one of the most popular 
          JavaScript libraries in the world. The original project was called "FaxJS" before it was renamed to React!
        </p>
      </div>
    </div>
  );
}

export default About;
