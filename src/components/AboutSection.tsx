import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline"
}

const buttonVariants = {
  default: "bg-black text-white hover:bg-zinc-800",
  outline: "border border-gray-300 text-black hover:bg-gray-100",
}

const buttonSizes = {
  sm: "px-3 py-1 text-sm",
  default: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, size = "default", variant = "default", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
      className={cn(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  buttonVariants[variant ?? "default"],
  buttonSizes[size ?? "default"],
  className
)}

        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
