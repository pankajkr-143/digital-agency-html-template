import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs font-medium text-gray-400">
      <ol className="flex flex-wrap items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-1">
          <Link to="/" itemProp="item" className="hover:text-blue-400 flex items-center gap-1 transition-colors">
            <Home size={14} />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const position = index + 2;
          const isLast = index === items.length - 1;

          return (
            <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
              <ChevronRight size={12} className="text-gray-600 shrink-0" />
              {isLast || !item.path ? (
                <span itemProp="name" className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} itemProp="item" className="hover:text-blue-400 transition-colors truncate max-w-[150px] sm:max-w-none">
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={position.toString()} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
