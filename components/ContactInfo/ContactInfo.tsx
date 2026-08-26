import styles from "./ContactInfo.module.scss";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import Image from "next/image";
import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <Container size="small" className={styles.info}>
      <div className={styles.card}>
        <FaHelmetSafety />
        <Typography as="h2" variant="h5">
          HDS i zwyżka
        </Typography>
        <ul>
          <li>
            <Typography as="p" variant="bodyM">
              Transport ciężki
            </Typography>
          </li>
          <li>
            <Typography as="p" variant="bodyM">
              Klimatyzacje
            </Typography>
          </li>
          <li>
            <Typography as="p" variant="bodyM">
              Podnośniki koszowe
            </Typography>
          </li>
          <li>
            <Typography as="p" variant="bodyM">
              Usługi HDS
            </Typography>
          </li>
        </ul>
        <Typography variant="h5">
          <a href="tel:+48604476647">+48 604 47 66 47</a>
        </Typography>
        <Image width={600} height={600} alt="" src="/img/hds.jpg" />
      </div>
      <div className={styles.card}>
        <FaCarAlt />
        <Typography as="h2" variant="h5">
          Wypożyczalnia
        </Typography>
        <ul>
          <li>
            <Typography as="p" variant="bodyM">
              Autolaweta
            </Typography>
          </li>
          <li>
            <Typography as="p" variant="bodyM">
              Dostawcze
            </Typography>
          </li>
          <li>
            <Typography as="p" variant="bodyM">
              Osobowe
            </Typography>
          </li>
          <li>
            <Typography as="p" variant="bodyM">
              Cabrio
            </Typography>
          </li>
        </ul>
        <Typography variant="h5">
          <a href="tel:+48533254426">+48 533 25 44 26</a>
        </Typography>
        <Image width={600} height={600} alt="" src="/img/wypozyczalnia.jpg" />
      </div>
    </Container>
  );
};

export default ContactInfo;
