"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useNav } from "@/context/NavContext";
import { Logo } from "../Logo/Logo";
import { Button } from "@/ui/Button/Button";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./Navbar.module.scss";

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

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
        <Logo width="80px" />
      </Link>

      <div className={`${styles.container} ${isOpen ? styles.menuOpen : ""}`}>
        <ul>
          {PAGES.map((item, index) => (
            <li
              key={`${item.slug}-${index}`}
              className={navInfo.path === item.slug ? styles.active : undefined}
            >
              <Typography
                as={Link}
                href={item.slug}
                variant="titleS"
                onClick={closeMenu}
                className={styles.navLink}
              >
                {item.name}
              </Typography>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <Button
            as={Link}
            href="/kontakt"
            variant="primary"
            onClick={closeMenu}
          >
            Skontaktuj się
          </Button>
        </div>
      </div>

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
