import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';
import { Card } from './ui/Card';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-handjet mb-8 text-center tracking-[0.5em] text-cyan-400">
        a b o u t
      </h2>
      
      <div className="space-y-8">
        <Card>
          <div className="flex items-start space-x-6">
            <Eye className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-handjet text-cyan-300 mb-2 tracking-wider">What is The Invisibles?</h3>
              <p className="text-gray-300 font-handjet leading-relaxed">
                A digital sanctuary where truths can be shared without fear or judgment. 
                Every story matters, every voice deserves to be heard, even in silence.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start space-x-6">
            <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-handjet text-cyan-300 mb-2 tracking-wider">Safe Space</h3>
              <p className="text-gray-300 font-handjet leading-relaxed">
                No accounts. No tracking. No judgments. Just pure, anonymous expression. 
                Your stories disappear into the digital void, leaving only their essence behind.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start space-x-6">
            <Lock className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-handjet text-cyan-300 mb-2 tracking-wider">Privacy First</h3>
              <p className="text-gray-300 font-handjet leading-relaxed">
                Your privacy is sacred. We collect no personal data, use no cookies, 
                and store nothing that could identify you. You are truly invisible here.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 font-handjet tracking-wider">
          Share your truth. Find your peace.
        </p>
      </div>
    </div>
  );
}