import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Terminal, Users, Calendar, ChevronDown, Github } from 'lucide-react';

const TypewriterText = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}<span className="animate-pulse">_</span></span>;
};

const GlitchText = ({ children }) => (
  <div className="relative inline-block">
    <span className="relative z-10">{children}</span>
    <span className="absolute top-0 left-0.5 text-red-500 opacity-50 animate-glitch1 z-0">{children}</span>
    <span className="absolute top-0 -left-0.5 text-blue-500 opacity-50 animate-glitch2 z-0">{children}</span>
  </div>
);

const CustomTerminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', content: 'Welcome to Turing Sapiens Terminal' },
    { type: 'system', content: 'Type "help" for available commands' },
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: () => ({
      type: 'success',
      content: `Available commands:
  help          - Show this help message
  about         - About Turing Sapiens
  events        - List upcoming events
  team          - Show team members
  clear         - Clear the terminal
  contact       - Get contact information`
    }),
    about: () => ({
      type: 'success',
      content: `
---------------------------       ╔══════════════════════════════════════════════════════╗
OS: Manipal University Jaipur     ║ ████████╗ ██╗   ██╗ ██████╗  ██╗ ███╗   ██╗  ██████╗ ║
Host: Turing Sapiens Club         ║ ╚══██╔══╝ ██║   ██║ ██╔══██╗ ██║ ████╗  ██║ ██╔════╝ ║
Kernel: Computer Science          ║    ██║    ██║   ██║ ██████╔╝ ██║ ██╔██╗ ██║ ██║  ███╗║
Founded: 2020                     ║    ██║    ██║   ██║ ██╔══██╗ ██║ ██║╚██╗██║ ██║   ██║║
Members: 500+                     ║    ██║    ╚██████╔╝ ██║  ██║ ██║ ██║ ╚████║ ╚██████╔╝║
Projects: 10+                     ║    ╚═╝     ╚═════╝  ╚═╝  ╚═╝ ╚═╝ ╚═╝  ╚═══╝  ╚═════╝ ║
                                 ║                                                        ║
Contact                          ║ ███████╗  █████╗  ██████╗  ██╗ ███████╗ ███╗   ██╗ ███████╗ ║
---------------------------      ║ ██╔════╝ ██╔══██╗ ██╔══██╗ ██║ ██╔════╝ ████╗  ██║ ██╔════╝ ║
Email: turing@muj.manipal.edu    ║ ███████╗ ███████║ ██████╔╝ ██║ █████╗   ██╔██╗ ██║ ███████╗ ║
GitHub: github.com/turingsapiens ║ ╚════██║ ██╔══██║ ██╔═══╝  ██║ ██╔══╝   ██║╚██╗██║ ╚════██║ ║
Discord: discord.gg/turingsapiens║ ███████║ ██║  ██║ ██║      ██║ ███████╗ ██║ ╚████║ ███████║ ║
                                 ║ ╚══════╝ ╚═╝  ╚═╝ ╚═╝      ╚═╝ ╚══════╝ ╚═╝  ╚═══╝ ╚══════╝ ║
                                 ╚══════════════════════════════════════════════════════╝
Type 'help' to see more commands
`
    }),
    events: () => ({
      type: 'success',
      content: `Upcoming Events:
- Coming Soon...`
    }),
    team: () => ({
      type: 'success',
      content: `Team Members:
- Abhijeet Anand Jha (President)
- Trisha Sharma (Vice President)
- Vishesh Gaur (General Secretary)
- Chaitanya Sekra (Treasurer)
- Pranshu Gautam (Techinal Secretary)
- Aanya Gupta (Operations Manager)

`
    }),
    contact: () => ({
      type: 'success',
      content: `Contact Information:
Email: contact@turingsapiens.org
GitHub: github.com/turingsapiens
Discord: discord.gg/turingsapiens`
    }),
    clear: () => {
      setOutput([]);
      return { type: 'system', content: '' };
    },
    hello: () => ({
      type: 'success',
      content:
        `shh...you found the secret command! 
Ishaan says hello 👋🏻 
Follow me - 
Github : https://github.com/AugustusWayne
X : https://x.com/augustus_0510`
    })
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd) {
      setOutput(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);
      setHistory(prev => [...prev, cmd]);

      if (commands[trimmedCmd]) {
        setOutput(prev => [...prev, commands[trimmedCmd]()]);
      } else {
        setOutput(prev => [...prev, { type: 'error', content: `Command not found: ${trimmedCmd}` }]);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="h-96 bg-black rounded-xl overflow-hidden flex flex-col
                 shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                 border border-green-500/30
                 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-sm whitespace-pre
                   scrollbar-thin scrollbar-thumb-green-500/30 scrollbar-track-transparent"
      >
        {output.map((line, i) => (
          <div
            key={i}
            className={`mb-1 ${line.type === 'error' ? 'text-red-500' :
              line.type === 'success' ? 'text-white' :
                'text-gray-300'
              }`}
          >
            {line.content}
          </div>
        ))}
        <div className="flex items-center text-green-500">
          <span>$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none ml-2"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

const ClubWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const commands = [
    { id: 'home', label: 'home', icon: Terminal },
    { id: 'about', label: 'about', icon: Terminal },
    { id: 'events', label: 'events', icon: Calendar },
    { id: 'team', label: 'team', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      {/* Previous sections remain the same */}

      {/* Terminal Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Terminal className="w-8 h-8 mb-4" />
          <h2 className="text-3xl font-bold mb-8">
            <TypewriterText text="$ ./start-terminal" delay={100} />
          </h2>
          <Card className="bg-black/50 border border-green-500/30">
            <CardContent className="p-6">
              <CustomTerminal />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
    </div>
  );
};

export default ClubWebsite;