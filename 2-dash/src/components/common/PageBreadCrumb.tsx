import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  return (
    <div>
      <h2></h2>
      <nav>
        <ol>
          <li>
            <Link>
              Home
              <svg></svg>
            </Link>
          </li>
          <li></li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
