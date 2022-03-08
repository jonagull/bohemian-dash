import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useGetStockData } from "./useGetStockPriceData";
export default function ChartComp() {
  const stockPrice = useGetStockData();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={stockPrice as any[]}
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
        <XAxis dataKey="name" />
        <Tooltip separator=": $" />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#34c759"
          fill="url(#colorPv)"
          strokeWidth="2px"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
