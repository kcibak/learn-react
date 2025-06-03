import { HomeButton, AboutButton, Dropdown } from './components'

function App() {
  // Dropdown options
  const options = ['Profile', 'Settings', 'Logout']
  const optionColors = {
    Profile: 'blue',
    Settings: 'green',
    Logout: 'red'
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'blue',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 30px',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #e9ecef',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <h1 style={{ 
          margin: 0, 
          fontSize: '24px',
          fontWeight: '600',
          color: 'blue'
        }}>
          Learn React
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <HomeButton />
          <AboutButton />
          <Dropdown options={options} optionColors={optionColors} />
        </div>
      </header>
      
      {/* Main content area */}
      <main style={{ padding: '40px', flex: 1 }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px'
        }}>
          <h2 style={{ color: '#212529' }}>Welcome to React!!!</h2>
          <p style={{ color: '#6c757d', lineHeight: 1.6 }}>
            This is a simple layout to help you practice React concepts. 
            Feel free to modify and expand on it as you learn.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App