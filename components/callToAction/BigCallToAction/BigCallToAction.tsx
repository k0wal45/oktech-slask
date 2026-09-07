import Link from "next/link";
import { FiPhone } from "react-icons/fi";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./BigCallToAction.module.scss";

interface BigCallToActionProps {
  title?: string;
  description?: string;
  phone?: string;
  auditLink?: string;
}

export const BigCallToAction = ({
  title = "GOTOWY NA NOWĄ JAKOŚĆ POWIETRZA?",
  description = "Nie czekaj na upały. Zamów darmowy pomiar i dobór urządzenia już dziś. Nasz inżynier odwiedzi Cię w dogodnym terminie.",
  phone = "+48 604 47 66 47",
  auditLink = "/kontakt",
}: BigCallToActionProps) => {
  return (
    <Container
      as="section"
      id="cta"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.ctaWrapper}
    >
      <Typography as="h2" variant="display" className={styles.heading}>
        {title}
      </Typography>

      <Typography as="p" variant="bodyM" className={styles.description}>
        {description}
      </Typography>

      <div className={styles.actions}>
        <Button
          as="a"
          href={`tel:${phone.replace(/\s+/g, "")}`}
          variant="primary"
          size="lg"
          iconLeft={<FiPhone />}
        >
          {phone}
        </Button>

        <Button
          as={Link}
          href={auditLink}
          variant="outline"
          size="lg"
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            borderColor: "#ffffff",
          }}
        >
          FORMULARZ KONTAKTOWY
        </Button>
      </div>
    </Container>
  );
};

export default BigCallToAction;
