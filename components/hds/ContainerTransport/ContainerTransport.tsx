import { BsBoxSeam, BsStack } from "react-icons/bs";
import { TbCrane, TbRulerMeasure, TbChecklist } from "react-icons/tb";
import { GiLevelCrossing } from "react-icons/gi";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./ContainerTransport.module.scss";

const WORKFLOW_STEPS = [
  {
    icon: TbCrane,
    index: "01",
    title: "Rozładunek przez płoty i rowy",
    desc: "Wysięg do 28.5 m pozwala na precyzyjne posadowienie modułu za ogrodzeniem budowlanym, bez wjazdu na grząski teren.",
  },
  {
    icon: BsStack,
    index: "02",
    title: "Piętrowanie modułów",
    desc: "Zestawianie kontenerów w systemy dwu- i trzykondygnacyjne wraz z montażem schodów zewnętrznych i podestów.",
  },
  {
    icon: GiLevelCrossing,
    index: "03",
    title: "Niwelacja i poziomowanie",
    desc: "Posadzenie kontenera na bloczkach betonowych lub płytach drogowych z weryfikacją poziomicą.",
  },
  {
    icon: TbChecklist,
    index: "04",
    title: "Przeprowadzki zaplecz",
    desc: "Kompleksowa relokacja całych miasteczek kontenerowych z jednej inwestycji budowlanej na kolejną.",
  },
];

const CONTAINER_TYPES = [
  { name: "Kontenery biurowe i socjalne", dimension: "6.0 x 2.4 M (10/20 FT)" },
  {
    name: "Kontenery magazynowe morskie",
    dimension: "6.0 / 12.0 M (20/40 FT)",
  },
  { name: "Kontenery sanitarne (WC/Łaźnie)", dimension: "STANDARYZOWANE" },
  { name: "Pawilony modułowe / Stróżówki", dimension: "WYMIARY DOWOLNE" },
];

export const ContainerTransport = () => {
  return (
    <Container
      as="section"
      id="przewoz-kontenerow"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.sectionWrapper}
    >
      {/* Nagłówek SEO */}
      <div className={styles.headerBlock}>
        <div className={styles.metaSubTitle}>
          <BsBoxSeam />
          <span>LOGISTYKA MODUŁOWA // OBSŁUGA PLACÓW BUDOWY</span>
        </div>

        <Typography as="h2" variant="h1" className={styles.mainTitle}>
          TRANSPORT I MONTAŻ <span className={styles.accent}>KONTENERÓW</span>
        </Typography>

        <Typography as="p" variant="bodyM" className={styles.leadText}>
          Dostarczamy, rozładowujemy i montujemy kompletne zaplecza budowlane na
          terenie Śląska i Małopolski. Bez konieczności wynajmowania osobnego
          dźwigu kołowego.
        </Typography>
      </div>

      <div className={styles.contentGrid}>
        {/* Lewa strona: Siatka 4 etapów operacyjnych */}
        <div className={styles.processGrid}>
          {WORKFLOW_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.index} className={styles.processCard}>
                <div className={styles.stepHeader}>
                  <Icon className={styles.icon} />
                  <span className={styles.stepIndex}>{step.index}</span>
                </div>
                <div className={styles.stepBody}>
                  <Typography
                    as="h3"
                    variant="titleS"
                    className={styles.stepTitle}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    as="p"
                    variant="caption"
                    className={styles.stepDesc}
                  >
                    {step.desc}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prawa strona: Lista obsługiwanych kontenerów z wymiarami */}
        <div className={styles.specsSidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.tag}>SPECYFIKACJA ŁADUNKÓW</span>
            <Typography as="h3" variant="h3" className={styles.title}>
              OBSŁUGIWANE JEDNOSTKI
            </Typography>
          </div>

          <ul className={styles.typesList}>
            {CONTAINER_TYPES.map((item, index) => (
              <li key={index}>
                <span className={styles.typeName}>{item.name}</span>
                <span className={styles.typeDim}>{item.dimension}</span>
              </li>
            ))}
          </ul>

          <div className={styles.noticeBox}>
            <Typography as="h4" variant="titleS" className={styles.noticeTitle}>
              TRAWERSY I ZAWIESIA W CENIE
            </Typography>
            <Typography as="p" variant="caption" className={styles.noticeText}>
              Do każdego zlecenia dobieramy atestowane zawiesia 4-cięgnowe oraz
              specjalistyczne trawersy ramowe zapobiegające zgniataniu ścian
              lekkich kontenerów biurowych.
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContainerTransport;
