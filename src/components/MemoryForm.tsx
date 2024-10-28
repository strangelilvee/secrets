import React, { useState } from 'react';

interface MemoryFormProps {
  onSubmit: (text: string) => Promise<void>;
}

export function MemoryForm({ onSubmit }: MemoryFormProps) {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit(text);
      setText('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative group">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your story..."
          className="w-full p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg
            focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent
            resize-none text-gray-100 placeholder-gray-500
            transition-all duration-300 font-handjet
            group-hover:border-cyan-500/30
            group-hover:shadow-[0_0_15px_rgba(0,255,255,0.1)]"
          rows={3}
          maxLength={500}
        />
        <div className="absolute bottom-4 right-4">
          <span className="text-gray-500 text-sm font-handjet tracking-wider">
            {text.length}/500
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!text.trim() || isSubmitting}
          className="relative group px-6 py-3 rounded-lg text-lg font-handjet transition-all duration-300 ease-out tracking-wider
            bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300 animate-glow"></div>
          <span className="relative">
            {isSubmitting ? 'Sharing...' : 'Share Anonymously'}
          </span>
        </button>
      </div>
    </form>
  );
}