import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold hover:shadow-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary",
        secondary: "bg-muted text-foreground hover:bg-muted/80 border border-border",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold",
        hero: "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-glow hover:-translate-y-0.5 uppercase tracking-widest",
        heroOutline: "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary uppercase tracking-widest",
        whatsapp: "bg-[hsl(142_70%_45%)] text-[hsl(0_0%_100%)] hover:bg-[hsl(142_70%_40%)] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        navyOutline: "border border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50",
        luxury: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-lg",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-sm",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
