"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { MoreDotIcon } from "@/icons";
import { useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { ArrowUpIcon } from "@/icons/index";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlyTarget() {
  const series = [75.55];
  const options: ApexOptions = {
    colors: ["#6a67f5"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: { size: "80%" },
        track: { background: "#e4e7ec", strokeWidth: "100%", margin: 5 },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "36px",
            fontWeight: "600",
            offsetY: -40,
            color: "#1d2939",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: { type: "solid", colors: ["#6a67f5"] },
    stroke: { linecap: "round" },
    labels: ["Progress"],
  };
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  function closeDropdown() {
    setIsOpen(flase);
  }
  return (
    <div>
      <div>
        <div>
          <div>
            <h3>APEXCHART</h3>
            <p></p>
          </div>

          <div>
            <button></button>
            <Dropdown>
              <DropdownItem></DropdownItem>
              <DropdownItem></DropdownItem>
            </Dropdown>
          </div>
        </div>

        <div>
          <div>{/*           <ReactApexChart />*/}</div>
          <span></span>
        </div>

        <div>
          <p></p>
          <p className="rotate-180 ">
            <ArrowUpIcon />
          </p>
        </div>
        <div></div>
        <div>
          <p></p>
          <p>
            <ArrowUpIcon />
          </p>
        </div>

        <div></div>

        <div>
          <p></p>
          <p>
            <ArrowUpIcon />
          </p>
        </div>
      </div>
    </div>
  );
}
