"use client";

import { motion, type Variants } from "framer-motion";
import { MessageCircle, Search, Wrench, ArrowRight } from "lucide-react";

const WA_STEPS =
  "https://wa.me/51929741557?text=Hola%20Vendrix%2C%20quiero%20solicitar%20una%20asesor%C3%ADa%20gratuita%20para%20mi%20empresa.";

const STEPS = [
  {
    num: "01",
    icon: <MessageCircle size={26} />,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    title: "Solicitas tu asesoría",
    desc: "Escríbenos por WhatsApp y cuéntanos sobre tu empresa. Un asesor te responde en menos de 2 horas, sin compromiso.",
    cta: true,
  },
  {
    num: "02",
    icon: <Search size={26} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Evaluamos tu espacio",
    desc: "Visitamos tu local, analizamos el flujo de personas y te recomendamos el equipo ideal para maximizar el uso.",
    cta: false,
  },
  {
    num: "03",
    icon: <Wrench size={26} />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Instalamos y operamos sin costo",
    desc: "Instalamos, configuramos y mantenemos la máquina. Nos encargamos del reabastecimiento. Tú solo disfrutas.",
    cta: false,
  },
];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HowWeWork() {
  return (
    <section
      className="py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f8fafc 0%, #ffffff 60%)",
        fontFamily: "var(--font-plus-jakarta)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4"
        >
          <span className="inline-flex items-center gap-1.5 bg-red-600/8 text-red-600 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            <MessageCircle size={11} />
            Proceso Simple
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 leading-tight tracking-tight max-w-xl">
            De cero a operativo{" "}
            <span className="text-red-600">en 3 pasos</span>
          </h2>
          <p className="text-base text-zinc-700 max-w-lg leading-relaxed">
            Sin burocracia, sin costos ocultos. Solo un proceso claro y rápido
            para que tu equipo empiece a disfrutar cuanto antes.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px border-t-2 border-dashed border-slate-200 z-0" />

          {STEPS.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative z-10 flex flex-col gap-5 p-8 bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number + icon row */}
              <div className="flex items-center justify-between">
                <span
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${step.iconBg} ${step.iconColor}`}
                >
                  {step.icon}
                </span>
                <span
                  className="text-5xl font-black text-slate-100 leading-none select-none"
                  aria-hidden="true"
                >
                  {step.num}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-zinc-950 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">{step.desc}</p>
              </div>

              {/* CTA on step 1 */}
              {step.cta && (
                <a
                  href={WA_STEPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-red-600/20 transition-colors duration-150 w-fit"
                >
                  Solicitar ahora
                  <ArrowRight size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
