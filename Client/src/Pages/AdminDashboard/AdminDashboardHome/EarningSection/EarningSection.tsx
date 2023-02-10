import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const data = [
  {
    name: 'One',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Two',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Three',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Four',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Five',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Six',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Seven',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x:any, y:any, width:any, height:any) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
const TriangleBar = (props:any) => {
const { fill, x, y, width, height } = props;

return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
  
const EarningSection = () => {
    return (
        <div className="earning-section bg-white rounded-md">
            <div className="statistic-header">
                <h4 className="text-2xl text-left p-5 font-bold text-black">Earning</h4>
                <div className="flex px-5 pb-5 gap-5">
                    <div className="total-money">
                        <h3 className="text-[#9f9f9f] mb-1">Total Collection</h3>
                        <p className='text-2xl text-[#222222] font-medium'>$75000</p>
                    </div>
                    <div className="fees-collection">
                        <h3 className="text-[#9f9f9f] mb-1">Fees Collection</h3>
                        <p className='text-2xl text-[#222222] font-medium'>$5000</p>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
        </div>
    );
};

export default EarningSection;