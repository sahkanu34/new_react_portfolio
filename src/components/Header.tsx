import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Education', href: '#education' },
    { title: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed w-full px-4 py-4 md:py-5 transition-all duration-300 z-50 ${
        scrollY > 10 
          ? 'bg-gradient-to-b from-white/90 to-slate-50/90 dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
          <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-cursive">
            Suraj Sah Kanu
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
            >
              {link.title}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-800 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-slate-900 z-50 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24 px-8`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={closeMenu}
            aria-label="Close Menu"
            className="p-2 text-slate-800 dark:text-slate-200"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={closeMenu}
              className="text-xl font-medium text-slate-800 dark:text-slate-200"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;