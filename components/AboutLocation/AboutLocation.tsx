import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./AboutLocation.module.scss";

export const AboutLocation = () => {
  return (
    <Container
      as="section"
      id="statsonas"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      {/* Lewa kolumna: Grafika Safe Work z narożnikiem i pinezką */}
      <div className={styles.visualColumn}>
        <div className={styles.cornerTopLeft} aria-hidden="true" />

        <Image
          src="/img/katowice.jpg" // Podmień na ścieżkę do emblematu / logo
          alt="Oktech Safe Work"
          width={500}
          height={500}
          priority
        />

        <div className={styles.locationTile}>
          <FaMapMarkerAlt />
        </div>
      </div>

      {/* Prawa kolumna: Tytuł, opis i kafelek gwarancji */}
      <div className={styles.contentColumn}>
        <Typography as="h2" variant="h2" className={styles.heading}>
          <span>SERCE PRZEMYSŁU: </span>
          <span className={styles.accent}>GÓRNY ŚLĄSK</span>
        </Typography>

        <Typography as="p" variant="bodyM" className={styles.description}>
          Nasz ośrodek operacyjny znajduje się w samym sercu Aglomeracji
          Katowickiej. To stąd codziennie wyruszają jednostki obsługujące całą
          Polskę Południową w promieniu do 150 km. Doskonale znamy specyfikę
          lokalnego terenu i wymogi tutejszych gigantów przemysłowych.
        </Typography>

        <div className={styles.guaranteeCard}>
          <div className={styles.cornerTopRight} aria-hidden="true" />
          <Typography as="h3" variant="titleM" className={styles.cardTitle}>
            GWARANCJA WŁASNOŚCI
          </Typography>
          <Typography as="p" variant="bodyS" className={styles.cardText}>
            POSIADAMY WŁASNĄ FLOTĘ – NIE JESTEŚMY POŚREDNIKIEM.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutLocation;
