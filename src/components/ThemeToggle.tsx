import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md',
  showLabel = false 
}) => {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative ${sizeClasses[size]} 
        rounded-full 
        border-2 
        transition-all 
        duration-300 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2
        ${theme === 'dark' 
          ? 'bg-neo-dark border-neo-green-100 focus:ring-neo-green-100' 
          : 'bg-white border-gray-300 focus:ring-gray-500'
        }
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        {theme === 'dark' ? (
          <Moon 
            className={`${iconSizes[size]} ${
              theme === 'dark' ? 'text-neo-green-100' : 'text-gray-600'
            }`} 
          />
        ) : (
          <Sun 
            className={`${iconSizes[size]} ${
              theme === 'light' ? 'text-yellow-500' : 'text-gray-600'
            }`} 
          />
        )}
      </motion.div>

      {/* Animated background circle */}
      <motion.div
        className={`
          absolute inset-0 rounded-full
          ${theme === 'dark' 
            ? 'bg-neo-green-100 bg-opacity-10' 
            : 'bg-yellow-100'
          }
        `}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: theme === 'dark' ? 1 : 0.8, 
          opacity: theme === 'dark' ? 0.1 : 0.2 
        }}
        transition={{ duration: 0.3 }}
      />

      {showLabel && (
        <span className="sr-only">
          {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        </span>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
