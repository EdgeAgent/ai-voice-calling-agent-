
import React, { useState, useEffect, useRef } from 'react';
import Card from './ui/Card';
import { MOCK_ACTIVE_CALLS } from '../constants';
import { ActiveCall } from '../types';

const ActiveCallCard: React.FC<{ call: ActiveCall }> = ({ call }) => {
    const [currentCall, setCurrentCall] = useState<ActiveCall>(call);
    const transcriptEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCall(prev => ({ ...prev, duration: prev.duration + 1 }));
        }, 1000);

        // Simulate new transcript lines
        const transcriptTimer = setInterval(() => {
            const newLines = ['...thinking...', 'Is there anything else?', 'Great, have a nice day.'];
            setCurrentCall(prev => ({
                ...prev,
                transcript: [...prev.transcript, newLines[Math.floor(Math.random() * newLines.length)]]
            }));
        }, 5000);
        
        return () => {
            clearInterval(timer);
            clearInterval(transcriptTimer);
        };
    }, []);
    
    useEffect(() => {
        transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [currentCall.transcript]);

    const formatDuration = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <Card className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
                <div>
                    <h3 className="font-bold text-white">{currentCall.contact.name}</h3>
                    <p className="text-sm text-dark-text-secondary">{currentCall.contact.phone}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="font-mono text-white">{formatDuration(currentCall.duration)}</span>
                </div>
            </div>
            <div className="flex-grow bg-dark-bg p-3 rounded-lg overflow-y-auto h-48 font-mono text-sm space-y-2">
                {currentCall.transcript.map((line, index) => (
                    <p key={index} className="text-dark-text">{line}</p>
                ))}
                <div ref={transcriptEndRef} />
            </div>
        </Card>
    );
};


const CallMonitoring: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Live Call Monitoring</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ACTIVE_CALLS.map(call => (
            <ActiveCallCard key={call.id} call={call} />
        ))}
      </div>
    </div>
  );
};

export default CallMonitoring;
