"use client";

import React, { useEffect, useRef, useState, useCallbacl } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const NavItems: NavItem[] = [];

const othersItems: NavItem[] = [];

const AppSidebar: React.FC = () => {};

export default AppSidebar;
