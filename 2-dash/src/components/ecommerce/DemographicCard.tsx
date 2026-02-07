"use client";

import Image from "next/image";
import CountryMap from "./CountryMap";
import { useState } from "react";
import { MoreDotIcon } from "@/icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        {/* Customers Demographics */}
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <button></button>
          <Dropdown>
            <DropdownItem>View More</DropdownItem>
            <DropdownItem>Delete</DropdownItem>
          </Dropdown>
        </div>
        <div>
          <div>
            <CountryMap />
          </div>
        </div>

        <div>
          <div>
            <div>
              <div>
                <Image />
              </div>
              <div>
                <p></p>
                <span></span>
              </div>
            </div>

            <div>
              <div></div>
              <p>79%</p>
            </div>
          </div>

          <div>
            <div>
              <div>
                <Image />
              </div>
            </div>
            <div>
              <p>France</p>
              <span>589 Customers</span>
            </div>
          </div>

          <div>
            <div></div>
            <p>23%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
