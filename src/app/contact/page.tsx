'use client';

import { useState } from 'react';

const locations = [
  { name: 'Downtown Flagship', address: '123 Mystery Lane, Suite 7, Puzzletown, PT 90210' },
  { name: 'Westside', address: '456 Cipher Blvd, Puzzletown, PT 90211' },
  { name: 'Northgate Mall', address: '789 Riddle Way, 2nd Floor, Puzzletown, PT 90212' },
  { name: 'Eastport', address: '321 Clue Court, Puzzletown, PT 90213' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-gold">Touch</span>
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Questions, corporate inquiries, or just want to say hi? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="bg-dark-card border border-gold/30 rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-green-400">&#10003;</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
              <p className="text-stone-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-stone-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-400 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-400 mb-2">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
                >
                  <option value="">Select a topic</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="giftcards">Gift Cards</option>
                  <option value="feedback">Feedback</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-stone-400 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gold text-dark font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Direct Contact */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-gold mb-4">Contact Details</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-stone-400">Phone</p>
                <p className="font-semibold">(555) ENIGMA-00 &middot; (555) 364-4620</p>
              </div>
              <div>
                <p className="text-stone-400">Email</p>
                <p className="font-semibold">info@enigmaescaperooms.com</p>
              </div>
              <div>
                <p className="text-stone-400">Corporate Events</p>
                <p className="font-semibold">events@enigmaescaperooms.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-gold mb-4">Hours of Operation</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-400">Monday – Thursday</span>
                <span>10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Friday – Saturday</span>
                <span>10:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Sunday</span>
                <span>11:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-gold mb-4">Our Locations</h2>
            <div className="space-y-3">
              {locations.map((loc) => (
                <div key={loc.name} className="border-b border-dark-border/50 pb-3 last:border-0 last:pb-0">
                  <p className="font-semibold text-sm">{loc.name}</p>
                  <p className="text-stone-400 text-xs">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 border border-dark-border rounded-xl h-48 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl opacity-30">&#128205;</span>
              <p className="text-stone-500 text-sm mt-2">Interactive map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
