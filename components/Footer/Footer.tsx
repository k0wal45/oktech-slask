import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.title}>
          <Link href="#header">OKTECH</Link>
        </p>
        <ul>
          <li>
            <Link href="/">Strona główna</Link>
          </li>
          <li>
            <Link href="/uslugi">Usługi</Link>
          </li>
          <li>
            <Link href="/wypozyczalnia">Wypożyczalnia</Link>
          </li>
          <li>
            <Link href="/o-nas">O nas</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>

      <div>
        <p>&copy; {year} Wszelkie prawa zastrzeżone.</p>
        <span>
          Created by:{" "}
          <a href="https://lunarisweb.pl" className={styles.creator}>
            LunarisWeb.pl
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
