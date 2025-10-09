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
  ...props
}: Props) {
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    solid: `
      bg-gradient-to-b from-[#00A4B4] via-[#33C1CC] to-[#C5F6FA]
      text-white
      shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_8px_rgba(0,164,180,0.25)]
      hover:from-[#008B9F] hover:via-[#00A4B4] hover:to-[#A9F0F5]
      active:scale-[0.98]
      focus-visible:ring-2 focus-visible:ring-[#00A4B4]/40
      transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    `,
    outline: `
      border border-[#00A4B4] text-[#00A4B4]
      hover:bg-[#00A4B4]/5 active:bg-[#00A4B4]/10
      focus-visible:ring-2 focus-visible:ring-[#00A4B4]/30
      transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    `,
  };

  return (
    <button
      className={clsx(
        "rounded-xl font-semibold select-none focus:outline-none disabled:opacity-50 cursor-pointer",
        sizes[size],
        variants[variant],
        textColor,
        className
      )}
      {...props}
    />
  );
}
