import { CoverageBanner }    from "@/components/coverage-banner";
import { Hero }              from "@/components/hero";
import { VendrixStandard }   from "@/components/vendrix-standard";
import { HowWeWork }         from "@/components/how-we-work";
import { InteractiveCatalog } from "@/components/interactive-catalog";
import { BentoBenefits }     from "@/components/bento-benefits";
import { MissionVision }     from "@/components/mission-vision";
import { CorporateB2BAndCTA } from "@/components/corporate-cta";
import { Footer }            from "@/components/footer";

/*
  Flujo de storytelling optimizado para conversión B2B:
  Credibilidad inmediata → Por qué nosotros → Proceso → Producto →
  Beneficios corporativos → Institución → CTA máximo → Footer
*/
export default function Home() {
  return (
    <>
      {/* Franja de cobertura — aparece bajo el header */}
      <div className="pt-[80px]">
        <CoverageBanner />
      </div>

      <main>
        {/* 1 — Captura de atención: hero limpio con máquina */}
        <Hero />

        {/* 2 — Diferenciadores: pilares + ventajas */}
        <div id="beneficios">
          <VendrixStandard />
        </div>

        {/* 3 — Proceso claro: 3 pasos simples */}
        <HowWeWork />

        {/* 4 — Catálogo interactivo de máquinas + marcas */}
        <div id="catalogo">
          <InteractiveCatalog />
        </div>

        {/* 5 — Beneficios corporativos para RRHH */}
        <BentoBenefits />

        {/* 6 — Misión y Visión institucional */}
        <MissionVision />

        {/* 7 — Cierre de conversión máxima */}
        <div id="contacto">
          <CorporateB2BAndCTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
