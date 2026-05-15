import Image from "next/image";
import styles from "./HeroLanding.module.scss";
import { Button } from "@/components/Button/Button";

const HeroLanding = () => {
  return (
    <header className={styles.hero}>
      <div className="badge">Lorem ipsum dolor sit.</div>
      <h1>
        Oktech
        <br />
        <span>
          Transport HDS
          <br />
        </span>
        Kliamtyzacje
        <br />
        Śląsk
        <br />
      </h1>
      <div className={styles.buttonWrapper}>
        <Button variant="primary" href="/uslugi">
          Sprawdź usługi
        </Button>
        <Button variant="outline" href="/kontakt">
          Skontaktuj się
        </Button>
      </div>

      <Image
        width={1920}
        height={1080}
        src="/img/herolanding.jpg"
        alt="Flota Oktech Śląsk"
        loading="eager"
      />
    </header>
  );
};

export default HeroLanding;
