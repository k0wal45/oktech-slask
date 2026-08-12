import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./LandingONas.module.scss";

const LandingONas = () => {
  return (
    <Container
      as="section"
      id="o-firmie"
      background="container"
      size="base"
      contentWidth="max"
      contentClassName={styles.container}
    >
      {/* Lewa strona: Duże zdjęcie */}
      <div className={styles.gridPanelBig}>
        <Image
          src="/img/herolanding.jpg"
          alt="Siedziba"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles.cornerOverlay}></div>
        <div className={styles.textOverlay}>
          <Typography as="h5" variant="h5">
            SIEDZIBA OKTECH
          </Typography>
          <Typography as="p" variant="bodyM" className={styles.overlayDesc}>
            Centrum dowodzenia i serce operacyjne konglomeratu. Nowoczesna
            infrastruktura wspierająca rozwój przemysłu.
          </Typography>
        </div>
      </div>

      {/* Prawa strona: Dwa mniejsze panele */}
      <div className={styles.rightSide}>
        <div className={styles.servicePanel}>
          <Typography as="h5" variant="h5" className={styles.primaryTitle}>
            PROTOKÓŁ SERWISOWY
          </Typography>
          <Typography as="p" variant="bodyM">
            Pełne wsparcie techniczne 365 dni w roku. Nasze zespoły serwisowe są
            rozlokowane w strategicznych punktach kraju dla maksymalnej
            szybkości działania.
          </Typography>
        </div>

        <div className={styles.b2bPanel}>
          <Typography as="h5" variant="h5">
            WSPÓŁPRACA B2B
          </Typography>
          <Typography as="p" variant="bodyM" className={styles.b2bDesc}>
            Dołącz do grona partnerów OKTECH i zyskaj dostęp do
            najnowocześniejszej floty maszyn budowlanych i transportowych.
          </Typography>
          <Button as={Link} href="/kontakt" variant="black" size="md">
            KONTAKT Z NAMI
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default LandingONas;
