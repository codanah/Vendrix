"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Beneficios",  href: "#beneficios" },
  { label: "Catálogo",   href: "#catalogo"   },
  { label: "Contacto",   href: "#contacto"   },
];

interface PhoneEntry {
  label: string;
  numbers: { display: string; wa: string }[];
}

const WA_LINK = "https://wa.me/51929741557?text=Hola%20Vendrix,%20vengo%20desde%20la%20sección%20de%20contacto%20de%20la%20web.";

const PHONES: PhoneEntry[] = [
  {
    label: "Alexander Leon · Asesor Comercial",
    numbers: [
      { display: "929 741 557", wa: WA_LINK },
    ],
  },
];

/* ─────────────────────────────────────────────
   WhatsApp icon (inline SVG — lucide v1.9
   no incluye iconos de marca)
───────────────────────────────────────────── */
function WaIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      className="relative bg-zinc-950 border-t border-white/6 overflow-hidden"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-red-600/8 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-8">

        {/* ── Main 3-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-white/6">

          {/* 1 · Branding */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo-full.png"
              alt="Vendrix"
              width={180}
              height={50}
              priority
              unoptimized
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-[220px]">
              Vending inteligente de snacks, bebidas y café para empresas en
              Lima, Perú. Instalación gratuita, operación 24/7.
            </p>
          </div>

          {/* 2 · Nav anchors */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
              Navegar
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-medium text-white/55 hover:text-white transition-colors duration-150 w-fit"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* 3 · WhatsApp directo */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
              WhatsApp
            </p>
            <div className="flex flex-col gap-4">
              {PHONES.map((group) => (
                <div key={group.label} className="flex flex-col gap-2">
                  <p className="text-[11px] text-white/30 uppercase tracking-wide font-semibold">
                    {group.label}
                  </p>
                  {group.numbers.map((n) => (
                    <a
                      key={n.wa}
                      href={n.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold transition-colors duration-150 w-fit group"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      <span className="text-green-400 opacity-60 group-hover:opacity-100 transition-opacity duration-150">
                        <WaIcon size={14} />
                      </span>
                      {n.display}
                    </a>
                  ))}
                  {/* CTA button */}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 bg-green-500/15 hover:bg-green-500/25 border border-green-500/25 text-green-400 hover:text-green-300 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-150 w-fit"
                  >
                    <WaIcon size={12} />
                    Escribir ahora
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20 text-center sm:text-left">
            © {new Date().getFullYear()} Vendrix S.A.C. Todos los derechos reservados.
          </p>

          {/* CODANAH credit — gradient hover intacto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-1.5 text-xs text-white/20"
          >
            <span>Diseñado y desarrollado por</span>
            <motion.a
              href="https://codanah.dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="relative font-bold cursor-pointer"
            >
              <span className="text-white/35 group-hover:opacity-0 transition-opacity duration-200">
                CODANAH
              </span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-red-500 via-rose-400 to-red-400 bg-clip-text text-transparent font-black"
                aria-hidden="true"
              >
                CODANAH
              </span>
            </motion.a>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
