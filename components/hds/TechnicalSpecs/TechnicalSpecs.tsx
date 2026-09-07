import { TbCrane } from "react-icons/tb";
import { BsArrowsFullscreen } from "react-icons/bs";
import { LuRuler } from "react-icons/lu";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./TechnicalSpecs.module.scss";

interface SpecCard {
  id: string;
  number: string;
  icon: React.ElementType;
  label: string;
  value: string;
  subLabel: string;
  subValue: string;
  progressPercent: number;
}

const SPECS: SpecCard[] = [
  {
    id: "capacity",
    number: "01",
    icon: TbCrane,
    label: "MAKSYMALNY UDŹWIG",
    value: "24,000 KG",
    subLabel: "Standard",
    subValue: "12.5 T",
    progressPercent: 65,
  },
  {
    id: "reach",
    number: "02",
    icon: LuRuler,
    label: "ZASIĘG HDS",
    value: "28.5 METERS",
    subLabel: "PEŁNA ROZPIĘTOŚĆ",
    subValue: "ACTIVE",
    progressPercent: 90,
  },
  {
    id: "dimensions",
    number: "03",
    icon: BsArrowsFullscreen,
    label: "WYMIARY PAKI",
    value: "8.5 x 2.5 M",
    subLabel: "POLE",
    subValue: "21.25 M²",
    progressPercent: 45,
  },
];

export const TechnicalSpecs = () => {
  return (
    <Container
      as="section"
      id="specyfikacja"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      {/* Nagłówek techniczny ze stemplem rewizji */}
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <Typography as="h2" variant="h2" className={styles.mainTitle}>
            SPECYFIKACJA TECHNICZNA
          </Typography>
          <Typography as="p" variant="overline" className={styles.subTitle}>
            DZIAŁ OPERACJI CIĘŻKICH / OKTECH DIV
          </Typography>
        </div>

        <Typography as="span" variant="overline" className={styles.revCode}>
          REV. 04.24
        </Typography>
      </div>

      {/* Siatka kart specyfikacji */}
      <div className={styles.cardsGrid}>
        {SPECS.map((spec) => {
          const IconComponent = spec.icon;

          return (
            <div key={spec.id} className={styles.card}>
              <div className={styles.topRow}>
                <IconComponent className={styles.icon} />
                <Typography
                  as="span"
                  variant="hero"
                  className={styles.watermarkNumber}
                  aria-hidden="true"
                >
                  {spec.number}
                </Typography>
              </div>

              <div className={styles.midBlock}>
                <Typography
                  as="span"
                  variant="overline"
                  className={styles.label}
                >
                  {spec.label}
                </Typography>
                <Typography as="h3" variant="h2" className={styles.value}>
                  {spec.value}
                </Typography>
              </div>

              <div className={styles.bottomIndicator}>
                <div className={styles.indicatorLabels}>
                  <Typography
                    as="span"
                    variant="caption"
                    className={styles.indSub}
                  >
                    {spec.subLabel}
                  </Typography>
                  <Typography
                    as="span"
                    variant="caption"
                    className={styles.indVal}
                  >
                    {spec.subValue}
                  </Typography>
                </div>

                <div className={styles.progressBarTrack} aria-hidden="true">
                  <div
                    className={styles.progressBarFill}
                    style={{ width: `${spec.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default TechnicalSpecs;
