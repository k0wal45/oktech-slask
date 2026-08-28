import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import styles from "./Form.module.scss";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, id, children, ...props }, ref) => {
    return (
      <div className={styles.formGroup}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.selectWrapper}>
          <select
            id={id}
            ref={ref}
            className={cn(styles.select, className)}
            {...props}
          >
            {children}
          </select>
          <FaChevronDown className={styles.chevron} />
        </div>
      </div>
    );
  },
);
Select.displayName = "Select";
