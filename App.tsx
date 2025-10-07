import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { DashboardData } from './types';
import { fetchDashboardData } from './services/geminiService';

import Header from './components/Header';
import Player from './components/Player';
import NewsWidget from './components/NewsWidget';
import WeatherWidget from './components/WeatherWidget';
import ShoutOutWidget from './components/ShoutOutWidget';
import SpinnerIcon from './components/icons/SpinnerIcon';

const STREAM_URL = 'https://streaming.live365.com/a28429';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const dashboardData = await fetchDashboardData();
      setData(dashboardData);
    } catch (err) {
      setError('Failed to load station data. The airwaves are a bit fuzzy right now. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-rock-black text-rock-light font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-96 text-rock-mid">
            <SpinnerIcon className="w-16 h-16 mb-4" />
            <p className="text-xl font-display">Tuning the Station...</p>
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center justify-center h-96 text-rock-red bg-rock-gray p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-display mb-4">Static Detected!</h2>
            <p className="text-center">{error}</p>
            <button
              onClick={loadData}
              className="mt-6 px-6 py-2 bg-rock-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}
        {data && !isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <ShoutOutWidget />
            </div>
            <WeatherWidget weather={data.weather} />
            <div className="md:col-span-3">
              <NewsWidget news={data.news} />
            </div>
          </div>
        )}
      </main>
      <Player
        isPlaying={isPlaying}
        volume={volume}
        onPlayPause={togglePlayPause}
        onVolumeChange={setVolume}
      />
      <audio ref={audioRef} src={STREAM_URL} preload="none" />
    </div>
  );
};

export default App;