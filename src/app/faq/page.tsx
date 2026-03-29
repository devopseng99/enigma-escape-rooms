'use client';

import { useState } from 'react';

const sections = [
  {
    title: 'Booking & Reservations',
    items: [
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least 48 hours in advance, especially for weekends and holidays. Walk-ins are welcome but subject to availability.',
      },
      {
        q: 'Can I cancel or reschedule my booking?',
        a: 'Yes! Free cancellation up to 24 hours before your session. Rescheduling is always free and can be done online or by phone.',
      },
      {
        q: 'Do I need to book the entire room?',
        a: 'No — for Standard bookings, you may be grouped with other players. Premium and Corporate tiers guarantee a private room.',
      },
    ],
  },
  {
    title: 'The Experience',
    items: [
      {
        q: 'Are the rooms scary?',
        a: 'Most rooms are thrilling but not frightening. The Haunted Manor has mild horror elements and is rated PG-13. All other rooms are family-friendly.',
      },
      {
        q: 'What happens if we don\'t escape in time?',
        a: 'Your game master will walk you through the remaining puzzles so you still get the full story. No one leaves without closure!',
      },
      {
        q: 'Is there a minimum age requirement?',
        a: 'Players under 14 must be accompanied by an adult. The Wizard\'s Tower is specifically designed for families with children ages 6+.',
      },
    ],
  },
  {
    title: 'Groups & Corporate Events',
    items: [
      {
        q: 'How large of a group can you accommodate?',
        a: 'Our Corporate tier supports up to 200 players across multiple rooms simultaneously. We provide a dedicated event coordinator for groups over 20.',
      },
      {
        q: 'Do you offer team building facilitation?',
        a: 'Yes! Corporate packages include a facilitated debrief session where we analyze team dynamics, communication patterns, and leadership behaviors observed during the game.',
      },
      {
        q: 'Can we bring our own food and drinks?',
        a: 'Outside food is not permitted, but our Corporate and Premium packages include catering options. We also have a refreshment area in each location.',
      },
    ],
  },
  {
    title: 'Hints & Gameplay',
    items: [
      {
        q: 'How does the hint system work?',
        a: 'Your game master monitors your progress via cameras and can deliver hints through our in-room display system. You can request hints at any time — there\'s no penalty.',
      },
      {
        q: 'Are the puzzles all physical, or are there tech elements?',
        a: 'Our rooms blend physical puzzles (locks, hidden compartments) with technology (touch screens, RFID, sensors, and custom electronics). The Cyberpunk Lab is our most tech-heavy room.',
      },
      {
        q: 'Can we compete against other teams on the leaderboard?',
        a: 'Absolutely! Every team that escapes is timed and ranked on our public leaderboard. Top teams for each room are displayed in our lobby and online.',
      },
    ],
  },
  {
    title: 'Gift Cards & Special Occasions',
    items: [
      {
        q: 'Do you sell gift cards?',
        a: 'Yes! Digital gift cards are available instantly online. Physical gift cards can be purchased at any location and ship within 2 business days.',
      },
      {
        q: 'Can I host a birthday party at Enigma?',
        a: 'Absolutely! We offer private room bookings with optional decorations, cake, and a dedicated party host. Contact us for custom party packages.',
      },
      {
        q: 'Do gift cards expire?',
        a: 'Gift cards are valid for 12 months from the date of purchase and can be used at any of our four locations.',
      },
    ],
  },
  {
    title: 'Accessibility & Safety',
    items: [
      {
        q: 'Are your rooms wheelchair accessible?',
        a: 'All of our locations and rooms are ADA compliant and wheelchair accessible. Some puzzle interactions may require assistance — please contact us in advance so we can ensure the best experience.',
      },
      {
        q: 'What safety measures are in place?',
        a: 'All rooms have emergency exits, fire suppression systems, and live monitoring. You can leave the room at any time. Our staff is trained in first aid and emergency procedures.',
      },
      {
        q: 'Is there anything I should bring or wear?',
        a: 'Wear comfortable clothes and closed-toe shoes. Leave bags and phones in our secure lockers. We provide everything else you need!',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-dark-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-dark-card transition-colors"
      >
        <span className="font-medium pr-4">{q}</span>
        <span className={`text-gold text-xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-stone-400 text-sm">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="text-gold">Questions</span>
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Everything you need to know before your escape. Can&apos;t find your answer? Contact us directly.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold text-gold mb-4">{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
