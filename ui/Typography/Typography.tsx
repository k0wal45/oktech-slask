import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import styles from "./Typography.module.scss";

const typographyVariants = cva(styles.typography, {
  variants: {
    variant: {
      hero: styles.hero,
      display: styles.display,
      h1: styles.h1,
      h2: styles.h2,
      h3: styles.h3,
      h4: styles.h4,
      h5: styles.h5,
      statNumber: styles.statNumber,
      overline: styles.overline,
      bodyXl: styles.bodyXl,
      bodyL: styles.bodyL,
      bodyM: styles.bodyM,
      bodyS: styles.bodyS,
      caption: styles.caption,
      titleL: styles.titleL,
      titleM: styles.titleM,
      titleS: styles.titleS,
    },
    lineHeight: {
      default: "",
      none: styles.lineHeightNone,
    },
  },
  defaultVariants: {
    variant: "bodyM",
    lineHeight: "default",
  },
});

// 1. Zezwalamy na dowolny element HTML lub komponent React (np. Link z Next.js)
export type TypographyOwnProps<E extends React.ElementType = "p"> = {
  as?: E;
  children?: React.ReactNode;
} & VariantProps<typeof typographyVariants>;

export type TypographyProps<E extends React.ElementType = "p"> =
  TypographyOwnProps<E> &
    Omit<React.ComponentPropsWithRef<E>, keyof TypographyOwnProps<E>>;

// 2. Funkcja renderująca z uniwersalnym refem
const TypographyRender = (
  {
    className,
    variant,
    lineHeight,
    as,
    children,
    ...props
  }: TypographyProps<React.ElementType>,
  ref: React.Ref<any>,
) => {
  const Component = as || "p";

  return (
    <Component
      ref={ref}
      className={cn(typographyVariants({ variant, lineHeight }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

// 3. Eksport komponentu z generycznym rzutowaniem (identycznie jak w Button)
export const Typography = React.forwardRef(TypographyRender) as <
  E extends React.ElementType = "p",
>(
  props: TypographyProps<E>,
) => React.ReactElement;

(Typography as React.FC).displayName = "Typography";
