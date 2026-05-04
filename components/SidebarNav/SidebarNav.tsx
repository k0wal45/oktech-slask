'use client';
import { useEffect, useState } from 'react';
import styles from './SidebarNav.module.scss';
import { useNav } from '@/context/NavContext';

export const SidebarNav = () => {
  const { navInfo } = useNav();
  const [activeId, setActiveId] = useState('');

  const { sections } = navInfo
useEffect(() => {
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          console.log('Widoczna sekcja:', entry.target.id, 'Intersecting:', entry.isIntersecting);
          setActiveId(entry.target.id);
        }
      });
    },
    { 
      threshold: [0.1, 0.5], 
      rootMargin: '-20% 0px -70% 0px' 
    }
  );

  sections.forEach((s) => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav className={styles.sidebar}>
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`${styles.navItem} ${activeId === section.id ? styles.active : ''}`}
        >
          {section.icon && <span className={styles.icon}>{section.icon}</span>}
          <span className={styles.labelText}>{section.label}</span>
          
        </div>
      ))}
    </nav>
  );
};