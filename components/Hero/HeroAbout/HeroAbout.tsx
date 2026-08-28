import Image from "next/image";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./HeroAbout.module.scss";

export const HeroAbout = () => {
  return (
    <section className={styles.heroWrapper}>
      {/* Kontener centruje treść do 1200px i nakłada siatkę */}
      <Container size="small" contentWidth="max" className={styles.heroContent}>
        {/* Lewa kolumna z tekstami */}
        <div className={styles.leftColumn}>
          <Typography as="h1" variant="hero" className={styles.title}>
            <span>OKTECH –</span>
            <br />
            <span className={styles.accent}>ŚLĄSKA PRECYZJA,</span>
            <br />
            <span>PRZEMYSŁOWA MOC.</span>
          </Typography>

          <div className={styles.quoteBox}>
            <div className={styles.verticalLine} />
            <Typography as="p" variant="bodyM" className={styles.description}>
              Nie boimy się ciężarów, wysokości ani trudnych warunków. Od lat
              dostarczamy rozwiązania tam, gdzie liczy się terminowość i
              niezawodność.
            </Typography>
          </div>
        </div>
      </Container>

      {/* Prawa strona: Grafika maszyny w skali szarości z rombem */}
      <div className={styles.machineWrapper}>
        <Image
          src="/img/hds.jpg"
          alt="Ciężki sprzęt i transport HDS OKTECH"
          fill
          priority
          sizes="(max-width: 1100px) 100vw, 68vw"
        />
      </div>
    </section>
  );
};

export default HeroAbout;
