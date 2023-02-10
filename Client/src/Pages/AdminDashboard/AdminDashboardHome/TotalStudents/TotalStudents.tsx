import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
  
const data = [
  { name: 'Male Students', value: 3000, fill: '#1f77b4' },
  { name: 'Female Students', value: 4500, fill: '#ff7f0e' },
];

const renderActiveShape = (props:any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, name } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#111">{`${name} ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const TotalStudents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const  onPieEnter = (_:any, index:any) => {
    setActiveIndex(index);
  };
    return (
     <div className="total-students-statistic bg-white rounded-md">
      <div className="statistic-header">
                <h4 className="text-2xl text-left p-5 font-bold text-black">Students</h4>
            </div>
           <div style={{ width: '100%', height: 300 }}>
           <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#54147"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
         
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="total-student-show flex justify-between px-5">
        <div className="total-male relative after:content after:absolute after:w-16 after:h-2 after:top-[-20px] after:rounded-md after:left-0 after:bg-[#1f77b4]">
          <h4 className="text-[#a5a5a5] text-sm">Male Students</h4>
          <p className="text-[#111111] text-lg">{data[0].value}</p>
        </div>
        <div className="total-female relative after:content after:absolute after:w-16 after:h-2 after:top-[-20px] after:rounded-md after:left-0 after:bg-[#ff7f0e]">
          <h4 className="text-[#a5a5a5] text-sm">Female Students</h4>
          <p className="text-[#111111] text-lg">{data[1].value}</p>
        </div>
      </div>
     </div>
    );
};

export default TotalStudents;