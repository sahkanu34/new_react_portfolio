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
    { title: 'Experience', href: '#experience' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Education', href: '#education' },
    { title: 'Contact', href: '#contact' },
  ];

  // Prevent body scroll only when menu is open, and clean up on unmount
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed w-full px-4 py-4 md:py-5 transition-all duration-300 z-50 ${
          scrollY > 10
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 dark:from-teal-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-cursive">
              Suraj Sah Kanu
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="relative text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-semibold group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 hover:from-teal-50 hover:to-blue-50 dark:hover:from-teal-900/30 dark:hover:to-blue-900/30 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 hover:from-teal-50 hover:to-blue-50 dark:hover:from-teal-900/30 dark:hover:to-blue-900/30 border border-slate-200 dark:border-slate-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-slate-800 dark:text-slate-200 relative z-[60]"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <Menu size={24} style={{ opacity: 0 }} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[55] md:hidden"
          onClick={closeMenu}
          aria-modal="true"
          role="dialog"
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"></div>

          {/* Menu Content */}
          <div
            id="mobile-menu"
            className="relative z-[56] flex flex-col justify-center items-center h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cross button at top right */}
            <button
              type="button"
              onClick={closeMenu}
              className="absolute top-6 right-6 p-2 text-white bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors z-[70]"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center space-y-8 pt-24 w-full">
              {navLinks.map((link, idx) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-medium text-white hover:text-teal-400 transition-colors opacity-0 translate-y-4 animate-fadein-menu"
                  style={{
                    animationDelay: `${0.1 + idx * 0.07}s`,
                    animationFillMode: 'forwards',
                  }}
                  tabIndex={0}
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;