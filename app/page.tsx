"use client";

import CallToAction from "@/components/callToAction/CallToAction";
import Data from "@/components/Data/Data";
import FAQ, { FAQItem } from "@/components/FAQ/FAQ";
import HeroLanding from "@/components/Hero/HeroLanding/HeroLanding";
import LandingONas from "@/components/LandingONas/LandingONas";
import Map from "@/components/Map/Map";
import ServicesList from "@/components/Services/ServicesList/ServicesList";
import { useNav } from "@/context/NavContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const COMMERCIAL_FAQ: FAQItem[] = [
  {
    question: "CZY DO KIEROWANIA AUTOLAWETĄ WYSTARCZY PRAWO JAZDY KATEGORII B?",
    answer:
      "Tak. Wszystkie nasze pojazdy dostawcze oraz autolawety posiadają Dopuszczalną Masę Całkowitą (DMC) do 3500 kg, co oznacza, że zgodnie z prawem wystarczy standardowe prawo jazdy kategorii B.",
  },
  {
    question: "JAK ROZLICZANE SĄ OPŁATY AUTOSTRADOWE I WINIETY?",
    answer:
      "Pojazdy posiadają zarejestrowany system e-TOLL na polskich autostradach płatnych. W przypadku wyjazdu za granicę (Czechy, Słowacja, Austria) najemca zobowiązany jest do wykupienia winiet lokalnych.",
  },
  {
    question: "CZY WYSTAWIACIE PEŁNĄ FAKTURĘ VAT 23% DLA FIRM?",
    answer:
      "Tak, na każdy wynajem wystawiamy fakturę VAT 23%. Dla warsztatów samochodowych oraz firm budowlanych stale współpracujących oferujemy odroczone terminy płatności.",
  },
];

export default function Home() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: "services", label: "Usługi" },
        { id: "data", label: "Dane" },
        { id: "o-firmie", label: "O Firmie" },
      ],
    });

    return () =>
      setNavInfo({
        path: "/",
        sections: [],
      });
  }, [setNavInfo, pathname]);

  return (
    <div className="p-20">
      <HeroLanding />
      <ServicesList />
      <Data />
      <CallToAction />
      <LandingONas />
      <Map />
      <FAQ
        id="faq"
        badgeText="LOGISTYKA B2B // OBSŁUGA POJAZDÓW UŻYTKOWYCH"
        title="FAQ - NAJEM POJAZDÓW DOSTAWCZYCH"
        description="Pytania o ładowność, winiety autostradowe, pasy transportowe i kaucje zwrotne."
        items={COMMERCIAL_FAQ}
      />
    </div>
  );
}
