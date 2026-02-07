"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "@/src/icons";

export const EcommerceMetrics = () => {
  return (
    <div>
      {/* metric Item Start */}
      <div>
        <div></div>

        <div>
          <div>
            <span></span>
            <h4></h4>
          </div>
          <Badge></Badge>
        </div>
      </div>
      {/* metric Item End */}

      {/* metric Item Start */}

      <div>
        <div>
          <BoxIconLine />
        </div>
        <div>
          <div>
            <span></span>
            <h4></h4>
          </div>
          <Badge>
            <ArrowDownIcon />
          </Badge>
        </div>
      </div>

      {/* metric Item End */}
    </div>
  );
};
