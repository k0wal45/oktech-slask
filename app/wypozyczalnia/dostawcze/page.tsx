"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";

import { Container } from "@/ui/Container/Container";
import { HeroService } from "@/components/Hero/HeroService/HeroService";
import CommercialVehicleCard, {
  DetailedCommercialVehicle,
} from "@/components/Rental/CommercialVehicleCard/CommercialVehicleCard";
import AboutStats from "@/components/Rental/AboutStats/AboutStats";
import ProcessGridRental from "@/components/Rental/ProcessGridRental/ProcessGridRental";
import FAQ, { FAQItem } from "@/components/FAQ/FAQ";
import BigCallToAction from "@/components/callToAction/BigCallToAction/BigCallToAction";

const COMMERCIAL_FLEET: DetailedCommercialVehicle[] = [
  {
    id: "iveco-autolaweta",
    unitCode: "ID: LAWETA-ALU-01",
    licenseRequirement: "PROWADZISZ NA KAT. B",
    subType: "SPECJALISTYCZNA NAJAZDOWA",
    name: "AUTOLAWETA IVECO DAILY 3.0 HPI",
    pricePerDay: "350",
    description:
      "Profesjonalny zestaw autolawetowy z lekką aluminiową zabudową o obniżonym kącie natarcia. Idealny do przewozu samochodów osobowych, SUV-ów, aut zabytkowych oraz maszyn budowlanych. Wciągarka elektryczna sterowana radiowo z pilotem bezprzewodowym.",
    deposit: "1000 PLN",
    limit: "Brak limitu w opcji PL",
    insurance: "OC/AC/Assistance UE",
    image: "/img/fleet/autolaweta.jpg",
    highlights: ["Wciągarka na pilota", "Najazdy aluminiowe 2.5m"],
    specs: [
      { key: "Dopuszczalna Masa Całkowita (DMC)", value: "3500 kg (Kat. B)" },
      { key: "Ładowność administracyjna platformy", value: "1420 kg" },
      { key: "Wymiary platformy najazdowej", value: "5.00 m x 2.10 m" },
      { key: "Wciągarka elektryczna", value: "6500 kg z pilotem radiowym" },
      { key: "Uciąg na haku holowniczym", value: "3500 kg" },
      {
        key: "Jednostka napędowa",
        value: "3.0 HPI 180 KM Diesel (6-biegowy manual)",
      },
    ],
    includedEquipment: "4 szt. pasów 3-punktowych 'tropy' w zestawie",
    buttonLabel: "ZAREZERWUJ AUTOLAWETĘ",
  },
  {
    id: "master-blaszak-maxi",
    unitCode: "ID: FURGON-L4H2-02",
    licenseRequirement: "PROWADZISZ NA KAT. B",
    subType: "TRANSPORT TOWAROWY / PRZEPROWADZKI",
    name: "RENAULT MASTER L4H2 // BLASZAK MAXI",
    pricePerDay: "250",
    description:
      "Najdłuższa i najwyższa wersja furgonu dostawczego oferująca 15 m³ kubatury. Przystosowana do przewozu 4 standardowych europalet, sprzętu budowlanego oraz przeprowadzek hal i mieszkań. Fabryczne punkty mocowania i oświetlenie paki LED.",
    deposit: "800 PLN",
    limit: "300 km / doba",
    insurance: "OC/AC/Assistance 24/7",
    image: "/img/fleet/bus-dostawczy.jpg",
    highlights: ["Kamera cofania", "Wygłuszona ściana grodziowa"],
    specs: [
      { key: "Dopuszczalna Masa Całkowita (DMC)", value: "3500 kg (Kat. B)" },
      { key: "Ładowność rzeczywista", value: "1350 kg" },
      {
        key: "Kubatura przestrzeni ładunkowej",
        value: "15 m³ (4 Euro-palety)",
      },
      { key: "Długość podłogi ładunkowej", value: "3.75 m" },
      { key: "Wysokość wnętrza paki", value: "1.90 m" },
      { key: "Kąt otwarcia drzwi tylnych", value: "270 stopni" },
    ],
    includedEquipment: "Zestaw pasów transportowych ściągających w cenie",
    buttonLabel: "ZAREZERWUJ BLASZAKA",
  },
];

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

export default function WypozyczalniaDostawczePage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: "hero", label: "Flota dostawcza" },
        { id: "pojazdy", label: "Specyfikacja pojazdów" },
        { id: "standard-operacyjny", label: "Standard operacyjny" },
        { id: "zasady-wynajmu", label: "Zasady wynajmu" },
        { id: "faq", label: "Warunki i FAQ" },
        { id: "rezerwacja", label: "Rezerwacja" },
      ],
    });

    return () =>
      setNavInfo({
        path: "/",
        sections: [],
      });
  }, [setNavInfo, pathname]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* 1. Hero */}
      <div id="hero">
        <HeroService
          hero="Pojazdy dostawcze i autolawety – *gotowe do pracy*"
          image="wypozyczalnia.jpg"
          button1={{ text: "ZOBACZ POJAZDY", link: "#pojazdy" }}
          button2={{
            text: "DYSPOZYTOR: +48 000 000 000",
            link: "tel:+48000000000",
          }}
        />
      </div>

      {/* 2. Karty pojazdów ułożone pod sobą */}
      <Container
        as="section"
        id="pojazdy"
        size="base"
        contentWidth="max"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {COMMERCIAL_FLEET.map((vehicle) => (
          <CommercialVehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </Container>

      {/* 3. Standard operacyjny */}
      <AboutStats />

      {/* 4. Proces operacyjny w 3 krokach */}
      <ProcessGridRental />

      {/* 5. FAQ */}
      <FAQ
        id="faq"
        badgeText="LOGISTYKA B2B // OBSŁUGA POJAZDÓW UŻYTKOWYCH"
        title="FAQ - NAJEM POJAZDÓW DOSTAWCZYCH"
        description="Pytania o ładowność, winiety autostradowe, pasy transportowe i kaucje zwrotne."
        items={COMMERCIAL_FAQ}
      />

      {/* 6. CTA */}
      <div id="rezerwacja">
        <BigCallToAction
          title="POTRZEBUJESZ POJAZDU DOSTAWCZEGO NA DZIŚ?"
          description="Skontaktuj się bezpośrednio z naszą bazą sprzętową w Katowicach. Przygotujemy pojazd, dokumenty oraz pasy transportowe w 15 minut."
          phone="+48 000 000 000"
          auditLink="/kontakt"
        />
      </div>
    </div>
  );
}
