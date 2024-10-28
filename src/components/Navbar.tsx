import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b border-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <Eye className="w-6 h-6" />
            <span className="font-handjet tracking-[0.3em]">the invisibles</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/about"
              className="px-4 py-2 text-sm font-handjet text-cyan-300 hover:text-cyan-200 tracking-widest transition-colors"
            >
              a b o u t
            </Link>
            <Link
              to="/memories"
              className="px-4 py-2 text-sm font-handjet text-cyan-300 hover:text-cyan-200 tracking-widest transition-colors"
            >
              s e c r e t s
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}