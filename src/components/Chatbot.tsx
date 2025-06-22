import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

// Animation helper for message fade-in
const fadeInClass =
  'opacity-0 translate-y-2 animate-fadein transition-all duration-500 will-change-transform will-change-opacity';

// Typing animation for the intro message
const useTypewriter = (text: string, speed = 35) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    let cancelled = false;
    function type() {
      if (cancelled) return;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        i++;
        setTimeout(type, text[i - 1] === '.' || text[i - 1] === '?' ? speed * 8 : speed);
      }
    }
    type();
    return () => { cancelled = true; };
  }, [text, speed]);
  return displayed;
};

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string | JSX.Element;
  timestamp?: string;
}

const initialMessages: ChatMessage[] = [
  {
    sender: 'bot',
    text: '', // Will be animated in Chatbot below
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

const options = [
  { label: 'Recruiter', value: 'recruiter' },
  { label: 'Student', value: 'student' },
  { label: 'Just Browsing', value: 'browsing' }
];

const navSections = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#Education' },
  { label: 'Contact', href: '#contact' },
];

// FAQ: Most requested questions for the chatbot
const faqs = [
  {
    question: "Can I see Suraj's resume?",
    answer: (
      <span>
        You can <a href="https://ugc.production.linktr.ee/e31aec64-d3f1-4bd4-81fa-686ae2b9923c_surajresume--9---1--1.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>view or download Suraj's resume here</a>.
      </span>
    ),
    trigger: "Show Resume"
  },
  {
    question: "What are Suraj's main skills?",
    answer: (
      <span>
        Suraj specializes in AI, Machine Learning, Deep Learning, Data Analytics, and MLOps. See more in the
        <a href="#skills" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Skills</a>
        section.
      </span>
    ),
    trigger: "Skills"
  },
  {
    question: "Can you show me Suraj's projects?",
    answer: (
      <span>
        Suraj has built AI-powered health assistants, brain tumor detection, and more. See details in the
        <a href="#projects" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Projects</a>
        section or view featured projects like
        <a href="https://partyrock.aws/u/sahkanu34/KiVXHJHU0/HealthGuide-AI" target="_blank" rel="noopener noreferrer" className="ml-1 underline text-teal-600 dark:text-teal-400">HealthGuide Assistant AI</a>
        and
        <a href="https://braintumourdetectionsystem-34.streamlit.app/" target="_blank" rel="noopener noreferrer" className="ml-1 underline text-teal-600 dark:text-teal-400">NeuroScan AI</a>.
      </span>
    ),
    trigger: "Show Projects"
  },
  {
    question: "How can I contact Suraj?",
    answer: (
      <span>
        You can reach Suraj via the
        <a href="#contact" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Contact</a>
        section. Would you like the email, phone number, or LinkedIn?
      </span>
    ),
    trigger: "Contact"
  },
  {
    question: "What is Suraj's email?",
    answer: "Suraj's email: surajsah132@gmail.com",
    trigger: "Email"
  },
  {
    question: "What is Suraj's phone number?",
    answer: "Suraj's phone: +977-9815271537",
    trigger: "Phone"
  },
  {
    question: "Can I see Suraj's LinkedIn?",
    answer: (
      <span>
        Connect with Suraj on <a href="https://linkedin.com/in/sahkanu34" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>LinkedIn</a>.
      </span>
    ),
    trigger: "LinkedIn"
  },
  {
    question: "Where can I find Suraj's code?",
    answer: (
      <span>
        See Suraj's code on <a href="https://github.com/sahkanu34" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>GitHub</a>.
      </span>
    ),
    trigger: "GitHub"
  },
  {
    question: "What is Suraj's education background?",
    answer: (
      <span>
        Suraj has a strong background in AI and ML. Visit the
        <a href="#Education" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Education</a>
        section for more info.
      </span>
    ),
    trigger: "Education"
  },
];

const style = `
@keyframes fadein {
  from { opacity: 0; transform: translateY(8px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadein {
  animation: fadein 0.5s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes waveHand {
  0% { transform: rotate(0deg);}
  10% { transform: rotate(14deg);}
  20% { transform: rotate(-8deg);}
  30% { transform: rotate(14deg);}
  40% { transform: rotate(-4deg);}
  50% { transform: rotate(10deg);}
  60% { transform: rotate(0deg);}
  100% { transform: rotate(0deg);}
}
.wave-hand {
  display: inline-block;
  animation: waveHand 1.6s 1;
  transform-origin: 70% 70%;
}
`;

const Chatbot: React.FC = () => {
  // For animated intro
  const introText = `Hello! 👋 I'm Suraj's portfolio assistant. Are you a recruiter, student, or just browsing?`;
  const animatedIntro = useTypewriter(introText, 32);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: '', // Will be animated below
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [awaitingType, setAwaitingType] = useState(true);
  const [userType, setUserType] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [animatedIdx, setAnimatedIdx] = useState<number>(-1);
  const [inputFocused, setInputFocused] = useState(false);

  // For quick action suggestions
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // For FAQ/Most Requested Questions toggle
  const [showFAQ, setShowFAQ] = useState(false);

  // Animate the intro message only once, and only for the first message
  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'bot') {
      setMessages([
        {
          sender: 'bot',
          text: (
            <span>
              <span>
                Hello!{' '}
                <span className="wave-hand" role="img" aria-label="waving hand">
                  👋
                </span>{' '}
                I'm <span className="font-bold text-teal-600 dark:text-teal-300 animate-gradient-text">Suraj's Assistant</span>. Are you a recruiter, student, or just browsing?
              </span>
            </span>
          ),
          timestamp: messages[0].timestamp
        }
      ]);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (open) {
      setShowWindow(true);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      setTimeout(() => setShowWindow(false), 350);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      setAnimatedIdx(messages.length - 1);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, open]);

  // Suggestion logic: update suggestions based on last bot message
  useEffect(() => {
    if (!awaitingType && messages.length > 0) {
      const lastBotMsg = messages.slice().reverse().find(m => m.sender === 'bot');
      if (!lastBotMsg) return;
      const text = typeof lastBotMsg.text === 'string' ? lastBotMsg.text : '';
      if (/resume|cv/i.test(text)) {
        setSuggestions(['Show Resume', 'Contact Info', 'Projects', 'FAQ']);
      } else if (/project|work/i.test(text)) {
        setSuggestions(['Show Projects', 'Skills', 'Contact Info', 'FAQ']);
      } else if (/contact|reach|connect/i.test(text)) {
        setSuggestions(['Email', 'Phone', 'LinkedIn', 'FAQ']);
      } else {
        setSuggestions(['Skills', 'Projects', 'Education', 'Resume', 'Contact', 'FAQ']);
      }
    } else {
      setSuggestions(['FAQ']);
    }
  }, [messages, awaitingType]);

  const getTimestamp = () =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleOptionClick = (type: string) => {
    setUserType(type);
    setAwaitingType(false);
    let reply = '';
    if (type === 'recruiter') {
      reply = "Welcome! I can share Suraj's resume, skills, projects, or guide you to any section.";
    } else if (type === 'student') {
      reply = "Hi there! Feel free to explore Suraj's projects, skills, or education. Let me know if you need guidance.";
    } else {
      reply = "Enjoy browsing! Ask me about Suraj's skills, projects, education, or how to contact him.";
    }
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: type.charAt(0).toUpperCase() + type.slice(1), timestamp: getTimestamp() },
      { sender: 'bot', text: reply, timestamp: getTimestamp() }
    ]);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg, timestamp: getTimestamp() }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: getBotReply(userMsg), timestamp: getTimestamp() }]);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (suggestion === "FAQ") {
      setShowFAQ(true);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  const handleFAQQuestionClick = (faq: typeof faqs[0]) => {
    setShowFAQ(false);
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: faq.question, timestamp: getTimestamp() },
      { sender: 'bot', text: faq.answer, timestamp: getTimestamp() }
    ]);
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getBotReply = (msg: string) => {
    const lower = msg.toLowerCase();

    // FAQ triggers
    for (const faq of faqs) {
      if (
        lower === faq.trigger.toLowerCase() ||
        lower === faq.question.toLowerCase() ||
        lower.includes(faq.trigger.toLowerCase())
      ) {
        return faq.answer;
      }
    }

    if (lower.includes('skill') || lower.includes('technology') || lower.includes('tech stack')) {
      return (
        <span>
          Suraj specializes in AI, Machine Learning, Deep Learning, Data Analytics, and MLOps. See more in the
          <a href="#skills" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Skills</a>
          section.
        </span>
      );
    }
    if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
      return (
        <span>
          Suraj has built AI-powered health assistants, brain tumor detection, and more. See details in the
          <a href="#projects" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Projects</a>
          section or view featured projects like
          <a href="https://partyrock.aws/u/sahkanu34/KiVXHJHU0/HealthGuide-AI" target="_blank" rel="noopener noreferrer" className="ml-1 underline text-teal-600 dark:text-teal-400">HealthGuide Assistant AI</a>
          and
          <a href="https://braintumourdetectionsystem-34.streamlit.app/" target="_blank" rel="noopener noreferrer" className="ml-1 underline text-teal-600 dark:text-teal-400">NeuroScan AI</a>.
        </span>
      );
    }
    if (lower.includes('education') || lower.includes('degree') || lower.includes('study')) {
      return (
        <span>
          Suraj has a strong background in AI and ML. Visit the
          <a href="#Education" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Education</a>
          section for more info.
        </span>
      );
    }
    if (lower.includes('resume') || lower.includes('cv')) {
      return (
        <span>
          You can <a href="https://ugc.production.linktr.ee/e31aec64-d3f1-4bd4-81fa-686ae2b9923c_surajresume--9---1--1.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>view or download Suraj's resume here</a>.
        </span>
      );
    }
    if (lower.includes('contact') || lower.includes('reach') || lower.includes('connect')) {
      return (
        <span>
          You can reach Suraj via the
          <a href="#contact" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>Contact</a>
          section. Would you like the email, phone number, or LinkedIn?
        </span>
      );
    }
    if (lower.includes('email')) {
      return "Suraj's email: surajsah132@gmail.com";
    }
    if (lower.includes('phone') || lower.includes('call')) {
      return "Suraj's phone: +977-9815271537";
    }
    if (lower.includes('linkedin')) {
      return (
        <span>
          Connect with Suraj on <a href="https://linkedin.com/in/sahkanu34" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>LinkedIn</a>.
        </span>
      );
    }
    if (lower.includes('github') || lower.includes('code')) {
      return (
        <span>
          See Suraj's code on <a href="https://github.com/sahkanu34" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>GitHub</a>.
        </span>
      );
    }
    if (lower.includes('guide') || lower.includes('navigate') || lower.includes('section') || lower.includes('where') || lower.includes('menu')) {
      return (
        <span>
          You can visit these sections:
          <div className="mt-2 flex flex-wrap gap-2">
            {navSections.map(section => (
              <a
                key={section.href}
                href={section.href}
                className="px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {section.label}
              </a>
            ))}
          </div>
        </span>
      );
    }
    if (lower.includes('faq') || lower.includes('frequently asked questions') || lower.includes('most requested')) {
      setShowFAQ(true);
      return "Here are some of the most requested questions. Click any to see the answer!";
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      const greetings = [
        <span key="greet1">
          <span className="wave-hand" role="img" aria-label="waving hand">👋</span> Hello! I'm <span className="font-bold text-teal-600 dark:text-teal-300 animate-gradient-text">Suraj's Assistant</span>, how can I help you?
        </span>,
        'Hello! How can I assist you today?',
        'Hi there! How may I help you?',
        'Greetings! How can I support you?'
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    if (lower.includes('bye') || lower.includes('goodbye') || lower.includes('see you') || lower.includes('see ya') || lower.includes('farewell')) {
      const farewells = [
        'Goodbye! Have a great day!',
        'Take care! Wishing you a wonderful day ahead!',
        'See you soon! All the best!'
      ];
      return farewells[Math.floor(Math.random() * farewells.length)];
    }
    if (lower.includes('thanks') || lower.includes('thank you')) {
      return "You're welcome! Let me know if you need anything else.";
    }
    if (
      lower.includes('who are you') ||
      lower.includes('about you') ||
      lower.includes('who is suraj') ||
      lower.includes('tell me about suraj') ||
      lower.includes('introduce me to suraj') ||
      lower.includes('introduction of suraj') ||
      lower.includes('can you tell me about suraj') ||
      lower.includes('introduce suraj') ||
      lower.includes('about suraj')
    ) {
      return (
        <span>
          I am <span className="font-bold text-teal-600 dark:text-teal-300 animate-gradient-text">Suraj's portfolio assistant</span>.<br/>
          <strong>About Suraj:</strong> Suraj Sah is an accomplished AI/ML Engineer and Researcher with a strong background in Machine Learning, Deep Learning, Data Analytics, and MLOps. He has contributed to impactful projects, including AI-powered health assistants and advanced brain tumor detection systems.<br/>
          <br/>
          You may inquire about his <a href="#skills" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>skills</a>, <a href="#projects" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>projects</a>, <a href="#Education" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>education</a>, or how to <a href="#contact" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>contact</a> him for further information.
        </span>
      );
    }
    if (/(experience|years of experience|experience in|work experience)/i.test(lower)) {
      return (
        <span>
          Suraj has 2+ years of experience as an AI Engineer, Machine Learning Engineer, and Research Assistant. He has completed 10+ projects and deployed 5+ AI solutions. Learn more in the
          <a href="#about" className="ml-1 px-2 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors" style={{ textDecoration: 'none' }}>About</a>
          section.
        </span>
      );
    }
    return "I'm here to help! Ask about Suraj's skills, projects, education, resume, or how to contact him. Or click 'FAQ' for most requested questions.";
  };

  // Layout and style classes
  const chatWindowBase =
    "fixed bottom-8 right-8 z-50 w-[370px] max-w-full bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col";
  const chatWindowOpen =
    "opacity-100 scale-100 translate-y-0 pointer-events-auto transition-all duration-350 ease-in-out";
  const chatWindowClosed =
    "opacity-0 scale-95 translate-y-8 pointer-events-none transition-all duration-350 ease-in-out";

  const floatBtnBase =
    "fixed bottom-8 right-8 z-50 bg-gradient-to-tr from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white rounded-full shadow-xl p-5 transition-all duration-300 flex items-center justify-center";
  const floatBtnShow =
    "opacity-100 scale-100 pointer-events-auto";
  const floatBtnHide =
    "opacity-0 scale-90 pointer-events-none";

  return (
    <>
      <style>{style}</style>
      {/* Floating open/close button */}
      <button
        className={`${floatBtnBase} ${open ? floatBtnHide : floatBtnShow}`}
        aria-label="Open chat"
        onClick={() => setOpen(true)}
        tabIndex={open ? -1 : 0}
        style={{
          boxShadow: '0 8px 32px 0 rgba(20,184,166,0.18), 0 1.5px 4px 0 rgba(0,0,0,0.08)',
          transition: 'all 0.3s cubic-bezier(.4,0,.2,1)'
        }}
      >
        <MessageSquare size={28} className="animate-pulse" />
      </button>
      {/* Chat window */}
      {showWindow && (
        <div
          className={`${chatWindowBase} ${open ? chatWindowOpen : chatWindowClosed}`}
          style={{
            minHeight: 480,
            maxHeight: 600,
            boxShadow: open
              ? '0 12px 40px 0 rgba(20,184,166,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)'
              : undefined,
            transition: 'all 0.35s cubic-bezier(.4,0,.2,1)'
          }}
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 font-semibold text-teal-700 dark:text-teal-300 text-lg rounded-t-2xl bg-gradient-to-r from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex items-center justify-between"
            style={{
              transition: 'background 0.3s, color 0.3s'
            }}
          >
            <span className="flex items-center gap-3">
              <span role='img' aria-label='robot' className="animate-bounce-slow text-2xl">🤖</span>
              <span className="font-bold animate-gradient-text">Suraj's Assistant</span>
            </span>
            <button
              className="ml-2 text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 text-2xl font-bold focus:outline-none transition-colors duration-200"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              style={{ lineHeight: 1, transition: 'color 0.2s' }}
            >
              ×
            </button>
          </div>
          {/* Chat body */}
          <div
            className="flex-1 overflow-y-auto px-5 py-4 space-y-3 text-[15px] bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
            style={{
              transition: 'background 0.3s'
            }}
          >
            {/* Animated intro message */}
            {messages.length === 1 && (
              <div className="flex justify-start group">
                <div
                  className={`relative px-4 py-3 rounded-2xl max-w-[80%] transition-all duration-500 shadow-md bg-gradient-to-br from-teal-50 to-white dark:from-slate-700 dark:to-slate-800 text-slate-800 dark:text-slate-200 border border-teal-100 dark:border-slate-700 ${fadeInClass}`}
                  style={{
                    boxShadow: '0 1.5px 6px 0 rgba(20,184,166,0.08)',
                    transition: 'background 0.3s, color 0.3s, box-shadow 0.3s'
                  }}
                >
                  <span>
                    Hello!{' '}
                    <span className="wave-hand" role="img" aria-label="waving hand">
                      👋
                    </span>{' '}
                    I'm <span className="font-bold text-teal-600 dark:text-teal-300 animate-gradient-text">Suraj's Assistant</span>. Are you a recruiter, student, or just browsing?
                  </span>
                  <span className={`absolute -bottom-5 right-2 text-xs text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                    {messages[0].timestamp}
                  </span>
                </div>
              </div>
            )}
            {/* Other messages */}
            {messages.length > 1 &&
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'} group`}
                >
                  <div
                    className={`relative px-4 py-3 rounded-2xl max-w-[80%] transition-all duration-500 shadow-md ${
                      msg.sender === 'bot'
                        ? 'bg-gradient-to-br from-teal-50 to-white dark:from-slate-700 dark:to-slate-800 text-slate-800 dark:text-slate-200 border border-teal-100 dark:border-slate-700'
                        : 'bg-gradient-to-br from-teal-600 to-teal-500 text-white dark:from-teal-500 dark:to-teal-400 dark:text-white border border-teal-600 dark:border-teal-400'
                    } ${idx === animatedIdx ? fadeInClass : ''}`}
                    style={{
                      boxShadow:
                        msg.sender === 'bot'
                          ? '0 1.5px 6px 0 rgba(20,184,166,0.08)'
                          : '0 2px 8px 0 rgba(20,184,166,0.12)',
                      transition: 'background 0.3s, color 0.3s, box-shadow 0.3s'
                    }}
                  >
                    {msg.text}
                    <span className={`absolute -bottom-5 right-2 text-xs text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            {/* FAQ Section */}
            {showFAQ && (
              <div className="mt-4 mb-2 p-4 bg-teal-50 dark:bg-slate-800 rounded-xl border border-teal-100 dark:border-slate-700 shadow">
                <div className="mb-2 font-semibold text-teal-700 dark:text-teal-300 text-base flex items-center gap-2">
                  <span role="img" aria-label="FAQ">❓</span>
                  Most Requested Questions
                </div>
                <ul className="space-y-2">
                  {faqs.map((faq, i) => (
                    <li key={i}>
                      <button
                        className="w-full text-left px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-teal-100 dark:border-slate-700 hover:bg-teal-100 dark:hover:bg-slate-700 transition-colors text-[15px] text-teal-800 dark:text-teal-200 font-medium"
                        onClick={() => handleFAQQuestionClick(faq)}
                      >
                        {faq.question}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-3 px-3 py-1 rounded text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
                  onClick={() => setShowFAQ(false)}
                >
                  Close FAQ
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Suggestions */}
          {!awaitingType && suggestions.length > 0 && !showFAQ && (
            <div className="px-6 pb-2 pt-1 flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={s}
                  className="px-3 py-1 bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium hover:bg-teal-200 dark:hover:bg-teal-600 transition-colors border border-teal-200 dark:border-slate-600"
                  style={{ animation: `fadein 0.5s ${0.1 + i * 0.08}s forwards`, opacity: 0 }}
                  onClick={() => handleSuggestionClick(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-gradient-to-r from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
            style={{
              transition: 'background 0.3s'
            }}
          >
            {awaitingType ? (
              <div className="flex gap-3">
                {options.map((opt, i) => (
                  <button
                    key={opt.value}
                    className="flex-1 px-4 py-2 bg-gradient-to-tr from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white rounded-xl text-base font-semibold shadow-md transition-all duration-200"
                    onClick={() => handleOptionClick(opt.value)}
                    style={{
                      boxShadow: '0 1.5px 6px 0 rgba(20,184,166,0.08)',
                      opacity: 0,
                      animation: `fadein 0.5s ${0.1 + i * 0.1}s forwards`
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSend} className="flex gap-2 items-center">
                <input
                  type="text"
                  className={`flex-1 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 text-base transition-all duration-200 ${
                    inputFocused ? 'ring-2 ring-teal-400' : ''
                  }`}
                  placeholder="Type your message..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                  style={{
                    boxShadow: inputFocused
                      ? '0 0 0 2px #14b8a6'
                      : undefined,
                    transition: 'box-shadow 0.2s'
                  }}
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-tr from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white rounded-xl text-base font-semibold shadow-md transition-all duration-200 flex items-center gap-1"
                  style={{
                    boxShadow: '0 1.5px 6px 0 rgba(20,184,166,0.08)'
                  }}
                >
                  <span className="inline-block transition-transform duration-200 group-hover:scale-110">Send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      {/* Custom slow bounce for robot emoji and animated gradient text */}
      <style>
        {`
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-6px);}
        }
        .wave-hand {
          display: inline-block;
          animation: waveHand 1.6s 1;
          transform-origin: 70% 70%;
        }
        @keyframes waveHand {
          0% { transform: rotate(0deg);}
          10% { transform: rotate(14deg);}
          20% { transform: rotate(-8deg);}
          30% { transform: rotate(14deg);}
          40% { transform: rotate(-4deg);}
          50% { transform: rotate(10deg);}
          60% { transform: rotate(0deg);}
          100% { transform: rotate(0deg);}
        }
        .animate-gradient-text {
          background: linear-gradient(90deg, #14b8a6, #2563eb, #14b8a6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 2.5s linear infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%;}
          50% { background-position: 100% 50%;}
          100% { background-position: 0% 50%;}
        }
        `}
      </style>
    </>
  );
};

export default Chatbot;