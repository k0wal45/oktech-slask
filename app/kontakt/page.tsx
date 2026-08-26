"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import ContactHero from "@/components/Hero/ContactHero/ContactHero";
import Map from "@/components/Map/Map";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

export default function KontaktPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [{ id: "kontakt", label: "kontakt" }],
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
      <Map />
    </div>
  );
}
