import React from "react";
import styles from "./ContactHero.module.scss";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";

const ContactHero = () => {
  return (
    <Container
      as="header"
      size="small"
      background="surface"
      className={styles.contact}
    >
      <Typography as="h1" variant="hero">
        Kontakt
      </Typography>
      <Typography as="p" variant="titleM">
        Wybierdz dział, którego potrzebujesz
      </Typography>
    </Container>
  );
};

export default ContactHero;
