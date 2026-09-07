import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./HeroService.module.scss";

interface ButtonType {
  text: string;
  link?: string;
}

interface HeroServiceProps {
  hero: string;
  image: string;
  button1?: ButtonType;
  button2?: ButtonType;
}

// 1. Uniwersalny parser wycinający zawartość pomiędzy gwiazdkami * *
const formatHeroText = (text: string) => {
  const parts = text.split(/\*([^*]+)\*/g);

  return parts.map((part, index) => {
    // Nieparzyste indeksy to tekst z wnętrza gwiazdek
    if (index % 2 === 1) {
      return (
        <span key={index} className={styles.accent}>
          {part}
        </span>
      );
    }
    return part;
  });
};

// 2. Pomocniczy komponent do renderowania przycisków
const ActionButton = ({
  data,
  variant,
  iconRight,
}: {
  data: ButtonType;
  variant: "primary" | "outline";
  iconRight?: React.ReactNode;
}) => {
  const button = (
    <Button variant={variant} size="lg" iconRight={iconRight}>
      {data.text}
    </Button>
  );

  if (!data.link) {
    return button;
  }

  return <Link href={data.link}>{button}</Link>;
};

export const HeroService = ({
  hero,
  image,
  button1,
  button2,
}: HeroServiceProps) => {
  const hasActions = Boolean(button1 || button2);

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`/img/${image}`}
          alt="Montaż i serwis klimatyzacji przemysłowej OKTECH"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className={styles.cornerOverlay} aria-hidden="true" />
      </div>

      <Container size="base" contentWidth="max">
        <div className={styles.contentWrapper}>
          <Typography as="h1" variant="hero" className={styles.title}>
            {formatHeroText(hero)}
          </Typography>

          {hasActions && (
            <div className={styles.actions}>
              {button1 && (
                <ActionButton
                  data={button1}
                  variant="primary"
                  iconRight={<FaArrowRight />}
                />
              )}

              {button2 && <ActionButton data={button2} variant="outline" />}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HeroService;
