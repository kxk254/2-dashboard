"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }
  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex item-center text-gray-700 dark:text-gray-400 dropdown-toggle"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <Image src="/user/user_kenji.JPG" alt="user" width={44} height={44} />
        </span>
        <span className="block mr-1 font-medium text0theme-sm">Kenji</span>
        <Image
          src="/userdropdown/angle-down.svg"
          alt="userbutton"
          width={18}
          height={20}
          className="rotate-180"
        />
      </button>
    </div>
  );
}
