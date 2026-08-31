"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import HeroServices from "@/components/Hero/HeroServices/HeroServices";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";

export default function UslugiPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [{ id: "uslugi", label: "Uslugi" }],
    });

    return () =>
      setNavInfo({
        path: "/",
        sections: [],
      });
  }, [setNavInfo, pathname]);

  return (
    <div className="p-20">
      <HeroServices />
      <ServicesGrid />
    </div>
  );
}
