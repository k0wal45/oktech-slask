"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import HeroService from "@/components/Hero/HeroService/HeroService";
import ProcessGrid from "@/components/Klima/ProcessGrid/ProcessGrid";
import TechnicalDetails from "@/components/Klima/TechnicalDetails/TechnicalDetails";
import PricingCards from "@/components/Klima/PricingCards/PricingCards";
import BigCallToAction from "@/components/callToAction/BigCallToAction/BigCallToAction";

export default function UslugiPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: "proces-realizacji", label: "Proces" },
        { id: "klimaOferta", label: "Oferta" },
        { id: "dane", label: "Dane Techniczne" },
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
      <HeroService
        hero="Montaż klimatyzacji w *katowicach*"
        image="klima.jpg"
        button1={{
          text: "Skontaktuj się",
          link: "/kontakt",
        }}
        button2={{
          text: "Poznaj ofertę",
          link: "#klimaOferta",
        }}
      />
      <ProcessGrid />
      <PricingCards />
      <TechnicalDetails />
      <BigCallToAction />
    </div>
  );
}
