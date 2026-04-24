"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Star, Users, Lightbulb } from "lucide-react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const PILLARS = [
  {
    icon: <Zap size={22} />,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    title: "Respuesta Inmediata",
    desc: "Atendemos cualquier falla técnica o problema de pago en el menor tiempo posible, evitando paradas y pérdidas.",
  },
  {
    icon: <Star size={22} />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "Excelencia",
    desc: "Supervisamos y mantenemos nuestras máquinas para garantizar operación constante y atención responsable.",
  },
  {
    icon: <Users size={22} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Colaboración",
    desc: "Trabajamos de la mano con clientes y proveedores para ofrecer soluciones rápidas, flexibles y adaptadas.",
  },
  {
    icon: <Lightbulb size={22} />,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Innovación",
    desc: "Contamos con máquinas actualizadas, eficientes y confiables para una mejor experiencia de uso.",
  },
];

const ADVANTAGES = [
  {
    num: "01",
    title: "Sin ataduras",
    text: "No estamos amarrados a una sola marca o proveedor, lo que nos permite elegir las mejores máquinas y productos según cada cliente.",
  },
  {
    num: "02",
    title: "Máxima variedad",
    text: "Combinamos snacks tradicionales, opciones saludables, café importado y nacional para satisfacer cualquier gusto.",
  },
  {
    num: "03",
    title: "Soporte real",
    text: "Nuestra rapidez de respuesta y flexibilidad nos permiten resolver cualquier problema técnico sin afectar tu operación.",
  },
];

/* ─────────────────────────────────────────────
   Variants
───────────────────────────────────────────── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function VendrixStandard() {
  return (
    <section
      className="bg-slate-50 py-24 px-4 sm:px-6"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4"
        >
          <span className="inline-flex items-center gap-1.5 bg-red-600/8 text-red-600 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            <Zap size={11} className="fill-red-600" />
            El Estándar Vendrix
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 leading-tight tracking-tight max-w-2xl">
            Cuatro pilares que{" "}
            <span className="text-red-600">nunca fallan</span>
          </h2>
          <p className="text-base text-zinc-700 max-w-xl leading-relaxed">
            Cada instalación que hacemos está respaldada por estos principios.
            No son promesas — son la forma en que operamos cada día.
          </p>
        </motion.div>

        {/* ── Pillars 2×2 ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col gap-5 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:bg-white transition-all duration-300"
            >
              <span className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${p.iconBg} ${p.iconColor}`}>
                {p.icon}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-zinc-950">{p.title}</h3>
                <p className="text-sm text-zinc-700 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0">
            Por qué elegirnos
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* ── Numbered advantages ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 rounded-3xl overflow-hidden shadow-sm"
        >
          {ADVANTAGES.map((adv) => (
            <motion.div
              key={adv.num}
              variants={fadeUp}
              className="group relative bg-white hover:bg-slate-50 transition-colors duration-200 p-8 flex flex-col gap-5"
            >
              {/* Decorative number */}
              <span
                className="text-[5.5rem] font-black leading-none text-slate-100 group-hover:text-red-50 transition-colors duration-300 select-none pointer-events-none"
                aria-hidden="true"
              >
                {adv.num}
              </span>
              {/* Red accent */}
              <div className="w-8 h-0.5 bg-red-600" />
              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-bold text-zinc-950">{adv.title}</p>
                <p className="text-sm text-zinc-700 leading-relaxed">{adv.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
