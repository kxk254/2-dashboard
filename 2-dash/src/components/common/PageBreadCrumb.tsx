import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div>
      <h2>{pageTitle}</h2>
      <nav>
        <ol>
          <li>
            <Link>
              Home
              <svg></svg>
            </Link>
          </li>
          <li>{pageTitle}</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
