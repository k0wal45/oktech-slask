import Link from "next/link";
import { FaBolt, FaRegSnowflake, FaWrench, FaRegClock } from "react-icons/fa";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./PricingCards.module.scss";

interface OfferCard {
  id: string;
  icon: React.ElementType;
  price: string;
  title: string;
  duration: string;
  features: string[];
}

const OFFERS: OfferCard[] = [
  {
    id: "standard",
    icon: FaBolt,
    price: "od 3 500 PLN",
    title: "MONTAŻ STANDARDOWY",
    duration: "4-6 GODZIN",
    features: [
      "Jednostka wewnętrzna i zewnętrzna",
      "Instalacja do 3m",
      "Próba szczelności",
    ],
  },
  {
    id: "premium",
    icon: FaRegSnowflake,
    price: "Indywidualna",
    title: "MONTAŻ PREMIUM / MULTI",
    duration: "1-2 DNI ROBOCZE",
    features: [
      "Systemy Multi-Split",
      "Ukryta instalacja w bruzdach",
      "Odprowadzenie skroplin pompką",
    ],
  },
  {
    id: "service",
    icon: FaWrench,
    price: "od 450 PLN",
    title: "SERWIS I PRZEGLĄD",
    duration: "OK. 1.5 GODZINY",
    features: [
      "Odgrzybianie i dezynfekcja",
      "Czyszczenie filtrów",
      "Kontrola czynnika chłodniczego",
    ],
  },
];

export const PricingCards = () => {
  return (
    <Container
      as="section"
      id="klimaOferta"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      {/* Nagłówek techniczny bez badge */}
      <div className={styles.header}>
        <Typography as="h2" variant="h2" className={styles.title}>
          OFERTA TECHNICZNA
        </Typography>
        <div className={styles.subTitleRow}>
          <div className={styles.line} aria-hidden="true" />
          <Typography as="span" variant="overline" className={styles.subTitle}>
            PRECYZYJNA WYCENA I TERMINY
          </Typography>
        </div>
      </div>

      {/* Siatka 3 kart */}
      <div className={styles.cardsGrid}>
        {OFFERS.map((offer) => {
          const IconComponent = offer.icon;

          return (
            <div key={offer.id} className={styles.card}>
              <div className={styles.cardTop}>
                <IconComponent className={styles.icon} />
                <div className={styles.priceBlock}>
                  <Typography
                    as="span"
                    variant="overline"
                    className={styles.priceLabel}
                  >
                    CENA
                  </Typography>
                  <Typography
                    as="span"
                    variant="titleL"
                    className={styles.priceValue}
                  >
                    {offer.price}
                  </Typography>
                </div>
              </div>

              <div className={styles.cardBody}>
                <Typography as="h3" variant="h4" className={styles.cardTitle}>
                  {offer.title}
                </Typography>

                <div className={styles.durationRow}>
                  <FaRegClock className={styles.clockIcon} />
                  <Typography
                    as="span"
                    variant="overline"
                    className={styles.durationText}
                  >
                    {offer.duration}
                  </Typography>
                </div>

                <ul className={styles.featuresList}>
                  {offer.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <Button
                as={Link}
                href="/kontakt"
                variant="outline"
                size="md"
                className={styles.actionButton}
              >
                ZAMÓW WYCENĘ
              </Button>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PricingCards;
