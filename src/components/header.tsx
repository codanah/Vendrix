"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Beneficios",  href: "#beneficios" },
  { label: "Catálogo",   href: "#catalogo"   },
  { label: "Contacto",   href: "#contacto"   },
];

const WA_CTA = "https://wa.me/51945683203";

export function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating pill header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`
            w-full max-w-5xl flex items-center justify-between gap-4
            px-4 md:px-6 h-14
            rounded-2xl border transition-all duration-300
            ${scrolled
              ? "bg-zinc-950/98 border-white/12 shadow-2xl shadow-black/60 backdrop-blur-2xl saturate-150"
              : "bg-zinc-950/80 border-white/10 backdrop-blur-xl saturate-150"
            }
          `}
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {/* Logo */}
          <a href="/" aria-label="Vendrix — inicio" className="flex items-center shrink-0">
            <span className="hidden md:flex items-center">
              <Image
                src="/images/logo-full.png"
                alt="Vendrix"
                width={160}
                height={40}
                priority
                unoptimized
                className="h-10 w-auto object-contain"
              />
            </span>
            <span className="flex md:hidden items-center">
              <Image
                src="/images/logo-r.png"
                alt="Vendrix"
                width={36}
                height={36}
                priority
                unoptimized
                className="h-9 w-auto object-contain"
              />
            </span>
          </a>

          {/* Desktop nav — anchor links only */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/6 transition-colors duration-150"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* WhatsApp CTA — always visible */}
            <motion.a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg shadow-red-600/25 transition-colors duration-150"
            >
              Contactar Asesor
              <ChevronRight size={14} strokeWidth={2.5} />
            </motion.a>

            {/* Hamburger — mobile only */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/6 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* ── Mobile menu drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[4.5rem] left-4 right-4 z-50 rounded-2xl border border-white/10 bg-zinc-950/98 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/60"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              <nav className="flex flex-col p-3" aria-label="Menú móvil">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 text-base font-medium text-white/70 hover:text-white hover:bg-white/6 rounded-xl transition-colors group"
                  >
                    {link.label}
                    <ChevronRight
                      size={16}
                      className="text-white/20 group-hover:text-red-500 transition-colors"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="px-3 pb-3 pt-3 border-t border-white/6">
                <a
                  href={WA_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-semibold text-base py-3.5 rounded-xl transition-colors"
                >
                  Contactar Asesor
                  <ChevronRight size={16} strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
