import React, { useState } from 'react';
import { EyeOff } from 'lucide-react';
import { MemoryForm } from './MemoryForm';
import { useMemories } from '../hooks/useMemories';

export function Home() {
  const { addMemory } = useMemories();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (text: string) => {
    await addMemory(text);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-glow"></div>
          <div className="relative">
            <EyeOff className="w-12 h-12 mx-auto mb-6 text-cyan-400 animate-float" />
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-4xl font-dosis tracking-[0.5em] cyber-gradient" data-text="s e c r e t">
                s e c r e t
              </h1>
              <h1 className="text-4xl font-dosis tracking-[0.5em] cyber-gradient" data-text="z o n e">
                z o n e
              </h1>
            </div>
            <p className="text-gray-400 text-lg font-handjet tracking-widest mt-4">
              tell the truth, don't be scared
            </p>
          </div>
        </div>

        <div className="max-w-lg mx-auto relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative">
            <MemoryForm onSubmit={handleSubmit} />
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p className="text-sm font-handjet tracking-wider">
            Your story will be shared anonymously. No personal information is collected.
          </p>
        </div>

        {showSuccess && (
          <div className="fixed bottom-4 right-4 animate-fade-in">
            <div className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 pr-12 text-cyan-300 relative font-handjet">
              Your secret has been shared
            </div>
          </div>
        )}
      </div>
      <div className="scanline"></div>
    </>
  );
}