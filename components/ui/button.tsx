import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#f5f5f5] text-[#060606] hover:bg-[#e5e5e5]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-[#1e1e1e] text-[#9ca3af] hover:border-[#9ca3af] hover:text-white bg-transparent",
        secondary:
          "bg-[#111111] text-[#f5f5f5] border border-[#1e1e1e] hover:border-[#333]",
        ghost:
          "text-[#9ca3af] hover:text-white hover:bg-[#111111]",
        link:
          "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm:      "h-8 px-4 text-xs",
        lg:      "h-11 px-8",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "default",
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
