import React from 'react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 backdrop-blur-sm border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
        <span className="text-sm text-gray-400">made by:</span>
        <a
          href="https://twitter.com/strangelilvee"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1850374997199519744/vvuDIlUQ_400x400.jpg"
            alt="@strangelilvee"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">
            @strangelilvee
          </span>
        </a>
      </div>
    </footer>
  );
}