import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Generic glass card wrapper
 * Used for service tiles, blog previews, pricing cards, etc.
 */
export default function Card({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition hover:border-fuchsia-500/30 hover:bg-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
