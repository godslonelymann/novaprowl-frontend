import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

/**
 * Small label element for statuses or highlights
 */
export default function Badge({
  children,
  variant = "default",
  className,
}: Props) {
  const variants = {
    default:
      "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white px-3 py-1 text-xs rounded-full font-medium",
    outline:
      "border border-white/20 text-white/80 px-3 py-1 text-xs rounded-full font-medium",
  };

  return <span className={clsx(variants[variant], className)}>{children}</span>;
}
