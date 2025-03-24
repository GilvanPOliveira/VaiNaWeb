import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const statMap = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: "VEL",
};

function RadarStats({ stats }) {
  const data = stats.map((s) => ({
    stat: statMap[s.stat.name],
    value: s.base_stat,
  }));

  return (
    <div className="radar-container">
      <ResponsiveContainer width={250} height={250}>
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <Radar
            name="Status"
            dataKey="value"
            stroke="#90f913"
            fill="#90f913"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarStats;
