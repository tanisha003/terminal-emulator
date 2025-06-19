const Prompt = ({ input, setInput, onKeyDown }) => {
  return (
    <div className="prompt">
      <span className="prompt-label">user@devifyx:~$</span>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        aria-label="Terminal input"
      />
    </div>
  );
};

export default Prompt;
  