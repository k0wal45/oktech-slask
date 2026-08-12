import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import styles from "./Button.module.scss";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      outline: styles.outline,
      black: styles.black,
      ghost: styles.ghost,
    },
    size: {
      sm: styles.sizeSm,
      md: styles.sizeMd,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// 1. Definicja typów dla propsów polimorficznych
export type ButtonOwnProps<E extends React.ElementType = "button"> = {
  as?: E;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & VariantProps<typeof buttonVariants>;

export type ButtonProps<E extends React.ElementType = "button"> =
  ButtonOwnProps<E> &
    Omit<React.ComponentPropsWithRef<E>, keyof ButtonOwnProps<E>>;

// 2. Wewnętrzna funkcja renderująca (używamy HTMLButtonElement dla bezpiecznego refa)
const ButtonRender = (
  {
    className,
    variant,
    size,
    iconLeft,
    iconRight,
    as,
    children,
    ...props
  }: ButtonProps<React.ElementType>,
  ref: React.Ref<any>,
) => {
  const Component = as || "button";

  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Component>
  );
};

// 3. Eksport z rzutowaniem generycznym – to rozwiązuje błąd TS bez konieczności używania 'any' przy wywołaniu komponentu
export const Button = React.forwardRef(ButtonRender) as <
  E extends React.ElementType = "button",
>(
  props: ButtonProps<E>,
) => React.ReactElement;

(Button as React.FC).displayName = "Button";
