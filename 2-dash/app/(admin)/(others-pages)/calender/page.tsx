import Calendar from "@/src/components/calendar/Calendar";
import PageBreadCrumb from "@/src/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {};
export default function page() {
  return (
    <div>
      <PageBreadCrumb pageTitle="Calendar" />
      <Calendar />
    </div>
  );
}
