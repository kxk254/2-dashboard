"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import flatpickr from "flatpickr";
import ChartTab from "../common/ChartTab";
import { CalenderIcon } from "@/icons/index";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function StatisticsChart() {
  const datePickerRef = useRef<HTMLInputElement>(null);
  useEffect(() => {}, []);
  const options: ApexOptions = {};
  const series = [];

  return (
    <div>
      <div>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div className="flex items-center gap-3 sm:justify-end">
          <ChartTab />
          <div>
            <CalenderIcon />
            <input />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}
