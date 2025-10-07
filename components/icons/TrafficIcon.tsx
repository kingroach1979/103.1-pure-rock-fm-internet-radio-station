
import React from 'react';

const TrafficIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 10c0-1.1-.9-2-2-2h-3V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v4h2v5h2.5v-5h9V19H18v-5h2v-4zM8.5 5.5c0-.28.22-.5.5-.5h6c.28 0 .5.22.5.5v2h-7v-2zM15 14H9v-1h6v1zm-1.5-2.5h-3V10h3v1.5z" />
  </svg>
);

export default TrafficIcon;
