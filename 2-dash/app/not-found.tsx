import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      {/* gridhsape */}
      <div>
        <h1>ERROR</h1>
        <Image />
        <Image />
        <p>We can't seem to find the page you are looking for!</p>
        <Link>Back to Home Page</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} - TailAdmin</p>
    </div>
  );
}
