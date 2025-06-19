export function handleCommand(input) {
    const [command, ...args] = input.trim().split(' ');
    // Handles predefined terminal commands
    switch (command) {
      case 'help':
        return [
          'Available commands:',
          '  help     — Show available commands',
          '  about    — Info about app',
          '  echo     — Repeat your input',
          '  date     — Show current date',
          '  whoami   — Display user',
          '  clear    — Clear screen'
        ];
      case 'about':
        return ['This is a React-based terminal emulator created for DevifyX.'];
      case 'clear':
        return [];
      case 'echo':
        return [args.join(' ')]; // repeat back what user typed
      case 'date':
        return [new Date().toString()];
      case 'whoami':
        return ['devifyx_user'];
      default:
        return [`command not found: ${command}`];
    }
  }