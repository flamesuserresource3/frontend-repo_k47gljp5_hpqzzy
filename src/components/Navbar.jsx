import { useState } from 'react';
import { Menu, X, GraduationCap, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Roles', href: '#roles' },
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 bg-gray-900/70 border-b border-gray-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-yellow-400">
          <GraduationCap className="h-6 w-6" />
          <span className="font-semibold tracking-tight">Aurum LMS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
              {l.label}
            </a>
          ))}
          <button className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 border border-yellow-400/30 px-4 py-2 text-sm transition">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden text-gray-200">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-800 bg-gray-900/90"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-200 hover:text-yellow-400"
                >
                  {l.label}
                </a>
              ))}
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-yellow-500 text-gray-900 px-4 py-2 font-medium">
                <User className="h-4 w-4" /> Sign in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
