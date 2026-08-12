import Link from "next/link";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <Container as="section" size="none" className={styles.cta}>
      <div>
        <Typography as="h5" variant="h2">
          Gotowy na realizację projektu?
        </Typography>
        <Typography as="p" variant="bodyL">
          Niezależnie od tego, czy potrzebujesz precyzyjnego transportu HDS, czy
          instalacji nowoczesnej klimatyzacji – nasz zespół na Śląsku jest
          gotowy do działania. Skonfiguruj usługę i odbierz darmową wycenę.
        </Typography>
      </div>

      <Button as={Link} href="/kontakt" variant="primary">
        Rozpocznij współpracę
      </Button>

      <Typography as="span" variant="h1" aria-hidden="true">
        OKTECH
      </Typography>
    </Container>
  );
};

export default CallToAction;
