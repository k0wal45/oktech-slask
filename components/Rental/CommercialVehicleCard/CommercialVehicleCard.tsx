import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import styles from "./CommercialVehicleCard.module.scss";

export interface VehicleSpec {
  key: string;
  value: string;
}

export interface DetailedCommercialVehicle {
  id: string;
  unitCode: string;
  licenseRequirement: string;
  subType: string;
  name: string;
  pricePerDay: string;
  description: string;
  deposit: string;
  limit: string;
  insurance: string;
  image: string;
  highlights: string[];
  specs: VehicleSpec[];
  includedEquipment?: string;
  buttonLabel: string;
}

interface Props {
  vehicle: DetailedCommercialVehicle;
}

export const CommercialVehicleCard = ({ vehicle }: Props) => {
  return (
    <article className={styles.cardWrapper} id={vehicle.id}>
      <div className={styles.grid}>
        {/* Lewa kolumna: Foto + ID + Wymogi */}
        <div className={styles.leftCol}>
          <div className={styles.topBarMedia}>
            <span className={styles.unitId}>{vehicle.unitCode}</span>
            <span className={styles.licenseTag}>
              {vehicle.licenseRequirement}
            </span>
          </div>

          <div className={styles.imageFrame}>
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              sizes="(max-width: 1100px) 100vw, 55vw"
            />
          </div>

          {vehicle.highlights.length > 0 && (
            <div className={styles.subFeaturesRow}>
              {vehicle.highlights.map((feature, idx) => (
                <div key={idx} className={styles.featureBadge}>
                  {feature}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Prawa kolumna: Dane techniczne & Specs Map */}
        <div className={styles.rightCol}>
          <div className={styles.headerRow}>
            <div className={styles.titleBlock}>
              <span className={styles.subTag}>{vehicle.subType}</span>
              <Typography as="h3" variant="h2" className={styles.mainTitle}>
                {vehicle.name}
              </Typography>
            </div>

            <div className={styles.priceBlock}>
              <span className={styles.priceLabel}>STAWKA DOBOWA</span>
              <div className={styles.priceValue}>
                <span className={styles.amount}>{vehicle.pricePerDay}</span>
                <span className={styles.unit}>PLN / doba</span>
              </div>
            </div>
          </div>

          <p className={styles.description}>{vehicle.description}</p>

          <div className={styles.quickPillars}>
            <div className={styles.pillar}>
              <span className={styles.pLabel}>Kaucja zwrotna:</span>
              <span className={styles.pValue}>{vehicle.deposit}</span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pLabel}>Limit:</span>
              <span className={styles.pValue}>{vehicle.limit}</span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pLabel}>Ubezpieczenie:</span>
              <span className={`${styles.pValue} ${styles.highlight}`}>
                {vehicle.insurance}
              </span>
            </div>
          </div>

          {/* Tabela mapująca specyfikację [{key, value}] */}
          <div className={styles.specsSection}>
            <span className={styles.specsHeader}>
              PARAMETRY TECHNICZNE JEDNOSTKI
            </span>
            <table className={styles.specsTable}>
              <tbody>
                {vehicle.specs.map((spec, index) => (
                  <tr key={index}>
                    <td className={styles.keyCol}>{spec.key}</td>
                    <td className={styles.valCol}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {vehicle.includedEquipment && (
            <p className={styles.extraNote}>{vehicle.includedEquipment}</p>
          )}

          <Button
            as={Link}
            href={`/kontakt?auto=${vehicle.id}`}
            variant="primary"
            size="md"
            className={styles.actionButton}
          >
            {vehicle.buttonLabel}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CommercialVehicleCard;
