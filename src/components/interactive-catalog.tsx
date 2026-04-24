"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  CreditCard,
  Leaf,
  Coffee,
  List,
  Zap,
  Monitor,
  ArrowRight,
  Package,
  GlassWater,
  Star,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type MachineId = "snacks" | "coffee";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface BrandItem {
  name: string;
  icon: React.ReactNode;
}

/* ─────────────────────────────────────────────
   Content data
───────────────────────────────────────────── */
const SNACKS_FEATURES: Feature[] = [
  {
    icon: <Layers size={17} />,
    title: "Capacidad Masiva",
    desc: "Hasta 420 productos en 6 bandejas regulables con 60 espirales configurables para todo tipo de formatos.",
  },
  {
    icon: <ShieldCheck size={17} />,
    title: "Tecnología Vend Assure™",
    desc: "Sensores de caída que garantizan la entrega del producto o la devolución inmediata del crédito.",
  },
  {
    icon: <CreditCard size={17} />,
    title: "Pagos Flexibles",
    desc: "Monedero CPI inteligente, billeteras digitales y billetes desde S/10 hasta S/100 con detección de falsos.",
  },
  {
    icon: <Leaf size={17} />,
    title: "Eco-Friendly R290",
    desc: "Refrigeración avanzada con gas ecológico R290 y aislamiento térmico de 40 mm de grosor.",
  },
];

const COFFEE_FEATURES: Feature[] = [
  {
    icon: <Coffee size={17} />,
    title: "Molienda al Instante",
    desc: "Molino integrado para grano fresco. Extracción a 92 °C para un sabor de cafetería en cada taza.",
  },
  {
    icon: <List size={17} />,
    title: "Menú Extenso",
    desc: "Americano, Expreso, Latte, Cappuccino, Mocha y más de 20 combinaciones. Personalizable a tu equipo.",
  },
  {
    icon: <Zap size={17} />,
    title: "Rapidez Operativa",
    desc: "Un Expreso perfecto listo en solo 45 segundos. Cero colas, máxima productividad.",
  },
  {
    icon: <Monitor size={17} />,
    title: "Interfaz Inteligente",
    desc: 'Pantalla táctil HD de 21.5" para una experiencia premium. Intuitiva, moderna, sin fricciones.',
  },
];

const BRAND_ITEMS: BrandItem[] = [
  { name: "Coca-Cola",     icon: <GlassWater size={12} className="text-red-400"    /> },
  { name: "Inca Kola",     icon: <GlassWater size={12} className="text-yellow-400" /> },
  { name: "Gatorade",      icon: <GlassWater size={12} className="text-blue-400"   /> },
  { name: "Doritos",       icon: <Package    size={12} className="text-orange-400" /> },
  { name: "Oreo",          icon: <Package    size={12} className="text-slate-500"  /> },
  { name: "Quinoa Chips",  icon: <Package    size={12} className="text-green-500"  /> },
  { name: "Casino",        icon: <Star       size={12} className="text-yellow-400" /> },
  { name: "Sublime",       icon: <Star       size={12} className="text-purple-400" /> },
  { name: "Ciel",          icon: <GlassWater size={12} className="text-sky-400"    /> },
];

/* ─────────────────────────────────────────────
   Framer Motion variants
───────────────────────────────────────────── */
const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.38, ease: "easeOut" } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.22, ease: "easeIn"  } },
};

const listVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const listItemVariants: Variants = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.32, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   FeatureRow
───────────────────────────────────────────── */
function FeatureRow({ icon, title, desc }: Feature) {
  return (
    <motion.li
      variants={listItemVariants}
      className="flex gap-4 pb-5 last:pb-0 border-b last:border-0 border-slate-100"
    >
      <span className="mt-0.5 w-9 h-9 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
        {icon}
      </span>
      <div>
        <p className="text-sm font-bold text-slate-800">{title}</p>
        <p className="text-sm text-slate-500 leading-relaxed mt-0.5">{desc}</p>
      </div>
    </motion.li>
  );
}

