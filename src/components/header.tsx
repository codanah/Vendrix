"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Icono de WhatsApp optimizado
function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Nosotros", href: "#nosotros" },
];

const WA_URL = "https://wa.me/51929741557?text=Hola%20Vendrix,%20quisiera%20solicitar%20información%20general.";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4 pointer-events-none">
        {/* Contenedor principal estilo "Pill/Tarjeta" */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`
            w-full max-w-6xl pointer-events-auto flex items-center justify-between h-16 px-4 md:px-6 rounded-2xl
            transition-all duration-300 border
            ${scrolled 
              ? "bg-zinc-950/90 backdrop-blur-md border-white/10 shadow-2xl shadow-black/50 text-white" 
              : "bg-white/5 dark:bg-white/5 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-zinc-800 dark:text-zinc-100"
            }
          `}
        >
          {/* Lógica de Logos Responsivos */}
          <a href="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
            {/* Logo Escritorio */}
            <div className="hidden md:block relative w-[140px] h-[32px]">
              <Image
                src="/images/logo-full.png"
                alt="Vendrix"
                fill
                className="object-contain object-left"
                priority
                unoptimized
              />
            </div>
            {/* Logo Móvil */}
            <div className="block md:hidden relative w-[40px] h-[40px]">
              <Image
                src="/images/logo-r.png"
                alt="Vendrix"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </a>

          {/* Navegación Interna */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80
                  ${scrolled ? "text-white" : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"}
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Acciones: Botón WhatsApp y Menú Móvil */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-[0_4px_14px_rgba(34,197,94,0.39)] transition-all"
            >
              <WaIcon />
              <span className="hidden sm:inline">929 741 557</span>
            </motion.a>

            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors
                ${scrolled ? "bg-white/10 text-white" : "bg-black/10 dark:bg-white/10 text-black dark:text-white"}
              `}
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Menú Móvil Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-zinc-950/80 backdrop-blur-lg flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-medium text-white hover:text-green-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <motion.a
                whileTap={{ scale: 0.95 }}
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center gap-3 bg-green-500 text-white text-xl font-semibold px-8 py-4 rounded-full"
              >
                <WaIcon size={24} />
                929 741 557
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
