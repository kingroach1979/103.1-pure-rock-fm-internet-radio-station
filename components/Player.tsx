
import React from 'react';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import VolumeUpIcon from './icons/VolumeUpIcon';
import VolumeOffIcon from './icons/VolumeOffIcon';

interface PlayerProps {
  isPlaying: boolean;
  volume: number;
  onPlayPause: () => void;
  onVolumeChange: (volume: number) => void;
}

const Player: React.FC<PlayerProps> = ({ isPlaying, volume, onPlayPause, onVolumeChange }) => {
  return (
    <footer className="bg-rock-gray border-t-2 border-rock-red sticky bottom-0 z-20 shadow-2xl">
      <div className="container mx-auto p-4 flex items-center justify-between md:justify-center md:space-x-8">
        <div className="text-rock-light font-display">
          <p className="text-sm">NOW PLAYING</p>
          <p className="text-lg uppercase tracking-wider">LIVE STREAM</p>
        </div>

        <button
          onClick={onPlayPause}
          className="p-3 bg-rock-red rounded-full text-white hover:bg-red-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rock-gray focus:ring-white"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <PauseIcon className="w-8 h-8" /> : <PlayIcon className="w-8 h-8" />}
        </button>

        <div className="hidden md:flex items-center space-x-3">
          {volume > 0 ? <VolumeUpIcon className="w-6 h-6 text-rock-mid" /> : <VolumeOffIcon className="w-6 h-6 text-rock-mid" />}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-32 h-2 bg-rock-black rounded-lg appearance-none cursor-pointer accent-rock-red"
            aria-label="Volume control"
          />
        </div>
      </div>
    </footer>
  );
};

export default Player;
