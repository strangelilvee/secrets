import { useState, useEffect } from 'react';
import type { Memory } from '../types/memory';

export function useMemories() {
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('memories');
    if (stored) {
      setMemories(JSON.parse(stored));
    }
  }, []);

  const addMemory = async (text: string) => {
    const memory: Memory = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now(),
      likes: 0,
    };

    const updatedMemories = [...memories, memory];
    setMemories(updatedMemories);
    localStorage.setItem('memories', JSON.stringify(updatedMemories));
  };

  const likeMemory = async (id: string) => {
    const updatedMemories = memories.map(memory => 
      memory.id === id 
        ? { ...memory, likes: memory.likes + 1 }
        : memory
    );
    setMemories(updatedMemories);
    localStorage.setItem('memories', JSON.stringify(updatedMemories));
  };

  return {
    memories,
    addMemory,
    likeMemory,
  };
}