/* ─────────────────────────────────────────────
   SnacksMachinesVisual — two overlapping machines
───────────────────────────────────────────── */
function SnacksMachinesVisual() {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] bg-zinc-50 rounded-[1.75rem] overflow-hidden border border-zinc-100">
      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/60 to-transparent" />

      {/* TCN – back / right */}
      <motion.div
        className="absolute bottom-0 right-[4%] w-[44%] h-[88%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Image
          src="/images/maquina-snack-tcn.png"
          alt="Máquina snacks TCN"
          fill
          className="object-contain object-bottom opacity-80"
          sizes="(max-width:768px) 40vw, 22vw"
        />
      </motion.div>

      {/* Glazer – front / left */}
      <motion.div
        className="absolute bottom-0 left-[4%] w-[52%] h-[96%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/maquina-snack-glazer.png"
          alt="Máquina snacks Glazer"
          fill
          className="object-contain object-bottom"
          sizes="(max-width:768px) 48vw, 26vw"
          priority
        />
      </motion.div>

      {/* Model labels */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 whitespace-nowrap">
        {["Glazer Series", "TCN Series"].map((label) => (
          <span
            key={label}
            className="text-[11px] font-semibold text-zinc-500 bg-white/85 backdrop-blur-sm border border-zinc-200 px-2.5 py-1 rounded-full"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Online indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.45)]" />
        <span className="text-[11px] text-zinc-400 font-medium">Operativa 24/7</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CoffeeMachineVisual
───────────────────────────────────────────── */
function CoffeeMachineVisual() {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-[1.75rem] overflow-hidden border border-zinc-700/60">
      {/* Warm ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-40 bg-orange-500/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />

      {/* Machine image */}
      <motion.div
        className="absolute inset-x-0 bottom-0 mx-auto w-[68%] h-[92%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/maquina-cafe-tcn.png"
          alt="Máquina de café TCN Premium"
          fill
          className="object-contain object-bottom"
          sizes="(max-width:768px) 60vw, 30vw"
          priority
        />
      </motion.div>

      {/* Top badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 bg-orange-400/12 border border-orange-400/20 px-3 py-1.5 rounded-full">
          <Coffee size={10} />
          Café Premium Series
        </span>
      </div>

      {/* Spec pill bottom-right */}
      <div className="absolute bottom-4 right-4 text-right">
        <span className="text-[11px] font-semibold text-zinc-500 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 px-2.5 py-1 rounded-full">
          Pantalla táctil HD 21.5&quot;
        </span>
      </div>

      {/* Online indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.45)]" />
        <span className="text-[11px] text-zinc-500 font-medium">Operativa 24/7</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BrandChip
───────────────────────────────────────────── */
function BrandChip({ name, icon }: BrandItem) {
  return (
    <div className="flex items-center gap-2 shrink-0 bg-white border border-slate-200 text-slate-600 font-semibold text-sm px-5 py-3 rounded-full select-none cursor-default hover:border-slate-300 transition-colors duration-150">
      {icon}
      {name}
    </div>
  );
}

/* ─────────────────────────────────────────────
   InfiniteMarquee
───────────────────────────────────────────── */
function InfiniteMarquee({ brands }: { brands: BrandItem[] }) {
  const doubled = [...brands, ...brands];

  return (
    <>
      <style>{`
        @keyframes vendrixMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .vendrix-marquee {
          animation: vendrixMarquee 32s linear infinite;
          will-change: transform;
        }
        .vendrix-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="vendrix-marquee flex items-center gap-4 w-max py-1">
          {doubled.map((brand, i) => (
            <BrandChip key={`${brand.name}-${i}`} {...brand} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function InteractiveCatalog() {
  const [active, setActive] = useState<MachineId>("snacks");

  const isSnacks = active === "snacks";

  return (
    <section
      className="bg-slate-50 py-24 px-4 sm:px-6"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4"
        >
          <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            <Package size={11} />
            Catálogo Interactivo
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-2xl">
            La máquina correcta{" "}
            <span className="text-red-600">para cada espacio</span>
          </h2>

          <p className="text-base text-slate-500 max-w-xl leading-relaxed font-normal">
            Snacks para cualquier hora del día o café de calidad barista — tú
            decides. Nosotros instalamos, mantenemos y reabastecemos.
          </p>
        </motion.div>

        {/* ── Toggle + animated card ── */}
        <div className="flex flex-col items-center gap-8">

          {/* Vercel-style pill toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="inline-flex bg-white border border-slate-200 shadow-sm p-1 rounded-full gap-1"
          >
            {(
              [
                { id: "snacks" as MachineId, label: "Snacks & Bebidas",      icon: <Package size={14} /> },
                { id: "coffee" as MachineId, label: "Café Premium Barista",   icon: <Coffee  size={14} /> },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActive(opt.id)}
                className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150 cursor-pointer z-10 outline-none"
                style={{ color: active === opt.id ? "#fff" : "#64748b" }}
              >
                {active === opt.id && (
                  <motion.span
                    layoutId="catalog-toggle-pill"
                    className="absolute inset-0 bg-slate-900 rounded-full"
                    transition={{ type: "spring", stiffness: 440, damping: 36 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {opt.icon}
                  {opt.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Machine card */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Text column */}
                  <div className="flex flex-col justify-center gap-7 p-8 md:p-12 order-2 lg:order-1">
                    {/* Badge row */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span
                        className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                          isSnacks
                            ? "bg-red-600 text-white"
                            : "bg-amber-500 text-white"
                        }`}
                      >
                        {isSnacks ? "Más popular" : "Novedad"}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {isSnacks ? "TCN CSC-10G / Glazer GF-EXR610MB" : "TCN NCF-7N"}
                      </span>
                    </div>

                    {/* Title + description */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                        {isSnacks
                          ? "Alta Capacidad y Tecnología Antifraude"
                          : "La Experiencia de una Cafetería en tu Oficina"}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {isSnacks
                          ? "Diseñada para el ritmo real de las empresas. Stock alto, pagos flexibles y temperatura controlada para que nunca falte nada."
                          : "De grano fresco a taza en segundos. Un barista silencioso que trabaja las 24 horas sin quejarse."}
                      </p>
                    </div>

                    {/* Feature list with stagger */}
                    <motion.ul
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-col"
                    >
                      {(isSnacks ? SNACKS_FEATURES : COFFEE_FEATURES).map((f) => (
                        <FeatureRow key={f.title} {...f} />
                      ))}
                    </motion.ul>

                    {/* CTAs — dos modelos para snacks, uno para café */}
                    <div className="flex flex-wrap gap-2">
                      {isSnacks ? (
                        <>
                          <motion.a
                            href="https://wa.me/51929741557?text=Hola%20Vendrix%2C%20me%20interesa%20el%20modelo%20TCN%20CSC-10G."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg shadow-zinc-900/20 transition-colors duration-150"
                          >
                            TCN CSC-10G
                            <ArrowRight size={14} />
                          </motion.a>
                          <motion.a
                            href="https://wa.me/51929741557?text=Hola%20Vendrix%2C%20me%20interesa%20el%20modelo%20Glazer%20GF-EXR610MB."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg shadow-red-600/20 transition-colors duration-150"
                          >
                            Glazer GF-EXR610MB
                            <ArrowRight size={14} />
                          </motion.a>
                        </>
                      ) : (
                        <motion.a
                          href="https://wa.me/51929741557?text=Hola%20Vendrix%2C%20me%20interesa%20el%20modelo%20de%20Caf%C3%A9%20Premium%20TCN%20NCF-7N."
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-colors duration-150"
                        >
                          Solicitar TCN NCF-7N
                          <ArrowRight size={15} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Visual column */}
                  <div className="p-6 md:p-8 order-1 lg:order-2 flex items-center">
                    {isSnacks ? <SnacksMachinesVisual /> : <CoffeeMachineVisual />}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Brand marquee ── */}
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm text-slate-400"
          >
            Trabajamos con las mejores marcas.{" "}
            <span className="text-slate-700 font-semibold">
              Cero amarres, 100% variedad.
            </span>
          </motion.p>

          <InfiniteMarquee brands={BRAND_ITEMS} />
        </div>

      </div>
    </section>
  );
}
