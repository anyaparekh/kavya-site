import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Dot() {
  return <i className="dot" aria-hidden="true" />;
}

/** The brown full-width link bar ("See more!", "Next: ..."). */
export default function Bar({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`bar ${className}`.trim()} to={to}>
      <span>{children}</span>
      <Dot />
    </Link>
  );
}
