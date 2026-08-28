"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import ContactHero from "@/components/Hero/ContactHero/ContactHero";
import Map from "@/components/Map/Map";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import ServicesList from "@/components/Services/ServicesList/ServicesList";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function KontaktPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: "contactInfo", label: "Informacje" },
        { id: "contactForm", label: "Formularz" },
        { id: "contactMap", label: "Mapa" },
      ],
    });

    return () =>
      setNavInfo({
        path: "/",
        sections: [],
      });
  }, [setNavInfo, pathname]);

  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Map />
    </div>
  );
}
