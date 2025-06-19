import React, { useState } from 'react';
import Terminal from './components/Terminal';
import './styles/terminal.css';

function App() {
  // State to control light or dark theme
  const [theme, setTheme] = useState('dark');
  // Function to toggle theme on button click
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    // Apply light or dark mode class dynamically
    <div className={`app ${theme === 'light' ? 'light-mode' : ''}`}>
      <button
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'transparent',
          color: 'inherit',
          border: '1px solid var(--text-color)',
          padding: '5px 10px',
          cursor: 'pointer'
        }}
      >
       {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <Terminal />
    </div>
  );
}

export default App;
