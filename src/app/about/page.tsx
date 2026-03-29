const team = [
  {
    name: 'Marcus Chen',
    role: 'Founder & Lead Puzzle Architect',
    bio: 'Former magician turned escape room visionary. Marcus has designed over 50 original rooms across four countries.',
    gradient: 'from-gold to-amber-900',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    bio: 'Award-winning set designer from Hollywood. Elena brings cinematic production quality to every room.',
    gradient: 'from-purple-700 to-indigo-900',
  },
  {
    name: 'James Okafor',
    role: 'Head of Operations',
    bio: 'Hospitality industry veteran who ensures every guest has a seamless, five-star experience.',
    gradient: 'from-teal-700 to-emerald-900',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Technology Lead',
    bio: 'Builds our proprietary hint systems, IoT puzzles, and the tech that makes our rooms come alive.',
    gradient: 'from-cyan-700 to-blue-900',
  },
];

const values = [
  {
    title: 'Immersion Above All',
    description: 'Every detail matters — from the scent of the room to the texture of the props. We create worlds you can step into.',
  },
  {
    title: 'Accessible Challenge',
    description: 'Our rooms range from beginner-friendly to expert-level. Everyone deserves to feel the thrill of cracking a code.',
  },
  {
    title: 'Team First',
    description: 'Escape rooms are about collaboration, not individual brilliance. Our puzzles reward communication and teamwork.',
  },
  {
    title: 'Continuous Innovation',
    description: 'We retire and replace rooms annually, invest in new technology, and constantly push the boundaries of what an escape room can be.',
  },
];

const milestones = [
  { year: '2016', event: 'Founded in a single downtown location with 2 rooms.' },
  { year: '2018', event: 'Expanded to 3 locations and introduced the online hint system.' },
  { year: '2020', event: 'Launched virtual escape rooms during the pandemic — served 10,000+ remote teams.' },
  { year: '2022', event: 'Opened our flagship 4th location with 5 rooms and a corporate event center.' },
  { year: '2024', event: 'Surpassed 50,000 players and won "Best Escape Room" at the Regional Entertainment Awards.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-stone-900 to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Story Behind <span className="text-gold">Enigma</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            What started as a passion project in a converted warehouse has grown into the region&apos;s most immersive escape room experience — 4 locations, 12 rooms, and 50,000+ adventurers later.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gold mb-4">Our Mission</h2>
          <p className="text-stone-300 text-lg">
            To create shared moments of wonder, challenge, and triumph. We believe the best adventures happen when people work together — and we build the worlds that make it possible.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our <span className="text-gold">Journey</span></h2>
        <div className="space-y-6">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-6 items-start">
              <div className="text-gold font-bold text-xl w-16 shrink-0">{m.year}</div>
              <div className="flex-1 bg-dark-card border border-dark-border rounded-lg p-4 text-stone-300 text-sm">
                {m.event}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What We <span className="text-gold">Stand For</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors">
              <h3 className="text-lg font-bold text-gold mb-2">{v.title}</h3>
              <p className="text-stone-400 text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet the <span className="text-gold">Team</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors">
              <div className={`h-40 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                <span className="text-5xl opacity-40">&#128100;</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gold text-sm mb-2">{member.role}</p>
                <p className="text-stone-400 text-xs">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications &amp; <span className="text-gold">Awards</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            'Regional Entertainment Award 2024',
            'Fire Safety Certified',
            'ADA Accessible All Locations',
            'TripAdvisor Travelers\' Choice',
          ].map((cert) => (
            <div key={cert} className="bg-dark-card border border-dark-border rounded-xl p-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-gold text-xl">&#9733;</span>
              </div>
              <p className="text-xs text-stone-300">{cert}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
