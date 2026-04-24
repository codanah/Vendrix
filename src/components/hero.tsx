"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, Zap, Users, Clock } from "lucide-react";

const WA = "https://wa.me/51929741557?text=Hola%20Vendrix%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20m%C3%A1quinas%20para%20mi%20empresa.";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-white flex items-center overflow-hidden"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #18181b 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large radial glow — top right (profundidad tech) */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[780px] h-[780px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Secondary glow — center left (balance) */}
      <div
        className="pointer-events-none absolute top-1/2 -left-60 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full pt-28 pb-16 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

          {/* ── Left: content ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col gap-7 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="inline-flex items-center gap-2 bg-red-600/8 border border-red-600/15 text-red-600 text-sm font-semibold px-4 py-2 rounded-full w-fit"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              <Zap size={13} className="fill-red-600" />
              Smart Vending · Lima, Perú
            </motion.div>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-zinc-950 leading-[1.06] tracking-tight">
              El bienestar de tu{" "}
              <span className="text-red-600">equipo</span>
              <br className="hidden sm:block" />
              {" "}a un toque.
            </h1>

            {/* Sub */}
            <p className="text-lg text-zinc-700 leading-relaxed max-w-lg">
              Instalamos máquinas expendedoras inteligentes en tu empresa.
              Snacks, bebidas y café premium disponibles{" "}
              <span className="font-bold text-zinc-950" style={{ fontFamily: "var(--font-geist-mono)" }}>
                24/7
              </span>{" "}
              — sin costo de instalación, sin contratos inflexibles.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-sm px-7 py-4 rounded-full shadow-xl shadow-red-600/25 transition-colors duration-150"
              >
                Solicitar máquina gratis
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#beneficios"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-sm px-7 py-4 rounded-full transition-colors duration-150"
              >
                Ver beneficios
                <ChevronDown size={15} />
              </motion.a>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.55 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-zinc-500"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              <span className="flex items-center gap-1.5">
                <Users size={13} className="text-red-600" />
                <span className="font-bold text-zinc-800">+50</span> empresas activas
              </span>
              <span className="hidden sm:block w-px h-4 bg-zinc-200" />
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-red-600" />
                Instalación en <span className="font-bold text-zinc-800 ml-1">&lt; 48 h</span>
              </span>
              <span className="hidden sm:block w-px h-4 bg-zinc-200" />
              <span className="flex items-center gap-1.5">
                <Zap size={13} className="text-red-600" />
                Costo instalación: <span className="font-bold text-zinc-800 ml-1">S/ 0</span>
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: machine visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="relative flex items-end justify-center order-1 lg:order-2 h-[340px] md:h-[420px] lg:h-[580px]"
          >
            {/* Soft red glow under machine */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-red-500/8 blur-3xl rounded-full" />

            {/* Floating machine */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[260px] md:w-[300px] lg:w-[340px] h-full"
            >
              <Image
                src="/images/maquina-snack-glazer.png"
                alt="Máquina Vendrix Glazer GF-EXR610MB"
                fill
                priority
                unoptimized
                className="object-contain object-bottom"
                sizes="(max-width:768px) 260px, (max-width:1024px) 300px, 340px"
              />
            </motion.div>

            {/* Floating badge — capacity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute top-8 left-0 lg:-left-6 bg-white border border-zinc-100 shadow-xl rounded-2xl px-4 py-3"
            >
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Capacidad</p>
              <p className="text-2xl font-black text-zinc-950 leading-none mt-0.5">
                420 <span className="text-sm font-semibold text-zinc-500">productos</span>
              </p>
            </motion.div>

            {/* Floating badge — cost */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="absolute bottom-16 right-0 lg:-right-4 bg-red-600 shadow-xl shadow-red-600/30 rounded-2xl px-4 py-3"
            >
              <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Instalación</p>
              <p className="text-2xl font-black text-white leading-none mt-0.5">S/ 0</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
