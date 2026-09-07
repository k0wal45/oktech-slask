"use client";

import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";

import { Container } from "@/ui/Container/Container";
import { HeroService } from "@/components/Hero/HeroService/HeroService";
import FAQ, { FAQItem } from "@/components/FAQ/FAQ";
import PassengerCarCard, {
  PassengerCar,
} from "@/components/Rental/Filter/PassengerCarCard/PassengerCarCard";
import CategoryFilterTabs from "@/components/Rental/Filter/CategoryFilterTabs/CategoryFilterTabs";
import BigCallToAction from "@/components/callToAction/BigCallToAction/BigCallToAction";
import AboutStats from "@/components/Rental/AboutStats/AboutStats";
import ProcessGridRental from "@/components/Rental/ProcessGridRental/ProcessGridRental";

const CAR_CATEGORIES = [
  { key: "all", label: "WSZYSTKIE POJAZDY" },
  { key: "kabriolet", label: "KABRIOLETY & SPORT" },
  { key: "premium", label: "PREMIUM & SUV" },
  { key: "kombi", label: "KOMBI & MIEJSKIE" },
];

const PASSENGER_FLEET: PassengerCar[] = [
  {
    id: "ford-mustang-gt-cabrio",
    name: "FORD MUSTANG GT 5.0 V8 CABRIO",
    category: "kabriolet",
    engine: "5.0L V8 450 KM",
    transmission: "AUTOMAT",
    seats: 4,
    pricePerDay: "450 PLN / DOBA",
    image: "/img/fleet/mustang.jpg",
  },
  {
    id: "bmw-4-cabrio-msport",
    name: "BMW SERIA 4 CABRIO // M-SPORT",
    category: "kabriolet",
    engine: "2.0T 258 KM",
    transmission: "AUTOMAT",
    seats: 4,
    pricePerDay: "390 PLN / DOBA",
    image: "/img/fleet/bmw-cabrio.jpg",
  },
  {
    id: "audi-a6-avant",
    name: "AUDI A6 AVANT QUATTRO // S-LINE",
    category: "premium",
    engine: "2.0 TDI 204 KM",
    transmission: "AUTOMAT",
    seats: 5,
    pricePerDay: "320 PLN / DOBA",
    image: "/img/fleet/audi-a6.jpg",
  },
  {
    id: "cupra-formentor-vz",
    name: "CUPRA FORMENTOR VZ // 4DRIVE",
    category: "premium",
    engine: "2.0 TSI 310 KM",
    transmission: "AUTOMAT",
    seats: 5,
    pricePerDay: "290 PLN / DOBA",
    image: "/img/fleet/cupra.jpg",
  },
  {
    id: "toyota-corolla-ts",
    name: "TOYOTA COROLLA TS HYBRID",
    category: "kombi",
    engine: "1.8 HYBRID 140 KM",
    transmission: "AUTOMAT",
    seats: 5,
    pricePerDay: "160 PLN / DOBA",
    image: "/img/fleet/corolla.jpg",
  },
  {
    id: "skoda-octavia-combi",
    name: "SKODA OCTAVIA COMBI DSG",
    category: "kombi",
    engine: "1.5 TSI 150 KM",
    transmission: "AUTOMAT",
    seats: 5,
    pricePerDay: "180 PLN / DOBA",
    image: "/img/fleet/octavia.jpg",
  },
];

const PASSENGER_FAQ: FAQItem[] = [
  {
    question:
      "JAKIE SĄ WYMOGI DOTYCZĄCE WIEKU I STAŻU KIEROWCY DLA KABRIOLETÓW?",
    answer:
      "Dla aut standardowych wymagamy ukończonych 21 lat i minimum 1 roku prawa jazdy. W przypadku kabrioletów oraz aut segmentu sport/premium minimalny wiek kierowcy wynosi 23 lata oraz minimum 2 lata posiadania prawa jazdy kat. B.",
  },
  {
    question: "CZY POJAZDY POSIADAJĄ LIMIT KILOMETRÓW?",
    answer:
      "W wynajmie krótkoterminowym (1-3 dni) standardowy limit wynosi 300 km/doba z opcją dokupienia pakietu bez limitu kilometrów. Przy najmie od 4 dób limit jest ustalany elastycznie lub całkowicie znoszony.",
  },
  {
    question: "CZY MOŻNA WYPOŻYCZYĆ KABRIOLET DO ŚLUBU LUB NA SESJĘ ZDJĘCIOWĄ?",
    answer:
      "Tak, oferujemy specjalne pakiety weekendowe oraz okolicznościowe (z opcją podstawienia auta po profesjonalnym detailingu pod wskazany adres na terenie Śląska).",
  },
];

export default function WypozyczalniaOsobowePage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: "katalog", label: "Katalog aut" },
        { id: "standard-operacyjny", label: "Standard operacyjny" },
        { id: "zasady-wynajmu", label: "Proces wynajmu" },
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

  const filteredFleet = useMemo(() => {
    if (selectedCategory === "all") return PASSENGER_FLEET;
    return PASSENGER_FLEET.filter((car) => car.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* 1. Hero sekcji */}
      <div id="hero">
        <HeroService
          hero="Wypożyczalnia aut i kabrioletów - *poczuj czystą moc*"
          image="wypozyczalnia.jpg"
          button1={{ text: "PRZEGLĄDAJ FLOTĘ", link: "#katalog" }}
          button2={{
            text: "ZADZWOŃ: +48 000 000 000",
            link: "tel:+48000000000",
          }}
        />
      </div>

      {/* 2. Filtry + Kompaktowa Siatka Pojazdów */}
      <Container as="section" id="katalog" size="base" contentWidth="max">
        <CategoryFilterTabs
          activeTab={selectedCategory}
          onTabChange={setSelectedCategory}
          categories={CAR_CATEGORIES}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
            width: "100%",
          }}
        >
          {filteredFleet.map((car) => (
            <PassengerCarCard key={car.id} car={car} />
          ))}
        </div>
      </Container>

      {/* 3. Standard operacyjny (Gwarancja sprawności / 0 PLN ukrytych kosztów / < 60 min) */}
      <AboutStats />

      {/* 4. Proces operacyjny w 3 krokach */}
      <ProcessGridRental />

      {/* 5. FAQ */}
      <FAQ
        id="faq"
        badgeText="INFORMACJE DLA KIEROWCÓW // REGULAMIN"
        title="FAQ - NAJEM SAMOCHODÓW OSOBOWYCH"
        description="Wszystko co musisz wiedzieć o kaucjach, limitach kilometrów i pakietach ubezpieczeń."
        items={PASSENGER_FAQ}
      />

      {/* 6. CTA Rezerwacji */}
      <div id="rezerwacja">
        <BigCallToAction
          title="ZAREZERWUJ AUTO NA WEEKEND LUB W TRASĘ"
          description="Podaj termin i model auta. Podstawimy czysty, zatankowany samochód w Katowicach lub dowieziemy na lotnisko Pyrzowice."
          phone="+48 000 000 000"
          auditLink="/kontakt"
        />
      </div>
    </div>
  );
}
