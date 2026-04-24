"use client";

import { motion, type Variants } from "framer-motion";
import { Building, Leaf, ShieldCheck, Phone, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Types & data
───────────────────────────────────────────── */
interface Benefit {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  copy: string;
  highlight: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: <Building size={22} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Refuerzo de Imagen Corporativa",
    copy: "Modernizamos tus espacios, mejorando el ambiente laboral y el desempeño de tus colaboradores con máquinas de última generación.",
    highlight: "Infraestructura de primer nivel",
  },
  {
    icon: <Leaf size={22} />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Bienestar y Satisfacción",
    copy: "Aportamos al cuidado de la salud de tu equipo ofreciendo una gama de productos saludables y nutritivos a costos accesibles.",
    highlight: "+200 opciones saludables",
  },
  {
    icon: <ShieldCheck size={22} />,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    title: "Servicio Continuo y Cercano",
    copy: "Nuestra atención es inmediata y adaptable a tus necesidades, garantizando una operación constante sin dolores de cabeza para ti.",
    highlight: "Respuesta en menos de 2 h",
  },
];

interface ContactLine {
  label: string;
  numbers: { display: string; wa: string }[];
}

const WA_LINK = "https://wa.me/51929741557?text=Hola%20Vendrix,%20vengo%20desde%20la%20sección%20de%20contacto%20de%20la%20web.";

const CONTACTS: ContactLine[] = [
  {
    label: "Atención al Cliente",
    numbers: [
      { display: "945 683 203", wa: WA_LINK },
      { display: "918 994 299", wa: WA_LINK },
    ],
  },
  {
    label: "Comercial — Alexander Leon",
    numbers: [{ display: "929 741 557", wa: WA_LINK }],
  },
];

/* ─────────────────────────────────────────────
   WhatsApp SVG (lucide-react v1.9 no lo incluye)
───────────────────────────────────────────── */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   BenefitCard
───────────────────────────────────────────── */
function BenefitCard({ icon, iconBg, iconColor, title, copy, highlight }: Benefit) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="
        group flex flex-col gap-5 p-8
        bg-white rounded-3xl
        border border-slate-100
        shadow-md shadow-slate-100/80
        hover:shadow-xl hover:shadow-slate-200/70
        transition-shadow duration-300
      "
    >
      {/* Icon */}
      <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconBg} ${iconColor}`}>
        {icon}
      </span>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{copy}</p>
      </div>

      {/* Highlight chip */}
      <div className="pt-4 border-t border-slate-100">
        <span className="text-xs font-semibold text-slate-400 group-hover:text-red-500 transition-colors duration-200">
          → {highlight}
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function CorporateB2BAndCTA() {
  return (
    <section
      className="bg-white py-24 px-4 sm:px-6"
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
          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            <Building size={11} />
            Por qué confiar en Vendrix
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-2xl">
            Más que una máquina,{" "}
            <span className="text-red-600">una solución para tu empresa</span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl leading-relaxed font-normal">
            Diseñamos cada instalación pensando en el bienestar de tu equipo y
            en la imagen de tu organización. Cero complicaciones para ti.
          </p>
        </motion.div>

        {/* ── Benefits grid ── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {BENEFITS.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-slate-900"
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-red-600/10 blur-3xl" />
          {/* Subtle dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-8 px-6 sm:px-12 py-14 md:py-16">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-white/60 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              Únete a las empresas que ya confían en Vendrix
            </span>

            {/* Headline */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
              ¿Listo para llevar la mejor experiencia de Vending a tu empresa?
            </h2>

            <p className="text-base text-white/55 max-w-lg leading-relaxed">
              Sin costos de instalación. Sin contratos inflexibles. Solo resultados.
              Escríbenos ahora y te asesoramos sin compromiso.
            </p>

            {/* CTA button */}
            <motion.a
              href="https://wa.me/51929741557?text=Hola%20Vendrix,%20vengo%20desde%20la%20sección%20de%20contacto%20de%20la%20web."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center gap-2.5
                bg-green-500 hover:bg-green-400
                text-white font-bold text-base
                px-8 py-4 rounded-full
                shadow-2xl shadow-green-500/30
                transition-colors duration-150 cursor-pointer
              "
            >
              <WhatsAppIcon size={20} />
              Solicitar Asesoría por WhatsApp
              <ArrowRight size={16} />
            </motion.a>

            {/* Contact info row */}
            <div className="w-full pt-8 border-t border-white/8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
                {CONTACTS.map((contact, i) => (
                  <div key={contact.label} className="flex flex-col sm:flex-row items-center sm:gap-0">
                    {/* Separator (between items) */}
                    {i > 0 && (
                      <div className="hidden sm:block w-px h-10 bg-white/10 mx-8" />
                    )}

                    <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                      <div className="flex items-center gap-1.5">
                        <Phone size={11} className="text-white/30" />
                        <span className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                          {contact.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-0.5">
                        {contact.numbers.map((n, ni) => (
                          <span key={n.wa} className="flex items-center gap-1.5">
                            <a
                              href={n.wa}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-bold text-white/80 hover:text-white transition-colors duration-150"
                              style={{ fontFamily: "var(--font-geist-mono)" }}
                            >
                              {n.display}
                            </a>
                            {ni < contact.numbers.length - 1 && (
                              <span className="text-white/20 text-sm">/</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
