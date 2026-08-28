import { FaTruckMoving, FaMapMarkedAlt } from "react-icons/fa";
import { TbCrane } from "react-icons/tb";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./AboutStats.module.scss";

const getYearsSinceStart = () => {
  const startDate = new Date(2000, 6, 1);
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();

  if (
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() &&
      today.getDate() < startDate.getDate())
  ) {
    years -= 1;
  }

  return years;
};

const STATS_CARDS = [
  {
    id: "hds-count",
    icon: TbCrane,
    mainText: `${getYearsSinceStart()}+`,
    isNumber: true,
    description: "LAT DOŚWIADCZENIA",
    variant: "dark",
  },
  {
    id: "units-count",
    icon: FaTruckMoving,
    mainText: "25+",
    isNumber: true,
    description: "POJAZDÓW WE FLOCIE W GOTOWOŚCI",
    variant: "primary",
  },
  {
    id: "region-coverage",
    icon: FaMapMarkedAlt,
    mainText: "POLSKA\nPOŁUDNIOWA",
    isNumber: false,
    description: "ŚLĄSK, MAŁOPOLSKA, OPOLSZCZYZNA",
    variant: "dark",
  },
];

export const AboutStats = () => {
  return (
    <Container
      as="section"
      id="statsstats"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.statsGrid}
    >
      {STATS_CARDS.map((card) => {
        const IconComponent = card.icon;
        const isPrimary = card.variant === "primary";

        return (
          <div
            key={card.id}
            className={`${styles.card} ${
              isPrimary ? styles.cardPrimary : styles.cardDark
            }`}
          >
            <div className={styles.iconWrapper}>
              <IconComponent />
            </div>

            <div className={styles.bottomContent}>
              <Typography
                as="h3"
                variant={card.isNumber ? "display" : "h2"}
                className={styles.mainText}
                style={{ whiteSpace: "pre-line" }}
              >
                {card.mainText}
              </Typography>

              <Typography
                as="p"
                variant="overline"
                className={styles.description}
              >
                {card.description}
              </Typography>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default AboutStats;
