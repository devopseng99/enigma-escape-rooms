'use client';

import { useState } from 'react';

const categories = ['All', 'Rooms', 'Teams', 'Events', 'Behind the Scenes'];

const galleryItems = [
  { title: 'Pharaoh\'s Tomb — Main Chamber', category: 'Rooms', gradient: 'from-amber-700 to-yellow-900' },
  { title: 'Team Victory Celebration', category: 'Teams', gradient: 'from-green-700 to-emerald-900' },
  { title: 'Cyberpunk Lab Setup', category: 'Rooms', gradient: 'from-cyan-700 to-blue-900' },
  { title: 'Corporate Event — TechCorp', category: 'Events', gradient: 'from-indigo-700 to-purple-900' },
  { title: 'Puzzle Crafting Workshop', category: 'Behind the Scenes', gradient: 'from-orange-700 to-red-900' },
  { title: 'Haunted Manor Entrance', category: 'Rooms', gradient: 'from-purple-700 to-indigo-900' },
  { title: 'Birthday Party Group', category: 'Events', gradient: 'from-pink-700 to-rose-900' },
  { title: 'Record Breakers — 23:41', category: 'Teams', gradient: 'from-gold to-amber-900' },
  { title: 'Submarine Crisis Interior', category: 'Rooms', gradient: 'from-teal-700 to-cyan-900' },
  { title: 'Set Design Process', category: 'Behind the Scenes', gradient: 'from-stone-600 to-stone-900' },
  { title: 'Team Building Champions', category: 'Teams', gradient: 'from-blue-700 to-indigo-900' },
  { title: 'Wizard\'s Tower Props', category: 'Behind the Scenes', gradient: 'from-violet-700 to-fuchsia-900' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gold">Gallery</span>
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto">Peek inside our immersive worlds. No spoilers — just enough to fuel your curiosity.</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-gold text-dark'
                : 'border border-dark-border text-stone-400 hover:border-gold/30 hover:text-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div key={i} className="group relative rounded-xl overflow-hidden border border-dark-border hover:border-gold/30 transition-colors">
            <div className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
              <span className="text-5xl opacity-30 group-hover:opacity-60 transition-opacity">📸</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-4">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-gold">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
