"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-99999 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,#081240 0%,#0D1F5C 45%,#1A3A8F 100%)",
          }}
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-175 w-175 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(74,159,232,.18) 0%, transparent 70%)",
              transform: "translate(-50%,-50%)",
            }}
          />

          {/* Network Nodes */}
          {[...Array(40)].map((_, i) => (
            <motion.span
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.05,
              }}
              className="absolute rounded-full bg-sky-400"
              style={{
                width: 4,
                height: 4,
                left: `${(i * 37.5) % 100}%`,
                top: `${(i * 61.7) % 100}%`,
              }}
            />
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-10 rounded-full border border-sky-400/10"
              />

              <svg width="160" height="180" viewBox="0 0 512 512">
                <defs>
                  <linearGradient
                    id="shield"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#0B56D0" />
                    <stop offset="100%" stopColor="#063DA0" />
                  </linearGradient>
                </defs>

                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: 1,
                  }}
                  d="M256 40L420 120V250C420 360 350 445 256 480C162 445 92 360 92 250V120L256 40Z"
                  fill="url(#shield)"
                  stroke="#4A9FE8"
                  strokeWidth="4"
                />

                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 }}
                  cx="256"
                  cy="180"
                  r="18"
                  fill="white"
                />

                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 }}
                  cx="196"
                  cy="285"
                  r="18"
                  fill="white"
                />

                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8 }}
                  cx="316"
                  cy="285"
                  r="18"
                  fill="white"
                />

                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1.7,
                  }}
                  d="M256 180L196 285H316L256 180Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Brand */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2,
              }}
              className="mt-8 text-6xl font-bold text-white"
            >
              INSURO
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                letterSpacing: "0.8em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.35em",
              }}
              transition={{
                delay: 2.2,
              }}
              className="text-sky-400 mt-2 uppercase"
            >
              AFRICA
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.5,
              }}
              className="mt-6 text-sm tracking-[0.3em] text-white/40 uppercase"
            >
              Building the Systems Powering Africa
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}