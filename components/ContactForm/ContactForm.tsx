"use client";

import React, { useState } from "react";
import { FiMail, FiClock } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Form/Input";
import { Select } from "@/ui/Form/Select";
import { Textarea } from "@/ui/Form/Textarea";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    department: "Dział Techniczny (Transport/HDS)",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dane formularza zgłoszeniowego:", formData);
  };

  return (
    <Container
      as="section"
      id="contactForm"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.contactSection} // <-- KLUCZ: W Twoim Container.tsx to className trafia do diva contentMax
    >
      {/* Lewa kolumna: Opis i Dane kontaktowe */}
      <div className={styles.infoColumn}>
        <Typography as="h2" variant="display" className={styles.heading}>
          <span>WYŚLIJ</span>
          <span className={styles.accent}>PROJEKT</span>
        </Typography>

        <Typography as="p" variant="bodyM" className={styles.description}>
          Opisz swoje zlecenie. Zgłosimy się do ciebie jak najszybciej możemy
        </Typography>

        <div className={styles.contactDetails}>
          <div className={styles.detailRow}>
            <FiMail className={styles.icon} />
            <Typography as="span" variant="bodyM">
              kontenerserwsi@interia.pl
            </Typography>
          </div>

          <div className={styles.detailRow}>
            <FiClock className={styles.icon} />
            <Typography as="span" variant="bodyM">
              Pn - Pt: 07:00 - 17:00
            </Typography>
          </div>
        </div>
      </div>

      {/* Prawa kolumna: Ciemny boks z formularzem */}
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Input
            id="name"
            name="name"
            label="IMIĘ I NAZWISKO"
            placeholder="Jan Kowalski"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            id="contact"
            name="contact"
            label="EMAIL / TELEFON"
            placeholder="kontakt@firma.pl"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <Select
          id="department"
          name="department"
          label="DZIAŁ / USŁUGA"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="Transport i HDS">Transport i HDS</option>
          <option value="Usługi Zwyżką">Usługi Zwyżką</option>
          <option value="Klimatyzacja">Klimatyzacja</option>
          <option value="Wynajem Samochodów">Wynajem Samochodów</option>
        </Select>

        <Textarea
          id="message"
          name="message"
          label="OPIS ZLECENIA"
          placeholder="Szczegóły lokalizacji, tonaż, rodzaj ładunku..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className={styles.submitBtn}
          iconRight={<FaPlay style={{ fontSize: "0.8rem" }} />}
        >
          WYŚLIJ ZAPYTANIE
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
