import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'ts-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Kurze Verzögerung damit die Seite erst lädt
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-xl"
        >
          <div className="bg-[#0a0a0a] text-white rounded-2xl p-5 shadow-2xl border border-white/10">
            <p className="text-sm leading-relaxed mb-4 text-white/80">
              Diese Website verwendet ausschließlich technisch notwendige Cookies (Session-Storage für Ihre Einstellungen).{' '}
              <strong className="text-white">Kein Tracking, keine Analyse, keine Werbung.</strong>{' '}
              <Link
                to="/datenschutz"
                className="underline underline-offset-2 hover:text-[#2a9d8f] transition-colors"
              >
                Datenschutzerklärung
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 bg-white text-[#0a0a0a] text-sm font-medium py-2.5 rounded-full hover:bg-[#2a9d8f] hover:text-white transition-colors"
              >
                Verstanden
              </button>
              <button
                onClick={decline}
                className="px-5 text-sm text-white/50 hover:text-white/80 transition-colors border border-white/10 rounded-full"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
