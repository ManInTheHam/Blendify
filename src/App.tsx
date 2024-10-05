import React, { useState } from 'react';
import './App.css';
import icon from './chamer.png'; // Make sure to import your icon image

const App: React.FC = () => {
  const [gradient, setGradient] = useState({ start: '#ffffff', end: '#ffffff' });

  const applyGradient = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab.id) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          args: [gradient.start, gradient.end],
          func: (start, end) => {
            document.body.style.background = `linear-gradient(${start}, ${end})`;
          }
        });
      } else {
        console.error('Tab ID is undefined');
      }
    });
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src={icon} className="logo" alt="App logo" />
      </div>
      <h1 className="neon-text">Blendify</h1>
      <div className="gradient-inputs">
        <input
          type="color"
          value={gradient.start}
          onChange={(e) => setGradient({ ...gradient, start: e.target.value })}
          aria-label="Select gradient start color"
          title="Select gradient start color"
        />
        <input
          type="color"
          value={gradient.end}
          onChange={(e) => setGradient({ ...gradient, end: e.target.value })}
          aria-label="Select gradient end color"
          title="Select gradient end color"
        />
        <button onClick={applyGradient} title="Apply gradient background">Apply Gradient</button>
      </div>
      <footer>
        <p>Created by ManInTheHam</p>
        <a href="https://github.com/ManInTheHam/Blendify">GitHub</a>
      </footer>
    </div>
  );
};

export default App;