import Image from "next/image";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./TechnicalDetails.module.scss";

const FEATURES = [
  "Klasa energetyczna A+++ / A++",
  "Bardzo cicha praca (od 19 DB)",
  "Czujniki obecności i ruchu",
  "Zaawansowane filtry HEPA & PM 2.5",
];

export const TechnicalDetails = () => {
  return (
    <section className={styles.lightSection} id="dane">
      <Container size="base" contentWidth="max" className={styles.grid}>
        {/* Lewa kolumna: Tekst i lista */}
        <div className={styles.textContent}>
          <Typography as="h2" variant="h2" className={styles.heading}>
            Precyzja w każdym detalu technicznym
          </Typography>

          <Typography as="p" variant="bodyM" className={styles.description}>
            Nasze systemy to nie tylko chłodzenie. To zaawansowana filtracja
            powietrza, jonizacja i osuszanie, które tworzą idealny mikroklimat w
            Twoim otoczeniu. Stosujemy wyłącznie najnowocześniejsze czynniki
            chłodnicze R32, dbając o ekologię i wydajność energetyczną.
          </Typography>

          <ul className={styles.featuresList}>
            {FEATURES.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Prawa kolumna: Zagnieżdżona grafika w ciemnej ramie */}
        <div className={styles.imageContent}>
          <div className={styles.badge}>High Tech Design</div>
          <div className={styles.imageWrapper}>
            <Image
              src="/img/klima.jpg" // Podmień na właściwe zdjęcie urządzenia
              alt="Technologia systemów klimatyzacji OKTECH"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechnicalDetails;
