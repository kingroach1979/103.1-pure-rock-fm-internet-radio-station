
import React from 'react';
import Widget from './Widget';
import type { WeatherInfo } from '../types';
import SunIcon from './icons/SunIcon';
import CloudIcon from './icons/CloudIcon';
import RainIcon from './icons/RainIcon';

interface WeatherWidgetProps {
  weather: WeatherInfo;
}

const WeatherIcon: React.FC<{ icon: WeatherInfo['icon'] }> = ({ icon }) => {
  switch (icon) {
    case 'SUN':
      return <SunIcon className="w-16 h-16 text-yellow-400" />;
    case 'CLOUD':
      return <CloudIcon className="w-16 h-16 text-gray-400" />;
    case 'RAIN':
      return <RainIcon className="w-16 h-16 text-blue-400" />;
    default:
      return <CloudIcon className="w-16 h-16 text-gray-400" />;
  }
};

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
  return (
    <Widget title="Weather">
      <div className="flex flex-col items-center justify-center text-center h-full">
        <WeatherIcon icon={weather.icon} />
        <p className="text-5xl font-bold text-rock-light my-2">{weather.temperature}°F</p>
        <p className="text-lg text-rock-mid">{weather.condition}</p>
        <p className="text-sm text-gray-500 mt-1">{weather.location}</p>
      </div>
    </Widget>
  );
};

export default WeatherWidget;
