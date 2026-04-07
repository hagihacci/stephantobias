import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function DecisionGraph() {
  const [cycle, setCycle] = useState(0);
  const [started, setStarted] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    setStarted(false);
    setShowBadge(false);
    setShowCheck(false);
    setConfidence(0);

    const t0 = setTimeout(() => setStarted(true), 350);

    const t1 = setTimeout(() => {
      setShowBadge(true);
      const start = Date.now();
      const duration = 1600;
      const interval = setInterval(() => {
        const p = Math.min((Date.now() - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setConfidence(parseFloat((eased * 98.4).toFixed(1)));
        if (p >= 1) clearInterval(interval);
      }, 16);
    }, 2800);

    const t2 = setTimeout(() => setShowCheck(true), 3500);

    // loop: pause 1.5s after completion, then restart
    const tLoop = setTimeout(() => setCycle(c => c + 1), 6500);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(tLoop); };
  }, [cycle]);

  const p = (delay: number, dur = 1.0) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: started ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: {
      pathLength: { delay, duration: dur, ease: 'easeInOut' as const },
      opacity: { delay, duration: 0.01 },
    },
  });

  const n = (delay: number) => ({
    initial: { opacity: 0, scale: 0.5 },
    animate: started ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 },
    transition: { delay, duration: 0.4, ease: [0.34, 1.4, 0.64, 1] as [number, number, number, number] },
  });

  // Layout
  const SX = 60;  const SY = 145; const R = 22;
  const EX = 680; const EY = 145;
  const U1 = { x: 185, y: 60,  w: 130, h: 38, label: 'Annahmen' };
  const U2 = { x: 390, y: 100, w: 148, h: 38, label: 'Wahrnehmung' };
  const L1 = { x: 185, y: 215, w: 130, h: 38 };
  const L2 = { x: 395, y: 192, w: 112, h: 38 };

  const cx = (r: { x: number; w: number }) => r.x + r.w / 2;
  const cy = (r: { y: number; h: number }) => r.y + r.h / 2;

  return (
    <svg viewBox="0 0 740 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible', maxHeight: '100%' }}>
      <defs>
        <filter id="badge-shadow" x="-20%" y="-40%" width="140%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#000" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* ── PATHS ── */}
      <motion.path
        d={`M${SX+R},${SY} C${SX+120},${SY} ${U1.x-50},${cy(U1)} ${U1.x},${cy(U1)}`}
        stroke="#a1a1aa" strokeWidth="1.5" fill="none" strokeLinecap="round"
        {...p(0.3, 1.1)}
      />
      <motion.path
        d={`M${SX+R},${SY} C${SX+120},${SY} ${L1.x-50},${cy(L1)} ${L1.x},${cy(L1)}`}
        stroke="#d4d4d8" strokeWidth="1.5" fill="none" strokeLinecap="round"
        {...p(0.4, 1.1)}
      />
      <motion.path
        d={`M${U1.x+U1.w},${cy(U1)} C${U1.x+U1.w+40},${cy(U1)} ${U2.x-40},${cy(U2)} ${U2.x},${cy(U2)}`}
        stroke="#a1a1aa" strokeWidth="1.5" fill="none" strokeLinecap="round"
        {...p(1.5, 0.85)}
      />
      <motion.path
        d={`M${L1.x+L1.w},${cy(L1)} C${L1.x+L1.w+40},${cy(L1)} ${L2.x-35},${cy(L2)} ${L2.x},${cy(L2)}`}
        stroke="#d4d4d8" strokeWidth="1.5" fill="none" strokeLinecap="round"
        {...p(1.6, 0.85)}
      />
      <motion.path
        d={`M${U2.x+U2.w},${cy(U2)} C${U2.x+U2.w+55},${cy(U2)} ${EX-80},${EY} ${EX-R},${EY}`}
        stroke="#a1a1aa" strokeWidth="1.5" fill="none" strokeLinecap="round"
        {...p(2.45, 0.9)}
      />
      <motion.path
        d={`M${L2.x+L2.w},${cy(L2)} C${L2.x+L2.w+60},${cy(L2)} ${EX-80},${EY} ${EX-R},${EY}`}
        stroke="#d4d4d8" strokeWidth="1.5" fill="none" strokeLinecap="round"
        {...p(2.55, 0.9)}
      />

      {/* ── NODES ── */}

      {/* Start */}
      <motion.g {...n(0)}>
        <circle cx={SX} cy={SY} r={R} fill="white" stroke="#0a0a0a" strokeWidth="2" />
        <text x={SX} y={SY + R + 16} textAnchor="middle" fill="#0a0a0a" fontSize="11" fontWeight="500"
              fontFamily="Inter Variable, Inter, sans-serif">Ausgangslage</text>
      </motion.g>

      {/* U1 */}
      <motion.g {...n(1.3)}>
        <rect x={U1.x} y={U1.y} width={U1.w} height={U1.h} rx="7"
              fill="white" stroke="#0a0a0a" strokeWidth="1.75" />
        <text x={cx(U1)} y={cy(U1) + 5} textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="600"
              fontFamily="Inter Variable, Inter, sans-serif">{U1.label}</text>
      </motion.g>

      {/* L1 dim */}
      <motion.g {...n(1.4)}>
        <rect x={L1.x} y={L1.y} width={L1.w} height={L1.h} rx="7"
              fill="#f4f4f5" stroke="#e4e4e7" strokeWidth="1.5" />
      </motion.g>

      {/* U2 */}
      <motion.g {...n(2.3)}>
        <rect x={U2.x} y={U2.y} width={U2.w} height={U2.h} rx="7"
              fill="white" stroke="#0a0a0a" strokeWidth="1.75" />
        <text x={cx(U2)} y={cy(U2) + 5} textAnchor="middle" fill="#0a0a0a" fontSize="12" fontWeight="600"
              fontFamily="Inter Variable, Inter, sans-serif">{U2.label}</text>
      </motion.g>

      {/* L2 dim */}
      <motion.g {...n(2.4)}>
        <rect x={L2.x} y={L2.y} width={L2.w} height={L2.h} rx="7"
              fill="#f4f4f5" stroke="#e4e4e7" strokeWidth="1.5" />
      </motion.g>

      {/* End circle + checkmark */}
      <motion.g {...n(3.2)}>
        <circle cx={EX} cy={EY} r={R} fill="white" stroke="#0a0a0a" strokeWidth="2" />
        <text x={EX} y={EY + R + 16} textAnchor="middle" fill="#0a0a0a" fontSize="11" fontWeight="500"
              fontFamily="Inter Variable, Inter, sans-serif">Entscheidung</text>

        <AnimatePresence>
          {showCheck && (
            <motion.path
              d={`M${EX - 10},${EY + 1} L${EX - 3},${EY + 8} L${EX + 11},${EY - 8}`}
              stroke="#2a9d8f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{ pathLength: { duration: 0.4, ease: 'easeOut' }, opacity: { duration: 0.1 } }}
            />
          )}
        </AnimatePresence>
      </motion.g>

      {/* ── CONFIDENCE BADGE ── */}
      <AnimatePresence>
        {showBadge && (
          <motion.g
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="285" y="125" width="130" height="34" rx="8"
                    fill="white" stroke="#e4e4e7" strokeWidth="1"
                    filter="url(#badge-shadow)" />
              <text x="350" y="147" textAnchor="middle" fill="#0a0a0a" fontSize="11.5" fontWeight="600"
                    fontFamily="Inter Variable, Inter, sans-serif">
                {`Confidence: ${confidence}%`}
              </text>
            </motion.g>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}
