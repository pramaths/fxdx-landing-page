import React from "react";
import { AreaChart, Area } from "recharts";

export default function AreaGraph({ price, primaryColor, width, height }) {
  return (
    <AreaChart
      width={width}
      height={height}
      className="area-graph"
      data={price}
    >
      <defs>
        <linearGradient id={`color${primaryColor}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={primaryColor} stopOpacity={0.8} />
          <stop offset="95%" stopColor={primaryColor} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="price"
        stroke={primaryColor}
        fill={`url(#color${primaryColor})`}
      />
    </AreaChart>
  );
}
