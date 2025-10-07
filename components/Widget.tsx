
import React from 'react';

interface WidgetProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Widget: React.FC<WidgetProps> = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`bg-rock-gray rounded-lg shadow-lg p-5 flex flex-col h-full ${className}`}>
      <div className="flex items-center mb-4">
        {icon && <div className="text-rock-red mr-3">{icon}</div>}
        <h2 className="text-xl font-display uppercase tracking-wider text-rock-light">{title}</h2>
      </div>
      <div className="flex-grow text-rock-mid">
        {children}
      </div>
    </div>
  );
};

export default Widget;
