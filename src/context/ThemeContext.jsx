import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    
    // Auto-select theme based on month (every 2-3 months)
    const month = new Date().getMonth();
    // Dec-Jan-Feb: Winter, Mar-Apr-May: Spring, Jun-Jul-Aug: Summer, Sep-Oct-Nov: Autumn
    if (month >= 11 || month <= 1) return 'winter';
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    return 'autumn';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themes = {
    winter: {
      name: 'Winter',
      colors: {
        primary: 'from-blue-400 to-cyan-300',
        secondary: 'from-cyan-400 to-blue-500',
        accent: 'from-sky-300 to-ice-blue-400',
        background: 'from-slate-900 via-blue-900 to-slate-800',
        text: 'text-white',
        overlay: 'from-black/70 via-black/50 to-blue-900/40',
      },
    },
    spring: {
      name: 'Spring',
      colors: {
        primary: 'from-green-400 to-emerald-300',
        secondary: 'from-pink-400 to-rose-500',
        accent: 'from-yellow-300 to-orange-400',
        background: 'from-gray-900 via-green-900 to-gray-800',
        text: 'text-white',
        overlay: 'from-black/70 via-black/50 to-green-900/40',
      },
    },
    summer: {
      name: 'Summer',
      colors: {
        primary: 'from-yellow-400 to-orange-300',
        secondary: 'from-orange-400 to-red-500',
        accent: 'from-amber-300 to-yellow-400',
        background: 'from-gray-900 via-orange-900 to-gray-800',
        text: 'text-white',
        overlay: 'from-black/70 via-black/50 to-orange-900/40',
      },
    },
    autumn: {
      name: 'Autumn',
      colors: {
        primary: 'from-orange-400 to-red-300',
        secondary: 'from-red-400 to-orange-500',
        accent: 'from-amber-300 to-orange-400',
        background: 'from-gray-900 via-red-900 to-gray-800',
        text: 'text-white',
        overlay: 'from-black/70 via-black/50 to-red-900/40',
      },
    },
  };

  const value = {
    theme,
    setTheme,
    currentTheme: themes[theme] || themes.winter,
    themes,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
