import { GoDotFill } from "react-icons/go";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./Data.module.scss";

const Data = () => {
  const rokZalozenia = 2001;
  const obecnyRok = new Date().getFullYear();
  const lataDoswiadczenia = obecnyRok - rokZalozenia;

  return (
    <Container
      as="section"
      id="data"
      size="base"
      contentWidth="max"
      contentClassName={styles.data} // <-- ZMIANA: Przekazujemy styl grida do wrappera wewnątrz
    >
      <div className={styles.textContainer}>
        <Typography as="p" variant="display">
          TWARDE DANE
        </Typography>

        <Typography as="p" variant="bodyM" className={styles.description}>
          PARAMETRY OPERACYJNE I MOŻLIWOŚCI TECHNICZNE FIRMY OKTECH
        </Typography>

        <div className={styles.ctaBox}>
          <Typography
            as="span"
            variant="overline"
            className={styles.primaryText}
          >
            NASZA DOSTĘPNOŚĆ
          </Typography>
          <Typography as="p" variant="titleS" className={styles.statusText}>
            <GoDotFill /> GOTOWI DO PRACY
          </Typography>
          <Typography as="p" variant="bodyS" className={styles.mutedText}>
            REF OK-00249-TECH-B
          </Typography>
        </div>
      </div>

      <div className={styles.dataDisplay}>
        {/* Panel 1 */}
        <div className={styles.panel}>
          <Typography
            as="span"
            variant="overline"
            className={styles.primaryText}
          >
            MAKS. UDŹWIG
          </Typography>
          <div className={styles.gridTile}>
            <Typography as="span" variant="statNumber">
              3
            </Typography>
            <Typography as="p" variant="titleM">
              TONY
            </Typography>
          </div>
          <Typography as="p" variant="bodyS" className={styles.mutedText}>
            MAKSYMALNY UDŹWIG NASZEJ CIĘŻARÓWKI
          </Typography>
        </div>

        {/* Panel 2 */}
        <div className={styles.panel}>
          <Typography
            as="span"
            variant="overline"
            className={styles.primaryText}
          >
            ZASIĘG DŹWIGU
          </Typography>
          <div className={styles.gridTile}>
            <Typography as="span" variant="statNumber">
              15
            </Typography>
            <Typography as="p" variant="titleM">
              METRÓW
            </Typography>
          </div>
          <Typography as="p" variant="bodyS" className={styles.mutedText}>
            MAKSYMALNY ZASIĘG NASZEGO NAJWIĘKSZEGO DŹWIGU
          </Typography>
        </div>

        {/* Panel 3 */}
        <div className={styles.panel}>
          <Typography
            as="span"
            variant="overline"
            className={styles.primaryText}
          >
            WIELKOŚĆ FLOTY
          </Typography>
          <div className={styles.gridTile}>
            <Typography as="span" variant="statNumber">
              12
            </Typography>
            <Typography as="p" variant="titleM">
              POJAZDÓW
            </Typography>
          </div>
          <Typography as="p" variant="bodyS" className={styles.mutedText}>
            ILOŚĆ SAMOCHODÓW WE FLOCIE NASZEJ FIRMY
          </Typography>
        </div>

        {/* Panel 4 */}
        <div className={styles.panel}>
          <Typography
            as="span"
            variant="overline"
            className={styles.primaryText}
          >
            LATA DOŚWIADCZENIA
          </Typography>
          <div className={styles.gridTile}>
            <Typography as="span" variant="statNumber">
              {lataDoswiadczenia}
            </Typography>
            <Typography as="p" variant="titleM">
              LAT
            </Typography>
          </div>
          <Typography as="p" variant="bodyS" className={styles.mutedText}>
            FIRMA POWSTAŁA W {rokZalozenia} ROKU
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Data;
