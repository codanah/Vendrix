"use client";

import { motion, type Variants } from "framer-motion";
import { Target, Eye, Zap, Star, Users, Lightbulb } from "lucide-react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const ADVANTAGES = [
  {
    num: "01",
    text: "No estamos amarrados a una sola marca o proveedor, lo que nos permite elegir las mejores máquinas y productos según cada cliente.",
  },
  {
    num: "02",
    text: "Combinamos snacks tradicionales, opciones saludables, café importado y nacional para satisfacer cualquier gusto y necesidad.",
  },
  {
    num: "03",
    text: "Nuestra rapidez de respuesta y flexibilidad nos permiten resolver cualquier problema técnico sin afectar la operación de tu empresa.",
  },
];

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
    desc: "Trabajamos de la mano con clientes y proveedores para ofrecer soluciones rápidas, flexibles y adaptadas a cada espacio.",
  },
  {
    icon: <Lightbulb size={22} />,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Innovación",
    desc: "Contamos con máquinas actualizadas, eficientes y confiables para una mejor experiencia de uso.",
  },
];

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ─────────────────────────────────────────────
   Eyebrow shared component
───────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-red-600/8 text-red-600 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function AboutUs() {
  return (
    <section
      className="bg-white py-24 px-4 sm:px-6"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-24">

        {/* ════════════════════════════════════════
            PARTE 1 — SOBRE NOSOTROS + MISIÓN/VISIÓN
        ════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — identity text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3 flex flex-col gap-7"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Quiénes somos</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Vending moderno{" "}
              <span className="text-red-600">con propósito</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              En Vendrix ofrecemos vending moderno de snacks y café, incluyendo
              opciones saludables, para un consumo rápido, práctico y confiable.
            </motion.p>

            {/* Decorative divider with accent */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Lima, Perú
              </span>
              <div className="h-px flex-1 bg-slate-100" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base text-slate-500 leading-relaxed max-w-xl"
            >
              Ser una empresa de vending confiable y moderna, reconocida por su
              rápida atención, tecnología actualizada y una experiencia de compra
              ágil y segura. Brindamos soluciones eficientes garantizando la
              continuidad del servicio y respuesta inmediata ante cualquier
              eventualidad.
            </motion.p>
          </motion.div>

          {/* Right — mission & vision cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Misión */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col gap-4 p-7 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Target size={20} />
                </span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Misión
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ser una empresa de vending confiable y moderna, reconocida por
                su rápida atención, tecnología actualizada y una experiencia de
                compra ágil y segura.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col gap-4 p-7 bg-slate-900 rounded-3xl shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Eye size={20} />
                </span>
                <span className="text-xs font-black text-white/40 uppercase tracking-widest">
                  Visión
                </span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Brindar soluciones de vending eficientes, garantizando la
                continuidad del servicio y respuesta inmediata ante cualquier
                eventualidad en los espacios de nuestros clientes.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════
            PARTE 2 — VENTAJAS COMERCIALES
        ════════════════════════════════════════ */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <Eyebrow>Por qué elegirnos</Eyebrow>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-xl">
              Nuestras ventajas{" "}
              <span className="text-red-600">competitivas</span>
            </h3>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 rounded-3xl overflow-hidden shadow-sm"
          >
            {ADVANTAGES.map((adv) => (
              <motion.div
                key={adv.num}
                variants={fadeUp}
                className="relative bg-white p-8 flex flex-col gap-5 group hover:bg-slate-50 transition-colors duration-200"
              >
                {/* Big decorative number */}
                <span
                  className="text-[5.5rem] font-black leading-none text-slate-100 group-hover:text-red-50 transition-colors duration-300 select-none"
                  aria-hidden="true"
                >
                  {adv.num}
                </span>

                {/* Red accent line */}
                <div className="w-8 h-0.5 bg-red-600" />

                {/* Text */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {adv.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ════════════════════════════════════════
            PARTE 3 — LOS 4 PILARES
        ════════════════════════════════════════ */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center gap-3"
          >
            <Eyebrow>Nuestros pilares</Eyebrow>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-lg">
              ¿Por qué{" "}
              <span className="text-red-600">Vendrix</span>?
            </h3>
            <p className="text-base text-slate-500 max-w-md leading-relaxed">
              Cuatro principios que definen cómo trabajamos cada día para que tu
              empresa nunca se detenga.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col gap-5 p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/70 hover:bg-white transition-all duration-300"
              >
                <span
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${pillar.iconBg} ${pillar.iconColor}`}
                >
                  {pillar.icon}
                </span>

                <div className="flex flex-col gap-1.5">
                  <h4 className="text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
