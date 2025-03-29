
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface SalesChartProps {
  period: "month" | "year";
}

const SalesChart = ({ period }: SalesChartProps) => {
  // Mock data for demonstration
  const monthlyData = [
    { name: "Jan", revenue: 2500, exams: 25 },
    { name: "Feb", revenue: 3200, exams: 30 },
    { name: "Mar", revenue: 4100, exams: 35 },
    { name: "Apr", revenue: 4800, exams: 40 },
    { name: "May", revenue: 5200, exams: 45 },
    { name: "Jun", revenue: 4900, exams: 42 },
    { name: "Jul", revenue: 5600, exams: 48 },
    { name: "Aug", revenue: 6100, exams: 52 },
    { name: "Sep", revenue: 5800, exams: 50 },
    { name: "Oct", revenue: 6500, exams: 55 },
    { name: "Nov", revenue: 7200, exams: 60 },
    { name: "Dec", revenue: 7800, exams: 65 },
  ];

  const yearlyData = [
    { name: "2018", revenue: 25000, exams: 250 },
    { name: "2019", revenue: 40000, exams: 380 },
    { name: "2020", revenue: 55000, exams: 480 },
    { name: "2021", revenue: 70000, exams: 580 },
    { name: "2022", revenue: 85000, exams: 680 },
    { name: "2023", revenue: 120000, exams: 800 },
  ];

  const data = period === "month" ? monthlyData : yearlyData;

  return (
    <div className="w-full bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
        <p className="text-sm text-gray-500">
          {period === "month" ? "Monthly revenue and exams sold" : "Yearly revenue and exams sold"}
        </p>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: "#6B7280" }} 
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={{ stroke: "#E5E7EB" }}
            />
            <YAxis 
              yAxisId="left"
              orientation="left"
              tick={{ fill: "#6B7280" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={{ stroke: "#E5E7EB" }}
              tickFormatter={(value) => `₹${value}`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              tick={{ fill: "#6B7280" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={{ stroke: "#E5E7EB" }}
            />
            <Tooltip 
              formatter={(value, name) => {
                if (name === "revenue") return [`₹${value}`, "Revenue"];
                return [value, "Exams Sold"];
              }}
            />
            <Legend />
            <Bar 
              yAxisId="left"
              dataKey="revenue" 
              name="Revenue" 
              fill="#8884d8" 
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              yAxisId="right"
              dataKey="exams" 
              name="Exams Sold" 
              fill="#82ca9d" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
