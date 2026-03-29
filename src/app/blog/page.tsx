'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Tips & Strategy', 'Company News', 'Team Building', 'Behind the Scenes'];

const posts = [
  {
    title: '10 Tips to Beat Any Escape Room on Your First Try',
    category: 'Tips & Strategy',
    excerpt: 'From communication hacks to pattern recognition — our game masters share the secrets that separate winners from the locked-in.',
    date: 'March 22, 2024',
    readTime: '5 min read',
    gradient: 'from-gold/20 to-amber-900/20',
  },
  {
    title: 'New Room Alert: Cyberpunk Lab 2077 Now Open!',
    category: 'Company News',
    excerpt: 'Our most technologically advanced room yet. Featuring real hacking terminals, laser grids, and an AI antagonist that adapts to your team.',
    date: 'March 15, 2024',
    readTime: '3 min read',
    gradient: 'from-cyan-900/20 to-blue-900/20',
  },
  {
    title: 'Why Escape Rooms Are the Ultimate Team Building Activity',
    category: 'Team Building',
    excerpt: 'Research shows escape rooms improve communication, trust, and problem-solving skills. Here\'s the data behind the fun.',
    date: 'March 8, 2024',
    readTime: '6 min read',
    gradient: 'from-green-900/20 to-emerald-900/20',
  },
  {
    title: 'How We Design a Room: From Concept to Grand Opening',
    category: 'Behind the Scenes',
    excerpt: 'It takes 6 months and over 200 hours of playtesting to bring a new room to life. Here\'s what the process looks like.',
    date: 'February 28, 2024',
    readTime: '8 min read',
    gradient: 'from-purple-900/20 to-indigo-900/20',
  },
  {
    title: 'The Psychology of Puzzle Solving Under Pressure',
    category: 'Tips & Strategy',
    excerpt: 'Why does time pressure make you forget simple things? A look at how stress affects cognition — and how to beat it.',
    date: 'February 20, 2024',
    readTime: '7 min read',
    gradient: 'from-red-900/20 to-orange-900/20',
  },
  {
    title: 'Enigma Wins Regional Entertainment Award 2024',
    category: 'Company News',
    excerpt: 'We\'re honored to be named Best Escape Room Experience by the Regional Entertainment Association for the second year running.',
    date: 'February 14, 2024',
    readTime: '2 min read',
    gradient: 'from-gold/20 to-yellow-900/20',
  },
  {
    title: 'Planning the Perfect Corporate Off-Site at Enigma',
    category: 'Team Building',
    excerpt: 'From 10-person teams to 200-person company outings — here\'s how to plan an unforgettable corporate event.',
    date: 'February 5, 2024',
    readTime: '5 min read',
    gradient: 'from-teal-900/20 to-cyan-900/20',
  },
  {
    title: 'The Sounds of Enigma: How We Use Audio Design',
    category: 'Behind the Scenes',
    excerpt: 'Sound is half the immersion. Meet our audio designer and learn how every creak, whisper, and alarm is intentionally placed.',
    date: 'January 30, 2024',
    readTime: '4 min read',
    gradient: 'from-violet-900/20 to-fuchsia-900/20',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Enigma <span className="text-gold">Blog</span>
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Tips, news, and behind-the-scenes looks at the world of escape rooms.
        </p>
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

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post, i) => (
          <article
            key={i}
            className={`bg-gradient-to-br ${post.gradient} border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors`}
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-stone-500">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold mb-2 hover:text-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-stone-400 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-500">{post.date}</span>
                <Link href="#" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
