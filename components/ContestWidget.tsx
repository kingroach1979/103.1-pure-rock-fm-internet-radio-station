import React from 'react';
import Widget from './Widget';
import type { Contest } from '../types';

const ContestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);


const ContestWidget: React.FC<{ contest: Contest }> = ({ contest }) => {
  return (
    <Widget title={contest.title} icon={<ContestIcon />}>
        <div className="text-center flex flex-col items-center justify-center h-full p-4 bg-rock-black rounded-md border-2 border-rock-red/50">
            <p className="text-2xl md:text-3xl text-rock-red font-bold mb-3">{contest.prize}</p>
            <p className="text-lg text-rock-light">{contest.callToAction}</p>
        </div>
    </Widget>
  );
};

export default ContestWidget;