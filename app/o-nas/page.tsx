"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import HeroAbout from "@/components/Hero/HeroAbout/HeroAbout";
import AboutLocation from "@/components/AboutLocation/AboutLocation";
import AboutStats from "@/components/AboutStats/AboutStats";
import Timeline from "@/components/Timeline/Timeline";
import CallToAction from "@/components/callToAction/CallToAction";

export default function OnasPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: "statsonas", label: "O Nas" },
        { id: "statsstats", label: "Statystyki" },
        { id: "statsevo", label: "Ewolucja" },
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
      <HeroAbout />
      <AboutLocation />
      <AboutStats />
      <Timeline />
      <CallToAction />
    </div>
  );
}
