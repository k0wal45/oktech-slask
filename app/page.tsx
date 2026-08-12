"use client";

import CallToAction from "@/components/callToAction/CallToAction";
import Data from "@/components/Data/Data";
import HeroLanding from "@/components/Hero/HeroLanding/HeroLanding";
import LandingONas from "@/components/LandingONas/LandingONas";
import ServicesList from "@/components/Services/ServicesList/ServicesList";
import { useNav } from "@/context/NavContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
    </div>
  );
}
