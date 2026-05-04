'use client'
import styles from './Navbar.module.scss';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import Link from 'next/link';
import { useNav } from '@/context/NavContext';

interface Page {
  slug: string;
  name: string;
}

const PAGES:Page[] = [
  {
    slug: "/",
    name: "Strona główna"
  }, 
  {
    slug: "/o-nas",
    name: "O nas"
  }, 
  {
    slug: "/uslugi",
    name: "Usługi"
  }, 
  {
    slug: "/wypozyczalnia",
    name: "Wypożyczalnia"
  }, 
]

const Navbar = () => {
  const { navInfo } = useNav();

  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <Logo width={"100px"}/>
      </Link>
      <ul>
        {PAGES.map((item, index) => (
          <li key={`${item.slug}-${index}`} className={navInfo.path == item.slug ? styles.active : undefined}>
            <Link href={item.slug}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Button href="/kontakt" variant="primary">
        Skontaktuj się
      </Button>
    </nav>
  )
}

export default Navbar
