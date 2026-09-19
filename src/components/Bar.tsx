import { Link } from "react-router-dom";

type BarProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

export default function Bar({ to, className = "", children }: BarProps) {
  return (
    <Link to={to} className={`bar ${className}`}>
      {/* Viewfinder corners */}
      <span className="c c1" aria-hidden="true" />
      <span className="c c2" aria-hidden="true" />
      <span className="c c3" aria-hidden="true" />
      <span className="c c4" aria-hidden="true" />

      <span>{children}</span>
    </Link>
  );
}
