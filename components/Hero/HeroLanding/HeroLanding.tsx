import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./HeroLanding.module.scss";

const HeroLanding = () => {
  return (
    <Container as="header" size="none" className={styles.hero}>
      <Typography as="h1" variant="hero" className={styles.title}>
        Oktech
        <br />
        <Typography as="span" variant="hero" className={styles.highlight}>
          Transport HDS
          <br />
        </Typography>
        Klimatyzacje
        <br />
        Śląsk
        <br />
      </Typography>

      <div className={styles.buttonWrapper}>
        <Button as={Link} href="/uslugi" variant="primary">
          Sprawdź usługi
        </Button>
        <Button as={Link} href="/kontakt" variant="outline">
          Skontaktuj się
        </Button>
      </div>

      <Image
        width={1920}
        height={1080}
        src="/img/herolanding.jpg"
        alt="Flota Oktech Śląsk"
        loading="eager"
        sizes="100vw"
      />
    </Container>
  );
};

export default HeroLanding;
