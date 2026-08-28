import { Container } from "@/ui/Container/Container";
import styles from "./Map.module.scss";
import { Typography } from "@/ui/Typography/Typography";

const Map = () => {
  return (
    <Container size="none" className={styles.map} id="contactMap">
      <Typography variant="display" as="h4">
        BAZA W KATOWICACH
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.413048172528!2d19.01443505655995!3d50.273504700646306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2276c76509%3A0x60779eb62c2027a!2sOKTECH%20-%20kontener-serwis%2C%20hds%2C%20zwy%C5%BCka%2C%20podno%C5%9Bnik%20koszowy%2C%20pomoc%20drogowa%2C%20auto%20laweta!5e0!3m2!1spl!2spl!4v1787743898015!5m2!1spl!2spl"
        width="1920"
        height="600"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </Container>
  );
};

export default Map;
