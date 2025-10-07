
import React, { useState } from 'react';
import Widget from './Widget';
import { generateShoutOutResponse } from '../services/geminiService';
import SpinnerIcon from './icons/SpinnerIcon';

const ShoutOutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 15.536a5 5 0 010-7.072m2.828 9.9a9 9 0 010-12.728" />
    </svg>
);


const ShoutOutWidget: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !message) {
            setError('Please fill out both your name and message!');
            return;
        }
        setIsLoading(true);
        setError('');
        setResponse('');
        try {
            const djResponse = await generateShoutOutResponse(name, message);
            setResponse(djResponse);
            setName('');
            setMessage('');
        } catch (err) {
            setError('Could not send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Widget title="On The Air" icon={<ShoutOutIcon />}>
            {!response && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-rock-black border border-gray-600 rounded-md px-3 py-2 text-rock-light focus:outline-none focus:ring-2 focus:ring-rock-red"
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Your shout-out or song request..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={3}
                            className="w-full bg-rock-black border border-gray-600 rounded-md px-3 py-2 text-rock-light focus:outline-none focus:ring-2 focus:ring-rock-red"
                            disabled={isLoading}
                        />
                    </div>
                     {error && <p className="text-sm text-red-500">{error}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center px-4 py-2 bg-rock-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <SpinnerIcon className="w-5 h-5"/> : 'Send to DJ'}
                    </button>
                </form>
            )}
            {response && (
                <div className="text-center p-4 bg-rock-black rounded-lg">
                    <p className="text-lg text-rock-light font-display">" {response} "</p>
                    <p className="text-sm text-rock-mid mt-2">- The DJ</p>
                    <button 
                        onClick={() => setResponse('')}
                        className="mt-4 text-sm text-rock-red hover:underline"
                    >
                        Send another shout-out
                    </button>
                </div>
            )}
        </Widget>
    );
};

export default ShoutOutWidget;
