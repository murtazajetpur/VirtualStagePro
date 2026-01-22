import React, { useState } from 'react';
import { ROOM_TYPES } from '../constants';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  // Mock gallery data
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    before: `https://picsum.photos/seed/before${i}/800/600`,
    after: `https://picsum.photos/seed/after${i}/800/600`,
    type: ROOM_TYPES[i % ROOM_TYPES.length],
    style: ['Modern', 'Luxury', 'Scandinavian'][i % 3]
  }));

  const filteredItems = filter === 'All' ? items : items.filter(item => item.type === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Transformation Gallery</h1>
          <p className="text-slate-600">See what's possible with AI virtual staging.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'All' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
          >
            All Rooms
          </button>
          {ROOM_TYPES.slice(0, 5).map(type => (
            <button 
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === type ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="aspect-[4/3] relative">
                <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-900">{item.type}</h3>
                  <p className="text-xs text-slate-500">{item.style}</p>
                </div>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded uppercase">
                  Pro Quality
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;