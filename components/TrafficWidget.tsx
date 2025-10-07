
import React from 'react';
import Widget from './Widget';
import type { TrafficAlert } from '../types';
import TrafficIcon from './icons/TrafficIcon';

interface TrafficWidgetProps {
  traffic: TrafficAlert[];
}

const getSeverityColor = (severity: 'low' | 'medium' | 'high') => {
  switch (severity) {
    case 'low': return 'text-green-500';
    case 'medium': return 'text-yellow-500';
    case 'high': return 'text-red-500';
    default: return 'text-gray-500';
  }
};

const TrafficWidget: React.FC<TrafficWidgetProps> = ({ traffic }) => {
  return (
    <Widget title="Traffic" icon={<TrafficIcon className="w-6 h-6" />}>
      <div className="space-y-3">
        {traffic.map((alert, index) => (
          <div key={index}>
            <h3 className={`font-bold text-rock-light ${getSeverityColor(alert.severity)}`}>{alert.location}</h3>
            <p className="text-sm">{alert.description}</p>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default TrafficWidget;
