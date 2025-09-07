
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex-shrink-0 bg-dark-card border-b border-dark-border px-6 py-4">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </header>
  );
};

export default Header;
