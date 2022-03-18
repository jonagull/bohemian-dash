import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useGetSaunaData } from "./useGetSaunaData";
import { SaunaData } from "../../../types";

export function SaunaChart({ data }: { data: SaunaData[] | null }) {
  const saunaData = useGetSaunaData();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={saunaData as any[]}
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
        <Tooltip
          separator=": "
          contentStyle={{
            backgroundColor: "#152026",
            border: "none",
            borderRadius: 8,
          }}
        />
        <XAxis dataKey="created_at" />
        <Area
          type="monotone"
          dataKey="temperature"
          stroke="#34c759"
          fill="url(#colorPv)"
          strokeWidth="2px"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
