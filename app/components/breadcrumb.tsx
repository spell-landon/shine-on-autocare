import { Link } from "react-router";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
      <Link to="/" className="hover:text-white transition">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="contents">
          <span>/</span>
          {item.href ? (
            <Link to={item.href} className="hover:text-white transition">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
