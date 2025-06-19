import { useState, useRef, useEffect } from 'react';
import Prompt from './Prompt';
import CommandOutput from './CommandOutput';
import { handleCommand } from '../commands/commandHandlers';

const Terminal = () => {
  const [lines, setLines] = useState([]); // Lines displayed in the terminal (commands and their output)
  const [input, setInput] = useState('');  // Current input from user
  const [history, setHistory] = useState([]);  // Command history (up/down arrow navigation)
  const [historyIndex, setHistoryIndex] = useState(null);
  const terminalEndRef = useRef(null);  // Ref to keep scroll at the bottom

  const handleKeyDown = (e) => {   // Handle key presses inside input
    if (e.key === 'Enter') {
      const output = handleCommand(input);
       
       if (input === 'clear') { // Clear screen if `clear` command
        setLines([]);
      } else {
        setLines(prev => [...prev, `> ${input}`, ...output]); // Add command and its output to terminal lines
      }
      setHistory((prev) => [...prev, input]);   // Update history
      setInput('');
      setHistoryIndex(null);
    } else if (e.key === 'ArrowUp') {  // Navigate command history (up)
      if (history.length > 0) {
        const newIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {  // Navigate command history (down)
      if (historyIndex !== null) {
        const newIndex = Math.min(history.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex] || '');
      }
    } else if (e.ctrlKey && e.key === 'c') { // Simulate Ctrl+C interrupt
      setLines((prev) => [...prev, `> ${input}`, 'KeyboardInterrupt']);
      setInput('');
    }
  };
  // Auto-scroll to latest output
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  return (
    <div
      className="terminal"
      role="textbox"
      aria-label="Terminal emulator"
      tabIndex="0" 
    >
      {lines.map((line, index) => (
        <CommandOutput key={index} text={line} />
      ))}
      <Prompt input={input} setInput={setInput} onKeyDown={handleKeyDown} />
      <div ref={terminalEndRef} />
    </div>
  );
};

export default Terminal;