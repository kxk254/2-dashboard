"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import NotificationDropdown from "@/src/components/header/NotificationDropdown";
import UserDropdown from "@/src/components/header/UserDropdown";
import { ThemeToggleButton } from "@/src/components/common/ThemeToggleButton";
import { useSidebar } from "@/src/context/SidebarContext";
import { BarsStaggered, CrossIcon, ThreeDotsIcon } from "@/icons/index";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggelSidebar, toggleMobileSidebar } = useSidebar();
  const handleToggle = () => {
    if (window.innerWidth <= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 flex w-full border-gray-200 z-9999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        {/* left side */}
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:py-4">
          <button className="item-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-9999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border">
            {isMobileOpen ? <CrossIcon /> : <BarsStaggered />}
          </button>

          {/* page icon for mogile */}
          <Link href="/" className="lg:hidden">
            <Image
              width={154}
              height={32}
              className="dark:hidden"
              src="/images/logo/logo-soliton.svg"
              alt="logo"
            />
            <Image
              width={154}
              height={32}
              className="hidden dark:block"
              src="/images/logo/logo-dark.svg"
            />
          </Link>
          <button>
            <ThreeDotsIcon />
          </button>

          {/* look up hidden */}
          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                  <Image
                    src="header/search.svg"
                    alt="search"
                    width={24}
                    height={24}
                  />
                </span>
                <input />

                <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200">
                  <span> ⌘ </span>
                  <span> K </span>
                </button>
              </div>
            </form>
          </div>
          {/* look up finish */}
        </div>
        {/* left side finish */}

        {/* right hand side */}
        <div className="flex items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none">
          <div className="flex items-center gap-2 2xsm:gap-3">
            {/* dark mode toggler */}
            <Image
              src="/header/brightness.svg"
              alt="light"
              width={24}
              height={24}
            />
            {/* notification menu */}
            <NotificationDropdown />
          </div>
          {/* User Area */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
