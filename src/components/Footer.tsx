import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-dark font-bold text-sm">E</div>
              <span className="text-xl font-bold text-gold">Enigma Escape Rooms</span>
            </div>
            <p className="text-sm text-stone-400">
              Immersive puzzle experiences across multiple locations. Can you crack the code before time runs out?
            </p>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><Link href="/services" className="hover:text-gold transition-colors">Our Rooms</Link></li>
              <li><Link href="/booking" className="hover:text-gold transition-colors">Book Now</Link></li>
              <li><Link href="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>123 Mystery Lane, Suite 7</li>
              <li>Puzzletown, PT 90210</li>
              <li>(555) ENIGMA-00</li>
              <li>info@enigmaescaperooms.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dark-border mt-8 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Enigma Escape Rooms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
