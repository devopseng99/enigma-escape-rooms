'use client';

import { useState } from 'react';

const rooms = [
  { name: 'The Pharaoh\'s Tomb', price: 35, players: '2–6' },
  { name: 'Cyberpunk Lab 2077', price: 42, players: '3–8' },
  { name: 'The Haunted Manor', price: 32, players: '2–6' },
  { name: 'Prison Break', price: 30, players: '4–10' },
  { name: 'Submarine Crisis', price: 35, players: '2–6' },
  { name: 'The Wizard\'s Tower', price: 28, players: '2–8' },
];

const timeSlots = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [playerCount, setPlayerCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const room = rooms.find(r => r.name === selectedRoom);
  const totalPrice = room ? room.price * playerCount : 0;

  const canProceed = () => {
    if (step === 1) return selectedRoom !== '';
    if (step === 2) return selectedDate !== '' && selectedTime !== '' && playerCount >= 2;
    if (step === 3) return name !== '' && email !== '';
    return false;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your <span className="text-gold">Escape</span></h1>
        <p className="text-stone-400">Choose your room, pick a time, and get ready for an unforgettable adventure.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= s ? 'bg-gold text-dark' : 'bg-dark-card border border-dark-border text-stone-500'
            }`}>
              {s}
            </div>
            {s < 4 && <div className={`w-12 h-0.5 ${step > s ? 'bg-gold' : 'bg-dark-border'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Select Room */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Choose Your Room</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rooms.map((r) => (
              <button
                key={r.name}
                onClick={() => setSelectedRoom(r.name)}
                className={`text-left p-4 rounded-xl border transition-colors ${
                  selectedRoom === r.name
                    ? 'border-gold bg-gold/10'
                    : 'border-dark-border hover:border-gold/30'
                }`}
              >
                <div className="font-bold text-lg">{r.name}</div>
                <div className="text-sm text-stone-400">{r.players} players &middot; ${r.price}/person</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Date & Time */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Select Date &amp; Time</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-stone-400 mb-2">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-2">Time Slot</label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 rounded-lg text-sm font-medium transition-colors ${
                      selectedTime === t ? 'bg-gold text-dark' : 'bg-dark-card border border-dark-border hover:border-gold/30'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-2">Number of Players</label>
              <input
                type="number"
                min={2}
                max={10}
                value={playerCount}
                onChange={(e) => setPlayerCount(parseInt(e.target.value) || 2)}
                className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-stone-400 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-2">Phone (optional)</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-stone-200 focus:border-gold focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-green-400">&#10003;</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 max-w-md mx-auto text-left space-y-2">
            <p><span className="text-stone-400">Room:</span> <span className="text-gold">{selectedRoom}</span></p>
            <p><span className="text-stone-400">Date:</span> {selectedDate}</p>
            <p><span className="text-stone-400">Time:</span> {selectedTime}</p>
            <p><span className="text-stone-400">Players:</span> {playerCount}</p>
            <p><span className="text-stone-400">Name:</span> {name}</p>
            <p><span className="text-stone-400">Email:</span> {email}</p>
            <div className="border-t border-dark-border pt-2 mt-2">
              <p className="text-lg font-bold">Total: <span className="text-gold">${totalPrice}</span></p>
            </div>
          </div>
          <p className="text-stone-400 mt-6 text-sm">A confirmation email has been sent to {email}</p>
        </div>
      )}

      {/* Price Calculator */}
      {step !== 4 && (
        <div className="mt-8 bg-dark-card border border-dark-border rounded-xl p-4 flex items-center justify-between">
          <div className="text-sm text-stone-400">
            {selectedRoom ? (
              <span>{selectedRoom} &middot; {playerCount} players</span>
            ) : (
              <span>Select a room to see pricing</span>
            )}
          </div>
          <div className="text-2xl font-bold text-gold">${totalPrice}</div>
        </div>
      )}

      {/* Navigation */}
      {step < 4 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="px-6 py-3 border border-dark-border rounded-lg text-stone-400 hover:text-gold hover:border-gold/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="px-6 py-3 bg-gold text-dark font-bold rounded-lg hover:bg-gold-light disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            {step === 3 ? 'Confirm Booking' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
