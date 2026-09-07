"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";

import { HeroService } from "@/components/Hero/HeroService/HeroService";
import DualHubSelector from "@/components/Rental/DualHubSelector/DualHubSelector";
import FAQ, { FAQItem } from "@/components/FAQ/FAQ";
import BigCallToAction from "@/components/callToAction/BigCallToAction/BigCallToAction";

const RENTAL_FAQ: FAQItem[] = [
  {
    question: "JAKIE DOKUMENTY SĄ WYMAGANE DO WYPOŻYCZENIA POJAZDU?",
    answer:
      "Wymagamy ważnego prawa jazdy (kategorii B od minimum 1 roku) oraz dowodu osobistego lub paszportu. W przypadku firm prosimy o podanie numeru NIP do wystawienia faktury VAT 23%.",
  },
  {
    question: "W JAKI SPOSÓB ROZLICZANA JEST KAUCJA ZWROTNA?",
    answer:
      "Kaucja jest blokowana w formie preautoryzacji na karcie płatniczej lub wpłacana gotówką w dniu odbioru pojazdu. Zwrot środków następuje niezwłocznie po weryfikacji stanu technicznego auta przy zwrocie.",
  },
  {
    question: "CZY POJAZDAMI MOŻNA WYJEŻDŻAĆ ZA GRANICĘ?",
    answer:
      "Tak, wyjazdy na terytorium państw Unii Europejskiej są możliwe po wcześniejszym zgłoszeniu i dopisaniu zgody do umowy najmu. Pojazdy objęte są pakietem ubezpieczenia Assistance PL + UE 24/7.",
  },
];

export default function WynajemHubPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: "start", label: "Flota OKTECH" },
        { id: "kategorie", label: "Wybór floty" },
        { id: "kontakt", label: "Rezerwacja" },
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
      {/* 1. Hero z akcentem */}
      <div id="start">
        <HeroService
          hero="Flota wypożyczalni OKTECH - *Katowice & Śląsk*"
          image="wypozyczalnia.jpg"
          button1={{ text: "ZOBACZ KATEGORIE", link: "#kategorie" }}
          button2={{ text: "ZADZWOŃ DO BAZY", link: "tel:+48000000000" }}
        />
      </div>

      {/* 2. Główne rozgałęzienie: Osobowe vs Dostawcze */}
      <div id="kategorie">
        <DualHubSelector />
      </div>

      {/* 4. CTA z bezpośrednim kontaktem */}
      <div id="kontakt">
        <BigCallToAction
          title="POTRZEBUJESZ SAMOCHODU NA JUŻ?"
          description="Skontaktuj się z naszym dyspozytorem. Przygotujemy pojazd do odbioru w Katowicach lub podstawimy go pod wskazany adres."
          phone="+48 000 000 000"
          auditLink="/kontakt"
        />
      </div>
    </div>
  );
}
