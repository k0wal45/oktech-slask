import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./HeroServices.module.scss";

const stats = [
  { value: "24/7", label: "DOSTĘPNOŚĆ" },
  { value: "150+", label: "POJAZDÓW" },
];

const HeroServices = () => {
  return (
    <Container
      as="section"
      id="system-zintegrowany"
      background="lowest"
      size="base"
      contentWidth="max"
    >
      <div className={styles.wrapper}>
        {/* Lewa strona: Nagłówek HERO */}
        <div className={styles.headline}>
          <Typography as="h1" variant="hero" className={styles.titleWhite}>
            SYSTEM
          </Typography>
          <Typography as="span" variant="hero" className={styles.titlePrimary}>
            ZINTEGROWANY
          </Typography>
        </div>

        {/* Prawa strona: Opis + Statystyki */}
        <div className={styles.content}>
          <div className={styles.textContent}>
            <Typography as="p" variant="bodyM" className={styles.description}>
              Pełna kontrola nad zasobami logistycznymi i flotą pojazdów.
              Zarządzaj usługami HDS, transportem oraz flotą wynajmu z poziomu
              jednego, zautomatyzowanego interfejsu.
            </Typography>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <Typography
                    as="span"
                    variant="h2"
                    lineHeight="none"
                    className={styles.statValue}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    as="span"
                    variant="overline"
                    className={styles.statLabel}
                  >
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroServices;
