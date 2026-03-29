'use client';

import { useState } from 'react';
import Link from 'next/link';

const stats = [
  { label: 'Bookings Today', value: '24', change: '+12%', positive: true },
  { label: 'Revenue (MTD)', value: '$48,320', change: '+8.3%', positive: true },
  { label: 'Escape Rate', value: '67%', change: '-2%', positive: false },
  { label: 'Avg. Rating', value: '4.9', change: '+0.1', positive: true },
];

const recentBookings = [
  { id: 'BK-2024-001', room: 'Pharaoh\'s Tomb', team: 'Code Crackers', players: 5, time: '2:00 PM', status: 'Confirmed' },
  { id: 'BK-2024-002', room: 'Cyberpunk Lab', team: 'TechCorp Team A', players: 8, time: '4:00 PM', status: 'Confirmed' },
  { id: 'BK-2024-003', room: 'Haunted Manor', team: 'Birthday Party', players: 6, time: '6:00 PM', status: 'Pending' },
  { id: 'BK-2024-004', room: 'Prison Break', team: 'The Escapists', players: 4, time: '8:00 PM', status: 'Confirmed' },
  { id: 'BK-2024-005', room: 'Wizard\'s Tower', team: 'Family Fun', players: 4, time: '10:00 AM', status: 'Completed' },
  { id: 'BK-2024-006', room: 'Submarine Crisis', team: 'Deep Divers', players: 3, time: '12:00 PM', status: 'Completed' },
];

const leaderboard = [
  { rank: 1, team: 'The Masterminds', room: 'Cyberpunk Lab', time: '23:41', date: '2024-03-15' },
  { rank: 2, team: 'Code Crackers', room: 'Pharaoh\'s Tomb', time: '27:12', date: '2024-03-10' },
  { rank: 3, team: 'Escape Artists', room: 'Prison Break', time: '29:55', date: '2024-02-28' },
  { rank: 4, team: 'Puzzle Queens', room: 'Haunted Manor', time: '31:08', date: '2024-03-01' },
  { rank: 5, team: 'The Detectives', room: 'Submarine Crisis', time: '33:20', date: '2024-03-12' },
];

const sidebarLinks = [
  { label: 'Overview', active: true },
  { label: 'Bookings' },
  { label: 'Rooms' },
  { label: 'Leaderboard' },
  { label: 'Hints System' },
  { label: 'Gift Cards' },
  { label: 'Reports' },
  { label: 'Settings' },
];

const statusColor: Record<string, string> = {
  Confirmed: 'text-green-400 bg-green-400/10',
  Pending: 'text-gold bg-gold/10',
  Completed: 'text-stone-400 bg-stone-400/10',
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 bg-dark-card border-r border-dark-border p-4">
        <div className="mb-6">
          <h2 className="text-gold font-bold text-lg">Admin Panel</h2>
          <p className="text-xs text-stone-500">Enigma Escape Rooms</p>
        </div>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveTab(link.label)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                activeTab === link.label
                  ? 'bg-gold/10 text-gold'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-dark/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-sm text-stone-400">Welcome back, Game Master</p>
          </div>
          <Link href="/booking" className="px-4 py-2 bg-gold text-dark font-bold rounded-lg hover:bg-gold-light transition-colors text-sm">
            + New Booking
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-dark-card border border-dark-border rounded-xl p-4">
              <p className="text-sm text-stone-400">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
              <p className={`text-xs mt-1 ${stat.positive ? 'text-green-400' : 'text-danger'}`}>
                {stat.change} vs last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
            <div className="h-48 bg-gradient-to-t from-gold/5 to-gold/20 rounded-lg flex items-end justify-around px-4 pb-4">
              {[40, 65, 55, 80, 72, 90, 85].map((h, i) => (
                <div key={i} className="w-8 bg-gold/60 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-around text-xs text-stone-500 mt-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Room Popularity</h3>
            <div className="space-y-3">
              {[
                { name: 'Cyberpunk Lab', pct: 92 },
                { name: 'Pharaoh\'s Tomb', pct: 85 },
                { name: 'Prison Break', pct: 78 },
                { name: 'Haunted Manor', pct: 70 },
                { name: 'Submarine Crisis', pct: 63 },
                { name: 'Wizard\'s Tower', pct: 55 },
              ].map((r) => (
                <div key={r.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{r.name}</span>
                    <span className="text-gold">{r.pct}%</span>
                  </div>
                  <div className="h-2 bg-dark rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden mb-8">
          <div className="p-4 border-b border-dark-border">
            <h3 className="text-lg font-semibold">Recent Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-border text-sm text-stone-400">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Room</th>
                  <th className="text-left py-3 px-4">Team</th>
                  <th className="text-left py-3 px-4">Players</th>
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => (
                  <tr key={b.id} className="border-b border-dark-border/50 hover:bg-dark/30 transition-colors">
                    <td className="py-3 px-4 text-sm font-mono text-gold">{b.id}</td>
                    <td className="py-3 px-4 text-sm">{b.room}</td>
                    <td className="py-3 px-4 text-sm">{b.team}</td>
                    <td className="py-3 px-4 text-sm text-stone-400">{b.players}</td>
                    <td className="py-3 px-4 text-sm text-stone-400">{b.time}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColor[b.status]}`}>{b.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
          <div className="p-4 border-b border-dark-border">
            <h3 className="text-lg font-semibold">Top Escape Times</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-border text-sm text-stone-400">
                  <th className="text-left py-3 px-4">Rank</th>
                  <th className="text-left py-3 px-4">Team</th>
                  <th className="text-left py-3 px-4">Room</th>
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr key={entry.rank} className="border-b border-dark-border/50 hover:bg-dark/30 transition-colors">
                    <td className="py-3 px-4">
                      <span className={`text-lg font-bold ${entry.rank <= 3 ? 'text-gold' : 'text-stone-500'}`}>#{entry.rank}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold">{entry.team}</td>
                    <td className="py-3 px-4 text-sm text-stone-400">{entry.room}</td>
                    <td className="py-3 px-4 text-gold font-mono font-bold">{entry.time}</td>
                    <td className="py-3 px-4 text-sm text-stone-500">{entry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
