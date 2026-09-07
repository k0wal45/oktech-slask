import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./AboutStats.module.scss";

export const AboutStats = () => {
  return (
    <Container
      as="section"
      id="standard-operacyjny"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      <div className={styles.headerBlock}>
        <span className={styles.metaLabel}>// 03. STANDARD OPERACYJNY</span>
        <Typography as="h2" variant="h2" className={styles.mainTitle}>
          GWARANCJA SPRAWNOŚCI I BRAK RYZYKA
        </Typography>
      </div>

      <div className={styles.grid}>
        {/* Karta 1 */}
        <div className={styles.card}>
          <div className={styles.topRow}>
            <IoSettingsOutline className={styles.icon} />
            <span className={styles.categoryTag}>KONTROLA ASO</span>
          </div>
          <div className={styles.body}>
            <span className={styles.metricNumber}>100%</span>
            <Typography as="h3" variant="titleM" className={styles.metricTitle}>
              SPRAWNOŚCI FLOTY
            </Typography>
            <p className={styles.desc}>
              Regularny i rygorystyczny serwis w autoryzowanych stacjach
              obsługi. Świeże roczniki, regularne badania techniczne i
              natychmiastowa wymiana elementów eksploatacyjnych.
            </p>
          </div>
          <div className={styles.bottomBar} aria-hidden="true" />
        </div>

        {/* Karta 2 (Wyróżniona) */}
        <div className={`${styles.card} ${styles.featured}`}>
          <span className={styles.featuredBadge}>KLUCZOWA PRZEWAGA</span>
          <div className={styles.topRow}>
            <HiOutlineCash
              className={`${styles.icon} ${styles.featuredIcon}`}
            />
            <span className={`${styles.categoryTag} ${styles.featuredTag}`}>
              TRANSPARENTNOŚĆ
            </span>
          </div>
          <div className={styles.body}>
            <span className={`${styles.metricNumber} ${styles.featuredMetric}`}>
              0 PLN
            </span>
            <Typography as="h3" variant="titleM" className={styles.metricTitle}>
              UKRYTYCH KOSZTÓW
            </Typography>
            <p className={styles.desc}>
              Przejrzyste kaucje zwracane od ręki, jasne i czytelne umowy bez
              drobnego druku i bez ukrytych gwiazdek. Wycena, którą otrzymujesz
              przed startem, jest ostateczna.
            </p>
          </div>
          <div
            className={`${styles.bottomBar} ${styles.featuredBar}`}
            aria-hidden="true"
          />
        </div>

        {/* Karta 3 */}
        <div className={styles.card}>
          <div className={styles.topRow}>
            <FiSend className={styles.icon} />
            <span className={styles.categoryTag}>LOGISTYKA DOOR-TO-DOOR</span>
          </div>
          <div className={styles.body}>
            <span className={styles.metricNumber}>&lt; 60 MIN</span>
            <Typography as="h3" variant="titleM" className={styles.metricTitle}>
              DOSTARCZENIE NA ŚLĄSKU
            </Typography>
            <p className={styles.desc}>
              Opcja ekspresowego podstawienia pojazdu bezpośrednio pod Twój dom,
              siedzibę firmy, warsztat lub na lotnisko Katowice-Pyrzowice oraz
              Kraków-Balice.
            </p>
          </div>
          <div
            className={`${styles.bottomBar} ${styles.featuredBar}`}
            aria-hidden="true"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutStats;
