import React from 'react';
import { Card } from './ui/Card';
import { ThumbsUp } from 'lucide-react';
import { useMemories } from '../hooks/useMemories';

export function Memories() {
  const { memories, likeMemory } = useMemories();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-handjet mb-8 text-center tracking-[0.5em] text-cyan-400">
        s e c r e t s
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {memories.map((memory, index) => (
          <Card key={memory.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <p className="text-gray-300 font-handjet leading-relaxed mb-4">{memory.text}</p>
            <div className="flex items-center justify-between mt-4 border-t border-slate-800/50 pt-4">
              <div className="text-sm text-gray-500 font-handjet">
                {new Date(memory.timestamp).toLocaleDateString()} at{' '}
                {new Date(memory.timestamp).toLocaleTimeString()}
              </div>
              <button
                onClick={() => likeMemory(memory.id)}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-handjet">{memory.likes}</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
      {memories.length === 0 && (
        <p className="text-center text-gray-400 font-handjet mt-12">No secrets have been shared yet...</p>
      )}
    </div>
  );
}