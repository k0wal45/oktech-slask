import { FiSmartphone, FiKey } from "react-icons/fi";
import { HiOutlineIdentification } from "react-icons/hi2";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./ProcessGridRental.module.scss";

const STEPS = [
  {
    num: "01",
    icon: FiSmartphone,
    title: "REZERWACJA ONLINE / TELEFONICZNA",
    desc: "Wybór terminu, modelu pojazdu oraz opcji dodatkowych (np. brak limitu km, dostawa pod adres). Rezerwację potwierdzasz w 2 minuty telefonicznie lub przez formularz.",
    meta: "DYSPOZYCYJNOŚĆ KONSULTANTA: 24/7",
  },
  {
    num: "02",
    icon: HiOutlineIdentification,
    title: "MINIMUM FORMALNOŚCI",
    desc: "Błyskawiczna weryfikacja ważnego prawa jazdy (kat. B) oraz dowodu osobistego lub paszportu. Przejrzysta, czytelna umowa elektroniczna bez zbędnej biurokracji.",
    meta: "CZAS FORMALNOŚCI: 5-8 MINUT",
  },
  {
    num: "03",
    icon: FiKey,
    title: "ODBIÓR I W DROGĘ",
    desc: "Odbierasz zatankowany i sprawdzony pojazd w naszej bazie w Katowicach (węzeł A4/DTŚ) lub kierowca dostarcza go bezpośrednio pod Twoje drzwi.",
    meta: "LOKALIZACJA: BAZA KATOWICE",
  },
];

export const ProcessGridRental = () => {
  return (
    <Container
      as="section"
      id="zasady-wynajmu"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      <div className={styles.headerBlock}>
        <span className={styles.metaLabel}>// 04. PROCES OPERACYJNY</span>
        <Typography as="h2" variant="h1" className={styles.mainTitle}>
          ZASADY WYNAJMU W 3 PROSTYCH KROKACH
        </Typography>
        <p className={styles.subTitle}>
          Zminimalizowaliśmy procedury do niezbędnego minimum technicznego.
          Ruszasz w drogę bez stresu i zbędnych formalności.
        </p>
      </div>

      <div className={styles.grid}>
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className={styles.card}>
              <div className={styles.bracketTL} aria-hidden="true" />
              <div className={styles.topRow}>
                <span className={styles.stepNum}>{step.num}</span>
                <Icon className={styles.icon} />
              </div>

              <div className={styles.body}>
                <Typography
                  as="h3"
                  variant="titleM"
                  className={styles.stepTitle}
                >
                  {step.title}
                </Typography>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>

              <div className={styles.footer}>
                <span className={styles.metaInfo}>{step.meta}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ProcessGridRental;
