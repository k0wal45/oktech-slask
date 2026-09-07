import { FaBolt, FaShieldAlt, FaWifi } from "react-icons/fa";
import { TbFileInvoice, TbTools } from "react-icons/tb";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./ProcessGrid.module.scss";

export const ProcessGrid = () => {
  return (
    <Container
      as="section"
      id="proces-realizacji"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      <div className={styles.header}>
        <div className={styles.line} aria-hidden="true" />
        <Typography as="h2" variant="titleL" className={styles.title}>
          NASZ PROCES REALIZACJI
        </Typography>
      </div>

      <div className={styles.grid}>
        {/* Rząd 1: Krok 01 (span 2) */}
        <div
          className={`${styles.card} ${styles.firstCard} ${styles.colSpan2}`}
        >
          <TbFileInvoice className={styles.stepIcon} />
          <Typography as="h3" variant="h4" className={styles.stepTitle}>
            BEZPŁATNA WYCENA
          </Typography>
          <Typography as="p" variant="bodyM" className={styles.stepDesc}>
            Przeprowadzamy szczegółowy audyt techniczny w Twoim obiekcie.
            Analizujemy kubaturę, izolację i nasłonecznienie, aby dobrać
            jednostkę o optymalnej mocy. Otrzymujesz precyzyjny kosztorys bez
            ukrytych opłat.
          </Typography>
          <Typography
            as="span"
            variant="hero"
            className={styles.watermarkNumber}
            aria-hidden="true"
          >
            01
          </Typography>
        </div>

        {/* Rząd 1: Krok 02 (span 1) */}
        <div className={`${styles.card} ${styles.colSpan1}`}>
          <FaBolt className={styles.stepIcon} />
          <Typography as="h3" variant="h4" className={styles.stepTitle}>
            SZYBKI MONTAŻ
          </Typography>
          <Typography as="p" variant="bodyM" className={styles.stepDesc}>
            Nasze ekipy montażowe to certyfikowani specjaliści. Realizacja w 48h
            od akceptacji projektu. Czystość i precyzja to nasz standard.
          </Typography>
          <Typography
            as="span"
            variant="hero"
            className={styles.watermarkNumber}
            aria-hidden="true"
          >
            02
          </Typography>
          <TbTools className={styles.watermarkIcon} aria-hidden="true" />
        </div>

        {/* Rząd 2: Krok 03 (span 1) */}
        <div className={`${styles.card} ${styles.colSpan1}`}>
          <FaShieldAlt className={styles.stepIcon} />
          <Typography as="h3" variant="h4" className={styles.stepTitle}>
            GWARANCJA I SERWIS
          </Typography>
          <Typography as="p" variant="bodyM" className={styles.stepDesc}>
            Zapewniamy pełną opiekę pogwarancyjną oraz regularne przeglądy
            okresowe. Twoje urządzenie będzie pracować wydajnie przez lata
            dzięki naszej opiece technicznej 24/7.
          </Typography>
          <Typography
            as="span"
            variant="hero"
            className={styles.watermarkNumber}
            aria-hidden="true"
          >
            03
          </Typography>
        </div>

        {/* Rząd 2: Karta Specyfikacji i WiFi (span 2) */}
        <div className={`${styles.statsCard} ${styles.colSpan2}`}>
          <div className={styles.metricsRow}>
            <div className={styles.metricItem}>
              <Typography as="span" variant="h2" className={styles.metricValue}>
                5 LAT
              </Typography>
              <Typography
                as="span"
                variant="overline"
                className={styles.metricLabel}
              >
                GWARANCJI PRODUCENTA
              </Typography>
            </div>

            <div className={styles.metricItem}>
              <Typography as="span" variant="h2" className={styles.metricValue}>
                24H
              </Typography>
              <Typography
                as="span"
                variant="overline"
                className={styles.metricLabel}
              >
                CZAS REAKCJI SERWISU
              </Typography>
            </div>
          </div>

          <div className={styles.wifiFooter}>
            <Typography
              as="span"
              variant="overline"
              className={styles.wifiText}
            >
              SYSTEMY INTELIGENTNEGO STEROWANIA WIFI W STANDARDZIE
            </Typography>
            <FaWifi className={styles.wifiIcon} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProcessGrid;
