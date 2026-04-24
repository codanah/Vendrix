"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Zap, PackageCheck } from "lucide-react";

const ITEMS = [
  { icon: <MapPin size={14} />,      text: "Lima y Callao"          },
  { icon: <Clock size={14} />,       text: "Operación 24 / 7"       },
  { icon: <Zap size={14} />,         text: "Respuesta en < 2 h"     },
  { icon: <PackageCheck size={14} />, text: "Instalación gratuita"   },
];

export function CoverageBanner() {
  return (
    <div
      className="bg-zinc-950 border-b border-white/6 py-3 px-4 overflow-hidden"
      style={{ fontFamily: "var(--font-geist-mono)" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
      >
        {ITEMS.map(({ icon, text }, i) => (
          <span
            key={text}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/50"
          >
            <span className="text-red-500">{icon}</span>
            {text}
            {i < ITEMS.length - 1 && (
              <span className="hidden sm:inline ml-8 w-px h-3 bg-white/10" />
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
