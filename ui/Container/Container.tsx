import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import styles from "./Container.module.scss";

type ContentWidth = "none" | "max" | "full";

const containerVariants = cva(styles.container, {
  variants: {
    size: {
      base: styles.sizeBase,
      compact: styles.sizeCompact,
      stretch: styles.sizeStretch,
      none: "",
    },
    background: {
      none: "",
      lowest: styles.bgLowest,
      surface: styles.bgSurface,
      container: styles.bgContainer,
      containerLow: styles.bgContainerLow,
      containerHigh: styles.bgContainerHigh,
      primary: styles.bgPrimary,
    },
  },
  defaultVariants: {
    size: "base",
    background: "none",
  },
});

const contentWidthStyles: Record<Exclude<ContentWidth, "none">, string> = {
  max: styles.contentMax,
  full: styles.contentFull,
};

export interface ContainerProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
  contentWidth?: ContentWidth;
  contentClassName?: string;
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (
    {
      children,
      className,
      as: Component = "section",
      size,
      background,
      contentWidth = "none",
      contentClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref as any}
        className={cn(containerVariants({ size, background }), className)}
        {...props}
      >
        {contentWidth === "none" ? (
          children
        ) : (
          <div
            className={cn(contentWidthStyles[contentWidth], contentClassName)}
          >
            {children}
          </div>
        )}
      </Component>
    );
  },
);

Container.displayName = "Container";
