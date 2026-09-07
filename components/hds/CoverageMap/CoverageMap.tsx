import { FiMapPin } from "react-icons/fi";
import { FaTruckMoving } from "react-icons/fa";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./CoverageMap.module.scss";

const CITY_DELIVERY_TIMES = [
  { city: "KATOWICE", duration: "15 - 30 MIN" },
  { city: "GLIWICE", duration: "25 - 40 MIN" },
  { city: "TYCHY", duration: "20 - 35 MIN" },
  { city: "DĄBROWA GÓRNICZA", duration: "25 - 35 MIN" },
  { city: "SOSNOWIEC", duration: "20 - 30 MIN" },
  { city: "BYTOM / ZABRZE", duration: "25 - 35 MIN" },
  { city: "RYBNIK / ŻORY", duration: "40 - 55 MIN" },
  { city: "BIELSKO-BIAŁA", duration: "50 - 65 MIN" },
];

export const CoverageMap = () => {
  return (
    <Container
      as="section"
      id="zasieg-baza"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      {/* Nagłówek sekcji z banerem floty */}
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.topSubTitle}>
            <FiMapPin />
            <span>BAZA STRATEGICZNA // GÓRNY ŚLĄSK & REGION POŁUDNIOWY</span>
          </div>
          <Typography as="h2" variant="h1" className={styles.mainTitle}>
            ZASIĘG DZIAŁANIA I BAZA KATOWICE
          </Typography>
        </div>

        <div className={styles.fleetBanner}>
          <FaTruckMoving />
          <span>WŁASNA FLOTA – NIE JESTEŚMY POŚREDNIKIEM</span>
        </div>
      </div>

      {/* Siatka główna */}
      <div className={styles.mainGrid}>
        {/* Lewa strona: Dynamiczny radar z miastami aglomeracji */}
        <div className={styles.radarContainer}>
          <svg
            className={styles.radarCanvas}
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Okręgi zasięgu */}
            <circle
              cx="250"
              cy="250"
              r="210"
              stroke="rgba(255, 154, 0, 0.15)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="150"
              stroke="rgba(255, 154, 0, 0.25)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="90"
              stroke="rgba(255, 154, 0, 0.4)"
              strokeWidth="1.5"
            />
            <circle
              cx="250"
              cy="250"
              r="30"
              stroke="var(--primary)"
              strokeWidth="1.5"
            />

            {/* Osie celownika */}
            <line
              x1="250"
              y1="20"
              x2="250"
              y2="480"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />
            <line
              x1="20"
              y1="250"
              x2="480"
              y2="250"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />

            {/* Baza centralna: Katowice */}
            <rect
              x="243"
              y="243"
              width="14"
              height="14"
              fill="var(--primary)"
              transform="rotate(45 250 250)"
            />
            <g transform="translate(195, 275)">
              <rect
                x="0"
                y="0"
                width="110"
                height="24"
                fill="#000000"
                stroke="var(--primary)"
                strokeWidth="1"
              />
              <text
                x="55"
                y="11"
                fill="var(--primary)"
                fontSize="8"
                fontFamily="var(--font-space)"
                fontWeight="bold"
                textAnchor="middle"
              >
                BAZA OKTECH: KATOWICE
              </text>
              <text
                x="55"
                y="19"
                fill="#a0a0a0"
                fontSize="6"
                fontFamily="var(--font-space)"
                textAnchor="middle"
              >
                50.2763° N, 19.0166° E
              </text>
            </g>

            {/* Punkty miast */}
            {/* Gliwice */}
            <circle cx="150" cy="220" r="4" fill="#ffffff" />
            <text
              x="160"
              y="223"
              fill="#ffffff"
              fontSize="9"
              fontFamily="var(--font-space)"
              fontWeight="bold"
            >
              GLIWICE
            </text>

            {/* Dąbrowa Górnicza */}
            <circle cx="340" cy="180" r="4" fill="#ffffff" />
            <text
              x="350"
              y="183"
              fill="#ffffff"
              fontSize="9"
              fontFamily="var(--font-space)"
              fontWeight="bold"
            >
              DĄBROWA GÓRN.
            </text>

            {/* Tychy */}
            <circle cx="310" cy="330" r="4" fill="#ffffff" />
            <text
              x="320"
              y="333"
              fill="#ffffff"
              fontSize="9"
              fontFamily="var(--font-space)"
              fontWeight="bold"
            >
              TYCHY
            </text>

            {/* Bielsko-Biała */}
            <circle cx="180" cy="390" r="4" fill="#ffffff" />
            <text
              x="190"
              y="393"
              fill="#ffffff"
              fontSize="9"
              fontFamily="var(--font-space)"
              fontWeight="bold"
            >
              BIELSKO-BIAŁA
            </text>
            <circle cx="460" cy="240" r="4" fill="#ffffff" />
            <text
              x="430"
              y="260"
              fill="#ffffff"
              fontSize="9"
              fontFamily="var(--font-space)"
              fontWeight="bold"
            >
              KRAKÓW
            </text>
          </svg>

          <div className={styles.radarFooter}>
            <Typography
              as="span"
              variant="overline"
              className={styles.radiusText}
            >
              PROMIEŃ PODSTAWOWY: 150 KM
            </Typography>
          </div>
        </div>

        {/* Prawa strona: Kafelki miast i czasy */}
        <div className={styles.detailsCol}>
          <Typography as="h3" variant="h3" className={styles.detailsTitle}>
            BŁYSKAWICZNE PODSTAWIENIE HDS W AGLOMERACJI ŚLĄSKIEJ
          </Typography>

          <Typography as="p" variant="bodyM" className={styles.detailsDesc}>
            Dzięki strategicznej lokalizacji bazy sprzętowej przy węźle
            autostrad A4 i A1 oraz Drogowej Trasy Średnicowej (DTŚ),
            gwarantujemy najkrótsze czasy dojazdu w regionie. Brak pośredników
            to niższa cena i bezpośredni kontakt z dyspozytorem prowadzącym
            zlecenie.
          </Typography>

          <div className={styles.timesGrid}>
            {CITY_DELIVERY_TIMES.map((item, idx) => (
              <div key={idx} className={styles.timeRow}>
                <span className={styles.cityName}>{item.city}</span>
                <span className={styles.cityDuration}>{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoverageMap;
