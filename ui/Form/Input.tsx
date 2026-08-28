import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Form.module.scss";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className={styles.formGroup}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(styles.input, className)}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";
