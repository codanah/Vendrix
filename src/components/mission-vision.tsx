"use client";

import { motion, type Variants } from "framer-motion";
import { Target, Eye } from "lucide-react";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function MissionVision() {
  return (
    <section
      className="bg-white py-20 px-4 sm:px-6"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
            Identidad Institucional
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 leading-tight">
            Quiénes somos y hacia dónde vamos
          </h2>
          <p className="text-base text-zinc-700 max-w-xl leading-relaxed">
            En Vendrix ofrecemos vending moderno de snacks y café, incluyendo
            opciones saludables, para un consumo rápido, práctico y confiable.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Misión */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col gap-5 p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                <Target size={20} />
              </span>
              <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                Misión
              </span>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Ser una empresa de vending confiable y moderna, reconocida por su
              rápida atención, tecnología actualizada y una experiencia de compra
              ágil y segura.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col gap-5 p-8 bg-zinc-950 rounded-3xl shadow-xl shadow-zinc-900/25 hover:shadow-2xl hover:shadow-zinc-900/35 transition-shadow duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                <Eye size={20} />
              </span>
              <span className="text-xs font-black text-white/40 uppercase tracking-widest">
                Visión
              </span>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Brindar soluciones de vending eficientes, garantizando la
              continuidad del servicio y respuesta inmediata ante cualquier
              eventualidad en los espacios de nuestros clientes.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
