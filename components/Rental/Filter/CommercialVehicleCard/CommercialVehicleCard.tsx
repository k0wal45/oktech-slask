import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./CommercialVehicleCard.module.scss";

export interface VehicleSpec {
  key: string;
  value: string;
}

export interface CommercialVehicle {
  id: string;
  name: string;
  category: string;
  pricePerDay: string;
  deposit: string;
  image: string;
  specs: VehicleSpec[];
  features: string[];
}

export const CommercialVehicleCard = ({
  vehicle,
}: {
  vehicle: CommercialVehicle;
}) => {
  return (
    <article className={styles.cardWrapper} id={vehicle.id}>
      <div className={styles.topRow}>
        <div className={styles.meta}>
          <span className={styles.category}>{vehicle.category}</span>
          <Typography as="h3" variant="h3" className={styles.name}>
            {vehicle.name}
          </Typography>
        </div>

        <div className={styles.pricing}>
          <div className={styles.rate}>{vehicle.pricePerDay}</div>
          <span className={styles.deposit}>
            KAUCJA ZWROTNA: {vehicle.deposit}
          </span>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.imageFrame}>
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <table className={styles.table}>
          <tbody>
            {vehicle.specs.map((item, idx) => (
              <tr key={idx}>
                <td className={styles.keyCol}>{item.key}</td>
                <td className={styles.valCol}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.bottomRow}>
        <Button
          as={Link}
          href={`/kontakt?auto=${vehicle.id}`}
          variant="primary"
          size="md"
        >
          REZERWUJ TEN POJAZD
        </Button>
      </div>
    </article>
  );
};

export default CommercialVehicleCard;
