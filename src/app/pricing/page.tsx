import Link from 'next/link';

const tiers = [
  {
    name: 'Standard',
    price: '$28',
    per: 'per person',
    description: 'Perfect for first-timers and casual adventurers.',
    features: [
      '45–60 minute room access',
      'Up to 6 players',
      'Standard difficulty rooms',
      'Game master guidance',
      'Group photo at the end',
      'Leaderboard entry',
    ],
    notIncluded: [
      'Private room guarantee',
      'Extended time options',
      'Catering packages',
    ],
    gradient: 'from-stone-700 to-stone-900',
    cta: 'Book Standard',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$38',
    per: 'per person',
    description: 'Our most popular tier — the full Enigma experience.',
    features: [
      '60–75 minute room access',
      'Up to 8 players',
      'All rooms including Expert',
      'Priority game master',
      'Group photo + digital package',
      'Leaderboard entry',
      'Private room guarantee',
      'Extended 15-min bonus round',
    ],
    notIncluded: [
      'Catering packages',
    ],
    gradient: 'from-gold-dark to-amber-900',
    cta: 'Book Premium',
    popular: true,
  },
  {
    name: 'Corporate',
    price: '$55',
    per: 'per person',
    description: 'Team building with full event coordination.',
    features: [
      '75–90 minute room access',
      'Up to 200 players (multi-room)',
      'All rooms including Expert',
      'Dedicated event coordinator',
      'Professional photography',
      'Leaderboard + competition scoring',
      'Private venue access',
      'Extended time + bonus challenges',
      'Catering & refreshments',
    ],
    notIncluded: [],
    gradient: 'from-purple-800 to-indigo-900',
    cta: 'Contact Sales',
    popular: false,
  },
];

const addOns = [
  { name: 'Extra 15 Minutes', price: '$5/person', description: 'Need more time? Add a bonus round.' },
  { name: 'Professional Photos', price: '$25/group', description: 'High-res digital photos of your adventure.' },
  { name: 'Gift Card', price: 'From $28', description: 'Physical or digital gift cards for any occasion.' },
  { name: 'Catering Package', price: '$15/person', description: 'Pizza, snacks, and drinks for your group.' },
];

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Transparent <span className="text-gold">Pricing</span>
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          No hidden fees. No surprises. Just unforgettable experiences at every level.
        </p>
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative border rounded-xl overflow-hidden ${
              tier.popular ? 'border-gold' : 'border-dark-border'
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-gold text-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
            )}
            <div className={`bg-gradient-to-br ${tier.gradient} p-6`}>
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <div className="mt-2">
                <span className="text-4xl font-bold text-gold">{tier.price}</span>
                <span className="text-stone-400 text-sm ml-1">{tier.per}</span>
              </div>
              <p className="text-stone-300 text-sm mt-2">{tier.description}</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
                {tier.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="mt-0.5">&#10007;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className={`block text-center py-3 rounded-lg font-bold transition-colors ${
                  tier.popular
                    ? 'bg-gold text-dark hover:bg-gold-light'
                    : 'bg-gold/10 text-gold hover:bg-gold/20'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Feature <span className="text-gold">Comparison</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left py-3 px-4 text-stone-400">Feature</th>
                <th className="text-center py-3 px-4 text-stone-400">Standard</th>
                <th className="text-center py-3 px-4 text-gold">Premium</th>
                <th className="text-center py-3 px-4 text-stone-400">Corporate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Room Access', '45–60 min', '60–75 min', '75–90 min'],
                ['Max Players', '6', '8', '200+'],
                ['Expert Rooms', '—', '✓', '✓'],
                ['Private Room', '—', '✓', '✓'],
                ['Bonus Round', '—', '✓', '✓'],
                ['Photography', 'Group photo', 'Digital package', 'Professional'],
                ['Catering', '—', '—', '✓'],
                ['Event Coordinator', '—', '—', '✓'],
                ['Competition Scoring', '—', '—', '✓'],
              ].map(([feature, std, prem, corp]) => (
                <tr key={feature} className="border-b border-dark-border/50 hover:bg-dark-card transition-colors">
                  <td className="py-3 px-4 font-medium">{feature}</td>
                  <td className="py-3 px-4 text-center text-stone-400">{std}</td>
                  <td className="py-3 px-4 text-center text-gold">{prem}</td>
                  <td className="py-3 px-4 text-center text-stone-400">{corp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add-ons */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-gold">Add-Ons</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {addOns.map((addon) => (
            <div key={addon.name} className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors">
              <h3 className="font-bold mb-1">{addon.name}</h3>
              <p className="text-gold font-semibold text-sm mb-2">{addon.price}</p>
              <p className="text-stone-400 text-sm">{addon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
