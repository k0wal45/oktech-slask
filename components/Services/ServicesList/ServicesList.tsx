import Image from "next/image";
import Link from "next/link";
import { FaCarSide, FaRegSnowflake, FaTruck } from "react-icons/fa";
import { TbCarCraneFilled } from "react-icons/tb";
import { GiFlatTire } from "react-icons/gi";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./ServicesList.module.scss";

const SERVICES_DATA = [
  {
    id: "1",
    title: "Transport HDS",
    href: "/uslugi/hds",
    icon: FaTruck,
    imageSrc: "/img/hds.jpg",
    alt: "Ciężarówka HDS",
  },
  {
    id: "2",
    title: "Usługi zwyżką",
    href: "/uslugi/zwyzka",
    icon: TbCarCraneFilled,
    imageSrc: "/img/zwyzka.jpg",
    alt: "Podnośnik koszowy na aucie",
  },
  {
    id: "3",
    title: "Montaż i serwis klimatyzacji",
    href: "/uslugi/klimatyzacja",
    icon: FaRegSnowflake,
    imageSrc: "/img/klima.jpg",
    alt: "Klimatyzacja Śląsk",
  },
  {
    id: "4",
    title: "Wynajem samochodów",
    href: "/uslugi/wpozyczalnia-samochodow",
    icon: FaCarSide,
    imageSrc: "/img/wypozyczalnia.jpg",
    alt: "Wypożyczalnia samochodów",
  },
  {
    id: "5",
    title: "Wynajem Autolawety",
    href: "/uslugi/wypozyczalnia-autolawet",
    icon: GiFlatTire,
    imageSrc: "/img/autolaweta.jpg",
    alt: "Autolaweta Śląsk",
  },
];

const ServicesList = () => {
  return (
    <Container
      as="section"
      id="services"
      size="none"
      className={styles.services}
      contentWidth="none"
    >
      {SERVICES_DATA.map((service) => {
        const IconComponent = service.icon;

        return (
          <Link key={service.id} href={service.href} className={styles.panel}>
            <div className={styles.top}>
              <Typography as="span" variant="h5" className={styles.badgeNumber}>
                {service.id}
              </Typography>
              <IconComponent className={styles.icon} />
            </div>

            <Typography as="h2" variant="h4" className={styles.title}>
              {service.title}
            </Typography>

            <Image
              width={600}
              height={700}
              alt={service.alt}
              src={service.imageSrc}
            />
          </Link>
        );
      })}
    </Container>
  );
};

export default ServicesList;
