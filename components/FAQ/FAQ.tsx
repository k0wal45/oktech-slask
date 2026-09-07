"use client";

import { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./FAQ.module.scss";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  id?: string;
  badgeText?: string;
  title: string;
  description?: string;
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const FAQ = ({
  id = "faq",
  badgeText = "INŻYNIERYJNA BAZA WIEDZY",
  title,
  description,
  items,
  defaultOpenIndex = 0,
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container
      as="section"
      id={id}
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.faqSection}
    >
      <div className={styles.headerBlock}>
        {badgeText && (
          <div className={styles.badge}>
            <FiHelpCircle className={styles.badgeIcon} />
            <span>{badgeText}</span>
          </div>
        )}

        <Typography as="h2" variant="h2" className={styles.title}>
          {title}
        </Typography>

        {description && (
          <Typography as="p" variant="bodyM" className={styles.description}>
            {description}
          </Typography>
        )}
      </div>

      <div className={styles.accordionList}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const formattedIndex = String(index + 1).padStart(2, "0") + ".";

          return (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                isOpen ? styles.active : ""
              }`}
            >
              <button
                type="button"
                className={styles.triggerButton}
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <div className={styles.questionRow}>
                  <span className={styles.index}>{formattedIndex}</span>
                  <span className={styles.questionText}>{item.question}</span>
                </div>
                <IoChevronDown
                  className={`${styles.arrowIcon} ${
                    isOpen ? styles.rotate : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`${styles.contentWrapper} ${
                  isOpen ? styles.open : ""
                }`}
              >
                <div className={styles.contentInner}>{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default FAQ;
