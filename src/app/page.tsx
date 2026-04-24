import { Header }           from "@/components/header";
import { Hero }              from "@/components/hero";
import { VendrixStandard }   from "@/components/vendrix-standard";
import { InteractiveCatalog } from "@/components/interactive-catalog";
import { BentoBenefits }     from "@/components/bento-benefits";
import { MissionVision }     from "@/components/mission-vision";
import { CorporateB2BAndCTA } from "@/components/corporate-cta";
import { Footer }            from "@/components/footer";

/*
  Flujo de storytelling:
  Hero → El Estándar (pilares + ventajas) → Catálogo →
  Beneficios Corporativos → Misión/Visión → CTA Final → Footer
*/
export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 1 — Gran titular sobre fondo claro */}
        <Hero />

        {/* 2 — Pilares y ventajas competitivas */}
        <div id="beneficios">
          <VendrixStandard />
        </div>

        {/* 3 — Catálogo interactivo de máquinas */}
        <div id="catalogo">
          <InteractiveCatalog />
        </div>

        {/* 4 — Grid de beneficios B2B */}
        <BentoBenefits />

        {/* 5 — Misión y Visión institucional */}
        <MissionVision />

        {/* 6 — CTA final de conversión */}
        <div id="contacto">
          <CorporateB2BAndCTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
