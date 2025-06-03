import { Routes, Route, Link } from 'react-router-dom'
import { HomeButton, AboutButton, Dropdown } from './components'
import Home from './pages/Home'
import About from './pages/About'
import Dog from './pages/Dog'
import Cat from './pages/Cat'
import Horse from './pages/Horse'

function App() {
  // Dropdown options
  const options = ['Dog', 'Cat', 'Horse']

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
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px',
            fontWeight: '600',
            color: 'blue',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0056b3'}
          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'blue'}
          >
            Learn React
          </h1>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <HomeButton />
          <AboutButton />
          <Dropdown options={options} />
        </div>
      </header>
      
      {/* Main content area */}
      <main style={{ padding: '40px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/animals/dog" element={<Dog />} />
          <Route path="/animals/cat" element={<Cat />} />
          <Route path="/animals/horse" element={<Horse />} />
        </Routes>
      </main>
    </div>
  )
}

export default App