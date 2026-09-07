"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import HeroService from "@/components/Hero/HeroService/HeroService";
import TechnicalSpecs from "@/components/hds/TechnicalSpecs/TechnicalSpecs";
import CoverageMap from "@/components/hds/CoverageMap/CoverageMap";
import ContainerTransport from "@/components/hds/ContainerTransport/ContainerTransport";
import FAQ, { FAQItem } from "@/components/FAQ/FAQ";

const HDS_FAQ_ITEMS: FAQItem[] = [
  {
    question:
      "JAK PRAWIDŁOWO PRZYGOTOWAĆ STANOWISKO POD ROZŁADUNEK DŹWIGIEM HDS?",
    answer: (
      <>
        <p>
          Bezpieczna praca żurawia przenośnego wymaga stabilnego podłoża.
          Wymagana nośność gruntu pod rozłożenie podpór hydraulicznych (stóp)
          wynosi <strong>minimum 300 kPa</strong>. W przypadku gruntów
          piaszczystych lub nieutwardzonych dysponujemy specjalistycznymi
          płytami rozkładającymi nacisk z tworzywa PE-HD oraz podkładami
          dębowymi.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          <strong>Linie elektroenergetyczne:</strong> Zgodnie z normami BHP
          zabrania się pracy HDS w odległości mniejszej niż 3 m od linii do 1
          kV, 5 m do 15 kV oraz 15 m przy liniach wysokiego napięcia 110 kV bez
          wyłączenia zasilania lub nadzoru energetycznego.
        </p>
      </>
    ),
  },
  {
    question:
      "CZY ZAPEWNIACIE WŁASNE ZAWIESIA I TRAWERSY DO NIETYPOWYCH MASZYN?",
    answer:
      "Tak. Każdy nasz pojazd wyposażony jest w atestowane zawiesia pasowe, łańcuchowe 4-cięgnowe oraz trawersy ramowe z aktualnymi badaniami UDT.",
  },
  {
    question:
      "JAK LICZONY JEST KOSZT WYNAJMU (STAWKA GODZINOWA VS KILOMETROWA)?",
    answer:
      "Przy pracach lokalnych na terenie aglomeracji śląskiej rozliczamy się wg stawki roboczogodziny (z minimalnym czasem pracy). Przy trasach dalekobieżnych wycena bazuje na stawce za kilometr z wliczonym czasem na załadunek i rozładunek.",
  },
];

export default function UslugiPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [{ id: "specyfikacja", label: "Specyfikacja" }],
    });

    return () =>
      setNavInfo({
        path: "/",
        sections: [],
      });
  }, [setNavInfo, pathname]);

  return (
    <div className="p-20">
      <HeroService
        hero="Transport hds i usługi dźwigiem na *śląsku*"
        image="hds.jpg"
        button1={{
          text: "Skontaktuj się",
          link: "/kontakt",
        }}
        button2={{
          text: "Poznaj ofertę",
          link: "#klimaOferta",
        }}
      />
      <TechnicalSpecs />
      <CoverageMap />
      <ContainerTransport />
      <FAQ
        title="FAQ - PYTANIA TECHNICZNE I WYMOGI"
        description="Kluczowe zagadnienia dotyczące przygotowania stanowiska, sprzętu i rozliczeń."
        items={HDS_FAQ_ITEMS}
      />
    </div>
  );
}
