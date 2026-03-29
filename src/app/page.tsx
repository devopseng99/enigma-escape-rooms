import Link from 'next/link';

const stats = [
  { value: '50,000+', label: 'Players Escaped' },
  { value: '12', label: 'Themed Rooms' },
  { value: '4', label: 'Locations' },
  { value: '4.9★', label: 'Average Rating' },
];

const highlights = [
  {
    title: 'Themed Puzzle Rooms',
    description: 'From ancient tombs to futuristic labs — each room is a fully immersive world with original storylines and custom-built puzzles.',
    gradient: 'from-gold/20 to-amber-900/20',
  },
  {
    title: 'Team Building Events',
    description: 'Corporate packages with facilitated debriefs, competition scoring, and catering options for groups of 10–200.',
    gradient: 'from-red-900/20 to-orange-900/20',
  },
  {
    title: 'Online Hint System',
    description: 'Our proprietary clue system lets your game master deliver perfectly-timed hints without breaking immersion.',
    gradient: 'from-emerald-900/20 to-teal-900/20',
  },
  {
    title: 'Gift Cards & Vouchers',
    description: 'Give the gift of adventure. Digital and physical gift cards available for any occasion.',
    gradient: 'from-purple-900/20 to-indigo-900/20',
  },
  {
    title: 'Live Leaderboard',
    description: 'Compete for the fastest escape time. Top teams are immortalized on our hall-of-fame leaderboard.',
    gradient: 'from-blue-900/20 to-cyan-900/20',
  },
  {
    title: 'Private Bookings',
    description: 'Exclusive room access for birthdays, date nights, and special celebrations with custom theming available.',
    gradient: 'from-pink-900/20 to-rose-900/20',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-stone-900 to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-sm mb-6">
            60 Minutes. One Way Out.
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Can You <span className="text-gold">Crack the Code</span> Before Time Runs Out?
          </h1>
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10">
            Immersive escape room adventures across 4 locations. Solve puzzles, uncover mysteries, and race the clock with your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="px-8 py-4 bg-gold hover:bg-gold-light text-dark font-bold rounded-lg transition-colors text-lg">
              Book Your Escape
            </Link>
            <Link href="/services" className="px-8 py-4 border border-gold/40 text-gold hover:bg-gold/10 font-bold rounded-lg transition-colors text-lg">
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-dark-border bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-stone-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-gold">Enigma</span>?</h2>
          <p className="text-stone-400 max-w-xl mx-auto">More than just locked rooms — we craft unforgettable experiences that challenge your mind and thrill your senses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className={`bg-gradient-to-br ${item.gradient} border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors`}>
              <h3 className="text-xl font-bold text-gold mb-2">{item.title}</h3>
              <p className="text-stone-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Ready to Test Your Wits?</h2>
          <p className="text-dark/70 mb-8 text-lg">Book your team&apos;s escape today and see if you have what it takes.</p>
          <Link href="/booking" className="inline-block px-8 py-4 bg-dark text-gold font-bold rounded-lg hover:bg-dark-card transition-colors text-lg">
            Reserve Your Spot
          </Link>
        </div>
      </section>
    </div>
  );
}
