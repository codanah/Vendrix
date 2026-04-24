"use client";

import { motion, type Variants } from "framer-motion";
import {
  CreditCard,
  Heart,
  Unlock,
  Zap,
  Banknote,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

/* ── Framer Motion variants ─────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ── Sub-components ─────────────────────────────────────────────── */

/** Eyebrow pill shared by the section header */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-red-600/10 text-red-600 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
      {children}
    </span>
  );
}

/** Reusable icon container for white/light cards */
function IconPill({
  children,
  variant = "red",
}: {
  children: React.ReactNode;
  variant?: "red" | "dark" | "white";
}) {
  const styles = {
    red: "bg-white/20 text-white",
    dark: "bg-white/10 text-white",
    white: "bg-red-600/10 text-red-600",
  };
  return (
    <span
      className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export function BentoBenefits() {
  return (
    <section
      className="bg-slate-50 py-24 px-4 sm:px-6"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          <Eyebrow>
            <Zap size={11} className="fill-red-600" />
            Por qué Vendrix
          </Eyebrow>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-2xl">
            Todo lo que tu empresa necesita,{" "}
            <span className="text-red-600">en un solo espacio</span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl leading-relaxed font-normal">
            Diseñamos cada detalle para que tus colaboradores tengan la mejor
            experiencia — sin fricciones, sin esperas, sin límites.
          </p>
        </motion.div>

        {/* ── Bento Grid ───────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >

          {/* ── Card 1 · FEATURED · Pagos — lg:col-span-2 ─────────── */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="
              lg:col-span-2 relative overflow-hidden
              bg-red-600 rounded-[2rem]
              p-8 flex flex-col justify-between gap-8
              shadow-2xl shadow-red-600/25
              transition-shadow duration-300 hover:shadow-red-600/35
              min-h-[280px]
            "
          >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-12 -top-12 w-56 h-56 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -right-4 -bottom-16 w-72 h-72 rounded-full bg-black/10" />

            {/* Top row */}
            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="flex flex-col gap-4 max-w-lg">
                <IconPill variant="red">
                  <CreditCard size={22} />
                </IconPill>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                    Pagos 100% Flexibles y Seguros
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white/75 leading-relaxed">
                    Aceptamos tarjeta y POS para una compra rápida. Nuestro
                    monedero inteligente CPI detecta billetes falsos y acepta
                    desde S/10 hasta S/100, entregando vuelto exacto en todas
                    las monedas.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment method pills */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {[
                { icon: <CreditCard size={13} />, label: "Tarjeta / POS" },
                { icon: <Banknote size={13} />, label: "Efectivo S/10–S/100" },
                { icon: <ShieldCheck size={13} />, label: "Anti-billetes falsos" },
                { icon: <Smartphone size={13} />, label: "Monedero CPI" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
                >
                  {icon}
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Card 2 · Bienestar ──────────────────────────────────── */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="
              bg-white rounded-[2rem]
              p-8 flex flex-col gap-5
              border border-slate-100
              shadow-lg shadow-slate-200/60
              transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/80
              min-h-[280px]
            "
          >
            <IconPill variant="white">
              <Heart size={22} />
            </IconPill>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                Cuidamos a tu Equipo
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Aportamos al bienestar de tus colaboradores con una amplia gama
                de snacks saludables, nutritivos y café premium, siempre a
                costos accesibles.
              </p>
            </div>
            {/* Decorative stat */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              <p className="text-3xl font-black text-slate-900 leading-none">
                +200
                <span className="text-base font-semibold text-slate-400 ml-1.5">
                  productos disponibles
                </span>
              </p>
            </div>
          </motion.div>

          {/* ── Card 3 · Variedad — dark ────────────────────────────── */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="
              bg-zinc-900 rounded-[2rem]
              p-8 flex flex-col gap-5
              shadow-xl shadow-zinc-900/30
              transition-shadow duration-300 hover:shadow-2xl hover:shadow-zinc-900/40
              min-h-[260px]
            "
          >
            <IconPill variant="dark">
              <Unlock size={22} />
            </IconPill>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                Cero Amarres, 100% Variedad
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                No estamos atados a una sola marca. Elegimos y combinamos los
                mejores snacks tradicionales, opciones saludables y café
                nacional e importado según las necesidades exactas de tu
                espacio.
              </p>
            </div>
            {/* Tag cloud */}
            <div className="mt-auto flex flex-wrap gap-2">
              {["Snacks", "Saludable", "Café Premium", "Importado", "Nacional"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-white/50 bg-white/8 px-3 py-1 rounded-full border border-white/8"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* ── Card 4 · Soporte — lg:col-span-2 ───────────────────── */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="
              lg:col-span-2 relative overflow-hidden
              bg-white rounded-[2rem]
              p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8
              border border-slate-100
              shadow-lg shadow-slate-200/60
              transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/80
              min-h-[220px]
            "
          >
            {/* Big stat */}
            <div className="shrink-0 flex flex-col items-start sm:items-center justify-center bg-slate-50 rounded-2xl px-8 py-6 border border-slate-100 self-stretch sm:self-auto">
              <p className="text-5xl md:text-6xl font-black text-red-600 leading-none tabular-nums"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                &lt;2h
              </p>
              <p className="text-xs text-slate-400 font-medium mt-1 text-center">
                tiempo de respuesta
              </p>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3">
              <IconPill variant="white">
                <Zap size={22} />
              </IconPill>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                Respuesta Inmediata
              </h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-md">
                Servicio continuo con atención ultra-rápida ante cualquier falla
                técnica. Garantizamos operación constante para que tu equipo
                nunca se quede sin opciones.
              </p>
            </div>

            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-red-600/4" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
