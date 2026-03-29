import Link from 'next/link';

const rooms = [
  {
    name: 'The Pharaoh\'s Tomb',
    difficulty: 'Hard',
    players: '2–6',
    duration: '60 min',
    price: '$35/person',
    description: 'Descend into an ancient Egyptian tomb. Decode hieroglyphics, avoid traps, and find the pharaoh\'s treasure before the chamber seals forever.',
    gradient: 'from-amber-800 to-yellow-900',
  },
  {
    name: 'Cyberpunk Lab 2077',
    difficulty: 'Expert',
    players: '3–8',
    duration: '75 min',
    price: '$42/person',
    description: 'A rogue AI has locked down the lab. Hack terminals, bypass security protocols, and shut down the mainframe before it launches a cyberattack.',
    gradient: 'from-cyan-800 to-blue-900',
  },
  {
    name: 'The Haunted Manor',
    difficulty: 'Medium',
    players: '2–6',
    duration: '60 min',
    price: '$32/person',
    description: 'Trapped inside a Victorian mansion with restless spirits. Solve the mystery of the manor\'s dark past to lift the curse and escape.',
    gradient: 'from-purple-800 to-indigo-900',
  },
  {
    name: 'Prison Break',
    difficulty: 'Hard',
    players: '4–10',
    duration: '60 min',
    price: '$30/person',
    description: 'Wrongfully imprisoned, you must work together to pick locks, find hidden passages, and execute a daring jailbreak.',
    gradient: 'from-stone-700 to-stone-900',
  },
  {
    name: 'Submarine Crisis',
    difficulty: 'Medium',
    players: '2–6',
    duration: '60 min',
    price: '$35/person',
    description: 'Your submarine is sinking. Repair critical systems, navigate underwater hazards, and surface before the oxygen runs out.',
    gradient: 'from-teal-800 to-emerald-900',
  },
  {
    name: 'The Wizard\'s Tower',
    difficulty: 'Easy',
    players: '2–8',
    duration: '45 min',
    price: '$28/person',
    description: 'Perfect for beginners and families! Cast spells, brew potions, and solve magical riddles in a whimsical wizard\'s lair.',
    gradient: 'from-violet-800 to-fuchsia-900',
  },
];

const difficultyColor: Record<string, string> = {
  Easy: 'text-green-400 border-green-400/30',
  Medium: 'text-gold border-gold/30',
  Hard: 'text-orange-400 border-orange-400/30',
  Expert: 'text-danger border-danger/30',
};

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gold">Escape Rooms</span></h1>
        <p className="text-stone-400 max-w-2xl mx-auto">Choose your adventure. Each room features original storylines, hand-crafted puzzles, and Hollywood-quality set design.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.name} className="border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors group">
            <div className={`h-48 bg-gradient-to-br ${room.gradient} flex items-center justify-center`}>
              <span className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity">🔐</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <span className={`text-xs px-2 py-1 border rounded-full ${difficultyColor[room.difficulty]}`}>{room.difficulty}</span>
              </div>
              <p className="text-stone-400 text-sm mb-4">{room.description}</p>
              <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                <span>{room.players} players</span>
                <span>{room.duration}</span>
                <span className="text-gold font-semibold">{room.price}</span>
              </div>
              <Link href="/booking" className="block text-center py-2 bg-gold/10 text-gold rounded-lg hover:bg-gold/20 transition-colors font-semibold text-sm">
                Book This Room
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Room <span className="text-gold">Comparison</span></h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left py-3 px-4 text-gold">Room</th>
                <th className="text-left py-3 px-4 text-gold">Difficulty</th>
                <th className="text-left py-3 px-4 text-gold">Players</th>
                <th className="text-left py-3 px-4 text-gold">Duration</th>
                <th className="text-left py-3 px-4 text-gold">Price</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.name} className="border-b border-dark-border/50 hover:bg-dark-card transition-colors">
                  <td className="py-3 px-4 font-semibold">{room.name}</td>
                  <td className="py-3 px-4"><span className={difficultyColor[room.difficulty]}>{room.difficulty}</span></td>
                  <td className="py-3 px-4 text-stone-400">{room.players}</td>
                  <td className="py-3 px-4 text-stone-400">{room.duration}</td>
                  <td className="py-3 px-4 text-gold">{room.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
