"use client";

import React, { useEffect, useRef, useState, useCallbacl } from "react";
import Link from "next/link";
import Image from "next/image";
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

const NavItems: NavItem[] = [];

const othersItems: NavItem[] = [];

const AppSidebar: React.FC = () => {
  const renderMenuItems = () => (
    <>
      <ul>
        {/* map nav items via [NavItems] */}
        <li>
          <button>
            <span></span>
          </button>
        </li>
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
        <Link>
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
