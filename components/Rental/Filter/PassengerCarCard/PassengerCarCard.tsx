import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./PassengerCarCard.module.scss";

export interface PassengerCar {
  id: string;
  name: string;
  category: "kabriolet" | "premium" | "kombi";
  engine: string;
  transmission: "AUTOMAT" | "MANUAL";
  seats: number;
  pricePerDay: string;
  image: string;
}

export const PassengerCarCard = ({ car }: { car: PassengerCar }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <span className={styles.badge}>{car.category}</span>
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className={styles.body}>
        <Typography as="h3" variant="titleM" className={styles.title}>
          {car.name}
        </Typography>

        <div className={styles.tags}>
          <span>{car.transmission}</span>
          <span>{car.seats} MIEJSCA</span>
          <span>{car.engine}</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceGroup}>
            <span className={styles.label}>OD</span>
            <span className={styles.amount}>{car.pricePerDay}</span>
          </div>

          <Button
            as={Link}
            href={`/kontakt?auto=${car.id}`}
            variant="outline"
            size="sm"
          >
            WYBIERZ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PassengerCarCard;
