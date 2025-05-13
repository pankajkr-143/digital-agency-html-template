import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Command {
  input: string;
  output: string;
  timestamp: string;
}

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [ipAddress, setIpAddress] = useState('192.168.1.1');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const randomIP = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    setIpAddress(randomIP);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const handleCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString();
    let output = '';

    const routes: { [key: string]: string } = {
      home: '/',
      services: '/services',
      projects: '/projects',
      about: '/about',
      founder: '/about#founder',
      tech: '/services#tech',
      events: '/events',
      gallery: '/gallery',
      team: '/team',
      contact: '/contact',
      internships: '/internships',
      jobs: '/jobs',
      ambassador: '/ambassador',
      testimonials: '/testimonials'
    };

    const cleanCmd = cmd.toLowerCase().trim();

    // Add command to history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (cleanCmd === 'help') {
      output = `Available commands:
- cd [section] : Navigate to a section
- ls : List all sections
- clear : Clear terminal
- pwd : Show current location
- date : Show current date and time
- whoami : Show current user
- ip : Show IP address
- echo [text] : Print text
- history : Show command history
- exit : Minimize terminal
- help : Show this help message

Available sections:
${Object.keys(routes).join(', ')}`;
    } else if (cleanCmd === 'ls') {
      output = Object.keys(routes).join('  ');
    } else if (cleanCmd === 'clear') {
      setCommands([]);
      return;
    } else if (cleanCmd === 'pwd') {
      output = 'Current location: /home/mackystech/website';
    } else if (cleanCmd === 'date') {
      output = new Date().toString();
    } else if (cleanCmd === 'whoami') {
      output = 'guest@mackystech';
    } else if (cleanCmd === 'ip') {
      output = `Current IP: ${ipAddress}`;
    } else if (cleanCmd === 'history') {
      output = commandHistory.map((cmd, i) => `${i + 1}  ${cmd}`).join('\n');
    } else if (cleanCmd === 'exit') {
      setIsOpen(false);
      return;
    } else if (cleanCmd.startsWith('echo ')) {
      output = cmd.slice(5);
    } else if (cleanCmd.startsWith('cd ')) {
      const section = cleanCmd.split(' ')[1];
      if (routes[section]) {
        navigate(routes[section]);
        output = `Navigating to ${section}...`;
      } else {
        output = 'Invalid section. Use "ls" to see available sections.';
      }
    } else {
      output = 'Command not found. Type "help" for available commands.';
    }

    setCommands([...commands, { input: cmd, output, timestamp }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input.trim());
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  // Hide terminal on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-neo-dark p-2 rounded-sm neon-border-green z-40 hidden md:block"
      >
        <TerminalIcon className="h-6 w-6 text-neo-green-100" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 z-40 hidden md:block">
      <div className="bg-neo-dark rounded-t-sm neon-border-green">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <div className="flex items-center">
            <TerminalIcon className="h-4 w-4 text-neo-green-100 mr-2" />
            <span className="text-sm font-code text-gray-400">Terminal</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xs font-code text-gray-500">IP: {ipAddress}</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-neo-green-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div 
          ref={terminalRef}
          className="h-64 overflow-y-auto p-4 font-code text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {commands.map((cmd, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center text-gray-400">
                <span className="text-neo-green-100">guest@mackystech</span>
                <span className="text-gray-500">:</span>
                <span className="text-neo-blue-100">~</span>
                <span className="text-gray-500">$ </span>
                <span className="ml-1">{cmd.input}</span>
                <span className="ml-auto text-xs text-gray-600">{cmd.timestamp}</span>
              </div>
              {cmd.output && (
                <div className="mt-1 text-gray-300 whitespace-pre-line">
                  {cmd.output}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center text-gray-400">
            <span className="text-neo-green-100">guest@mackystech</span>
            <span className="text-gray-500">:</span>
            <span className="text-neo-blue-100">~</span>
            <span className="text-gray-500">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 ml-1 bg-transparent border-none outline-none text-gray-300"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;