import styles from "./ContactInfo.module.scss";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import Image from "next/image";
import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <Container
      id="contactInfo"
      size="none"
      background="surface"
      contentWidth="max"
      className={styles.info}
    >
      <div className={styles.card}>
        <div className={styles.container}>
          <FaHelmetSafety />
          <Typography as="h2" variant="h3">
            HDS i zwyżka
          </Typography>
          <ul>
            <li>
              <Typography as="p" variant="titleM">
                Transport ciężki
              </Typography>
            </li>
            <li>
              <Typography as="p" variant="titleM">
                Klimatyzacje
              </Typography>
            </li>
            <li>
              <Typography as="p" variant="titleM">
                Podnośniki koszowe
              </Typography>
            </li>
            <li>
              <Typography as="p" variant="titleM">
                Usługi HDS
              </Typography>
            </li>
          </ul>
        </div>
        <Typography variant="h3">
          <a href="tel:+48604476647">+48 604 47 66 47</a>
        </Typography>
        <Image width={600} height={600} alt="" src="/img/hds.jpg" />
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <FaCarAlt />
          <Typography as="h2" variant="h3">
            Wypożyczalnia
          </Typography>
          <ul>
            <li>
              <Typography as="p" variant="titleM">
                Autolaweta
              </Typography>
            </li>
            <li>
              <Typography as="p" variant="titleM">
                Dostawcze
              </Typography>
            </li>
            <li>
              <Typography as="p" variant="titleM">
                Osobowe
              </Typography>
            </li>
            <li>
              <Typography as="p" variant="titleM">
                Cabrio
              </Typography>
            </li>
          </ul>
        </div>
        <Typography variant="h3">
          <a href="tel:+48533254426">+48 533 25 44 26</a>
        </Typography>
        <Image width={600} height={600} alt="" src="/img/wypozyczalnia.jpg" />
      </div>
    </Container>
  );
};

export default ContactInfo;
