import "./Chart.css";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 30 },
  { name: "Group C", value: 30 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Chart() {
  return (
    <div className="container">
        <PieChart width={1200} height={1200}>
            <Pie
                data={data}
                cx={window.innerWidth/2 - 50}
                cy={160}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    </div>
    
  );
}