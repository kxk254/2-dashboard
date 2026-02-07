"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  BoxCubeIcon,
  CalenderIcon,
  ChvronDownIcon,
  GridIcon,
  HorizontalDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "@/src/icons";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const NavItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  {
    icon: <CalenderIcon />,
    name: "Calender",
    path: "/calender",
  },
];

const othersItems: NavItem[] = [
  {
    icon: <PieChartIcon />,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart", pro: false },
      { name: "Bar Chart", path: "/bar-chart", pro: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = () => (
    <>
      <ul>
        {/* map nav items via [NavItems] */}
        {navItems.map((nav, index) => (
          <li key={nav.name}>
            {nav.subItems ? (
              <button>
                <span></span>
              </button>
            ) : (
              <Link>
                <span></span>
                <span></span>
              </Link>
            )}
            {/* subItem nav bar */}
            {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div>
                <ul>
                  {nav.subItems.map((subItem) => (
                    <li>
                      <Link>
                        <span>
                          <span></span>
                          <span></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
  const [openSubmenu, setOpenSubmenu] = useState<{} | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {},
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  //
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  // Check if the current path matches any submeny item
  useEffect(() => {}, [pathname, isActive]);

  // Set the height of the submenu items when the submenu is opened
  useEffect(() => {}, [openSubmenu]);

  // open or close submenu index=>submenu item, menuType main / others
  const handleSubmenuToggle = (index: numnber, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside>
      {/* aside is semantics for sidebar */}
      <div>
        <Link href="/">
          <>
            {/* image logo wide or mobile */}
            <Image />
            <Image />
          </>
        </Link>
      </div>
      <div>
        <nav>
          <div>
            <div>
              {/* menu or horizontal dots */}
              <h2></h2>
              main-manuitems
            </div>

            <div>
              {/* others or horizontal dots */}
              <h2></h2>
              {/* rendering other menu items here */}
              othersItems
            </div>
          </div>
        </nav>
        {/* sidebar widget */}
        sidebarwidget
      </div>
    </aside>
  );
};

export default AppSidebar;
