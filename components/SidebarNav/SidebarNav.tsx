"use client";

import { useEffect, useState } from "react";
import { useNav } from "@/context/NavContext";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./SidebarNav.module.scss";

export const SidebarNav = () => {
  const { navInfo } = useNav();
  const [activeId, setActiveId] = useState("");

  const { sections } = navInfo;

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-89% 0px -20% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav className={styles.sidebar}>
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => scrollToSection(section.id)}
          className={`${styles.navItem} ${
            activeId === section.id ? styles.active : ""
          }`}
        >
          {section.icon && <span className={styles.icon}>{section.icon}</span>}
          <Typography as="span" variant="titleS" className={styles.labelText}>
            {section.label}
          </Typography>
        </button>
      ))}
    </nav>
  );
};
