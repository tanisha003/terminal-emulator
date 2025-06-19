import React from 'react';
// Render command output with support for multiline text
const CommandOutput = ({ text }) => {
  return (
    <div className="terminal-line">
      {text.split('\n').map((line, idx) => (
        <div key={idx} className="output-line">{line}</div>
      ))}
    </div>
  );
};

export default CommandOutput;