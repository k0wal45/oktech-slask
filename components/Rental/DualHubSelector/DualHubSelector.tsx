import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./DualHubSelector.module.scss";

export const DualHubSelector = () => {
  return (
    <Container
      as="section"
      size="base"
      contentWidth="max"
      className={styles.grid}
    >
      {/* Karta 1: Osobowe i kabriolety */}
      <div className={styles.card}>
        <div className={styles.imageBg}>
          <Image
            src="/img/fleet/mustang-bg.jpg"
            alt="Flota osobowa"
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.tag}>FUN &amp; BUSINESS // OD 150 PLN</span>
          <Typography as="h2" variant="h2" className={styles.title}>
            FLOTA OSOBOWA &amp; KABRIOLETY
          </Typography>
          <ul className={styles.features}>
            <li>Kabriolety na weekendy, trasy i uroczystości</li>
            <li>Reprezentacyjne sedany biznesowe i SUV-y</li>
            <li>Opcja pełnego zniesienia udziału własnego w szkodzie</li>
            <li>Czyste, zatankowane pojazdy z pełnym ubezpieczeniem</li>
          </ul>
        </div>
        <div className={styles.actionWrapper}>
          <Button
            as={Link}
            href="/wypozyczalnia/osobowe"
            variant="primary"
            size="lg"
          >
            PRZEJDŹ DO AUT OSOBOWYCH →
          </Button>
        </div>
      </div>

      {/* Karta 2: Dostawcze i autolawety */}
      <div className={styles.card}>
        <div className={styles.imageBg}>
          <Image
            src="/img/fleet/laweta-bg.jpg"
            alt="Flota dostawcza"
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.tag}>LOGISTYKA // PRAWO JAZDY KAT. B</span>
          <Typography as="h2" variant="h2" className={styles.title}>
            FLOTA DOSTAWCZA &amp; AUTOLAWETY
          </Typography>
          <ul className={styles.features}>
            <li>Autolawety z wyciągarką elektryczną 6.5T z pilotem</li>
            <li>Busy blaszaki Maxi L4H2 o przestrzeni ładunkowej 15 m³</li>
            <li>Pasy transportowe 3-punktowe i najazdy w cenie najmu</li>
            <li>Pełna faktura VAT 23% dla przedsiębiorstw i warsztatów</li>
          </ul>
        </div>
        <div className={styles.actionWrapper}>
          <Button
            as={Link}
            href="/wypozyczalnia/dostawcze"
            variant="primary"
            size="lg"
          >
            PRZEJDŹ DO POJAZDÓW DOSTAWCZYCH →
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default DualHubSelector;
