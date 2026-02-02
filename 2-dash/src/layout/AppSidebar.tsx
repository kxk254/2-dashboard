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
  const renderMenuItems = () => <div>Menu Item</div>;
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
      <div>
        <Link>
          <>
            <Image />
            <Image />
          </>
        </Link>
      </div>
      <div>
        <nav>
          <div>
            <div>
              <h2></h2>
              main-manuitems
            </div>

            <div>
              <h2></h2>
              othersItems
            </div>
          </div>
        </nav>
        sidebarwidget
      </div>
    </aside>
  );
};

export default AppSidebar;
