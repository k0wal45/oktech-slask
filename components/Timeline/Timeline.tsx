"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/ui/Container/Container";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./Timeline.module.scss";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2008",
    title: "POCZĄTEK MISJI",
    description:
      "Zakup pierwszej jednostki HDS i start obsługi budownictwa na Śląsku.",
    position: "left",
  },
  {
    year: "2015",
    title: "EKSPANSJA FLOTY",
    description:
      "Osiągnięcie liczby 50 jednostek specjalistycznych i otwarcie bazy w Katowicach.",
    position: "right",
  },
  {
    year: "2024",
    title: "LIDER REGIONU",
    description:
      "Wdrożenie systemów monitorowania precyzyjnego i certyfikacja UDT poziomu premium.",
    position: "left",
  },
];

export const Timeline = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      as="section"
      id="statsevo"
      background="lowest"
      size="base"
      contentWidth="max"
      className={styles.timelineSection}
    >
      <Typography as="h2" variant="display" className={styles.heading}>
        <span>EWOLUCJA </span>
        <span className={styles.accent}>MOCY</span>
      </Typography>

      <div className={styles.timelineContainer}>
        <div className={styles.centerLine} aria-hidden="true" />

        {TIMELINE_EVENTS.map((event, index) => (
          <div
            key={event.year}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className={`${styles.timelineItem} ${
              event.position === "left" ? styles.left : styles.right
            }`}
          >
            <div className={styles.diamondNode} aria-hidden="true" />

            <div className={styles.contentBox}>
              <Typography as="span" variant="h2" className={styles.year}>
                {event.year}
              </Typography>
              <Typography as="h3" variant="titleM" className={styles.title}>
                {event.title}
              </Typography>
              <Typography as="p" variant="bodyM" className={styles.desc}>
                {event.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Timeline;
