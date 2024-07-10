import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const ButtonCustomLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-current before:absolute before:rounded-lg before:hover:scale-x-100 before:scale-x-0 before:transition-transform before:duration-100 before:origin-left ease-out w-fit mx-auto", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonCustomLink.displayName = "Link"

export { ButtonCustomLink }
