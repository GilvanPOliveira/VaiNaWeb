import React from "react";

const statMap = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: "VEL",
};

function StatusVertical({ stats }) {
  return (
    <div className="status-container">
      {stats.map((stat) => (
        <div key={stat.stat.name} className="status-bar">
          <label>{statMap[stat.stat.name]}</label>
          <div className="bar">
            <div
              className="fill"
              style={{ height: `${(stat.base_stat / 150) * 100}%` }}
            />
          </div>
          <span>{stat.base_stat}</span>
        </div>
      ))}
    </div>
  );
}

export default StatusVertical;
