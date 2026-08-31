import Image from "next/image";
import Link from "next/link";
import { FaCar, FaTruck, FaArrowRight } from "react-icons/fa6";
import { TbTruckLoading } from "react-icons/tb";
import { RiTempColdLine } from "react-icons/ri";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./ServicesGrid.module.scss";

interface ServiceItem {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  buttonVariant: "primary" | "outline";
}

const services: ServiceItem[] = [
  {
    id: "wypozyczalnia",
    title: "WYPOŻYCZALNIA SAMOCHODÓW",
    href: "/wypozyczalnia",
    imageSrc: "/img/wypozyczalnia.jpg",
    imageAlt: "Car Rental",
    icon: <FaCar size={28} />,
    buttonVariant: "primary",
  },
  {
    id: "hds-transport",
    title: "HDS\nTRANSPORT",
    href: "/uslugi/hds",
    imageSrc: "/img/hds.jpg",
    imageAlt: "HDS Transport",
    icon: <FaTruck size={28} />,
    buttonVariant: "primary",
  },
  {
    id: "tow-truck-rental",
    title: "USŁUGI ZWYŻKĄ",
    href: "/uslugi/zwyzka",
    imageSrc: "/img/zwyzka.jpg",
    imageAlt: "Tow Truck Rental",
    icon: <TbTruckLoading size={32} />,
    buttonVariant: "outline",
  },
  {
    id: "klimatyzacja",
    title: "KLIMATYZACJA",
    href: "/uslugi/klimatyzacja",
    imageSrc: "/img/klima.jpg",
    imageAlt: "KLIMATYZACJA",
    icon: <RiTempColdLine size={30} />,
    buttonVariant: "outline",
  },
];

const ServicesGrid = () => {
  return (
    <Container
      as="section"
      id="uslugi"
      background="lowest"
      size="base"
      contentWidth="max"
    >
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            {/* Lewa strona kafelka: Treść */}
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>{service.icon}</div>

              <Typography as="h3" variant="h3" className={styles.title}>
                {service.title}
              </Typography>

              <Button
                as={Link}
                href={service.href}
                variant={service.buttonVariant}
                size="md"
                iconRight={<FaArrowRight size={14} />}
                className={styles.actionBtn}
              >
                PRZEJDŹ DO DZIAŁU
              </Button>
            </div>

            {/* Prawa strona kafelka: Zdjęcie + Narożnik */}
            <div className={styles.cardMedia}>
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.cornerMarker}></div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesGrid;
