import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  textColor?: string;
};

export default function Button({
  className,
  variant = "solid",
  size = "md",
  textColor,
  children,
  ...props
}: Props) {
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  if (variant === "outline") {
    return (
      <button
        className={clsx(
          "inline-flex items-center justify-center rounded-xl font-semibold",
          "border border-[#00A4B4] text-[#00A4B4]",
          "transition-colors duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:bg-[#00A4B4]/5 active:bg-[#00A4B4]/10",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4B4]/30",
          "disabled:opacity-50 cursor-pointer select-none",
          sizes[size],
          textColor,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  // SOLID: cross-fade two gradients for smooth hover
  return (
    <button
      className={clsx(
        "group/btn relative inline-flex items-center justify-center rounded-xl font-semibold",
        "overflow-hidden select-none cursor-pointer disabled:opacity-50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4B4]/40",
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Base gradient */}
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 rounded-xl",
          "bg-gradient-to-b from-[#00A4B4] via-[#33C1CC] to-[#C5F6FA]"
        )}
      />
      {/* Hover gradient (cross-fades in) */}
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 rounded-xl opacity-0",
          "bg-gradient-to-b from-[#008B9F] via-[#00A4B4] to-[#A9F0F5]",
          "transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover/btn:opacity-100"
        )}
      />
      {/* Subtle elevation + active press */}
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 rounded-xl",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_8px_rgba(0,164,180,0.25)]",
          "transition-transform duration-300 group-active/btn:scale-[0.98]"
        )}
      />
      {/* Content */}
      <span className={clsx("relative z-10", textColor ?? "text-white")}>
        {children}
      </span>
    </button>
  );
}
