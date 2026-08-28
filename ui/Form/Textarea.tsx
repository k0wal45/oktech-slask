import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Form.module.scss";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className={styles.formGroup}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(styles.textarea, className)}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
