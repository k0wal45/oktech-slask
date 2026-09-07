"use client";

import styles from "./CategoryFilterTabs.module.scss";

interface Props {
  activeTab: string;
  onTabChange: (category: string) => void;
  categories: { key: string; label: string }[];
}

export const CategoryFilterTabs = ({
  activeTab,
  onTabChange,
  categories,
}: Props) => {
  return (
    <div className={styles.tabsWrapper}>
      {categories.map((cat) => (
        <button
          key={cat.key}
          type="button"
          onClick={() => onTabChange(cat.key)}
          className={`${styles.tabBtn} ${activeTab === cat.key ? styles.active : ""}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterTabs;
