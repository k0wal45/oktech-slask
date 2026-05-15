"use client";
import styles from "./Navbar.module.scss";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import Link from "next/link";
import { useNav } from "@/context/NavContext";
import { useState, useEffect } from "react";

interface Page {
  slug: string;
  name: string;
}

const PAGES: Page[] = [
  { slug: "/", name: "Strona główna" },
  { slug: "/o-nas", name: "O nas" },
  { slug: "/uslugi", name: "Usługi" },
  { slug: "/wypozyczalnia", name: "Wypożyczalnia" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navInfo } = useNav();

  // Zamykanie menu po kliknięciu w link (ważne na mobile)
  const closeMenu = () => setIsOpen(false);

  // Blokowanie scrolla body, gdy menu jest otwarte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      {/* Logo zawsze widoczne po lewej */}
      <Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
        <Logo width="80px" />
      </Link>

      {/* Kontener menu - drawer na mobile */}
      <div className={`${styles.container} ${isOpen ? styles.menuOpen : ""}`}>
        <ul>
          {PAGES.map((item, index) => (
            <li
              key={`${item.slug}-${index}`}
              className={navInfo.path === item.slug ? styles.active : undefined}
            >
              <Link href={item.slug} onClick={closeMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Przycisk wewnątrz menu na mobile, obok menu na desktop */}
        <div className={styles.navActions}>
          <Button href="/kontakt" variant="primary" onClick={closeMenu}>
            Skontaktuj się
          </Button>
        </div>
      </div>

      {/* Hamburger zawsze widoczny po prawej na mobile */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
