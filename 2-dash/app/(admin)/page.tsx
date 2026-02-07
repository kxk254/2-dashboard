import type { Metadata } from "next";
import { EcommerceMetrics } from "@/src/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/src/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/src/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/src/components/ecommerce/StatisticsChart";
import RecentOrders from "@/src/components/ecommerce/RecentOrders";
import DemographicCard from "@/src/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <div>
      <div>
        <EcommerceMetrics />
        <MonthlySalesChart />
      </div>

      <div>
        <MonthlyTarget />
      </div>
      <div>
        <StatisticsChart />
      </div>
      <div>
        <DemographicCard />
      </div>
      <div>
        <RecentOrders />
      </div>
    </div>
  );
}
