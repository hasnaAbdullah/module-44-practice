import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
const students = [
  { id: 1, name: "Ariana", physics: 25, math: 90, chemistry: 78, biology: 82 },
  { id: 2, name: "Liam", physics: 76, math: 88, chemistry: 92, biology: 70 },
  { id: 3, name: "Zara", physics: 89, math: 95, chemistry: 90, biology: 85 },
  { id: 4, name: "Noah", physics: 72, math: 80, chemistry: 68, biology: 75 },
  { id: 5, name: "Emma", physics: 91, math: 85, chemistry: 88, biology: 90 },
  { id: 6, name: "Ayaan", physics: 64, math: 70, chemistry: 73, biology: 69 },
  { id: 7, name: "Sophia", physics: 87, math: 93, chemistry: 89, biology: 91 },
  { id: 8, name: "Ethan", physics: 58, math: 65, chemistry: 60, biology: 55 },
  { id: 9, name: "Mila", physics: 80, math: 82, chemistry: 85, biology: 83 },
  { id: 10, name: "Jay", physics: 20, math: 49, chemistry: 81, biology: 78 },
];

function LineChart01() {
  return (
    <div>
      <LineChart width={600} height={500} data={students}>
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="red" />
        <Line type="monotone" dataKey="chemistry" stroke="black" />
        <Line type="monotone" dataKey="biology" stroke="green" />
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default LineChart01;
