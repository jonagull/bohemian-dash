import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { StockPrice } from "../../../types";

export default function StockChart({ data }: { data: StockPrice[] | null }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data ?? undefined}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#34c759" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#34c759" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide={true} />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#34c759"
          fill="url(#colorPv)"
          strokeWidth="2px"
        />
        <Tooltip
          separator=": $"
          contentStyle={{
            backgroundColor: "#152026",
            border: "none",
            borderRadius: 8,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
