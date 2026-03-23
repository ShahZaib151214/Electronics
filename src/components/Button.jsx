import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
    secondary: 'text-blue-700 bg-blue-50 hover:bg-blue-100 focus:ring-blue-400',
    outline: 'text-gray-700 bg-transparent border-gray-300 hover:bg-gray-50 focus:ring-gray-400',
    ghost: 'text-gray-600 bg-transparent hover:bg-gray-100 border-none shadow-none',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
