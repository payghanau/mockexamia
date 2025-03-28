
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid, AreaChart, Area } from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const monthData = [
  { name: "Jan", sales: 12, revenue: 2388 },
  { name: "Feb", sales: 19, revenue: 3784 },
  { name: "Mar", sales: 14, revenue: 2780 },
  { name: "Apr", sales: 22, revenue: 4390 },
  { name: "May", sales: 25, revenue: 5000 },
  { name: "Jun", sales: 18, revenue: 3600 },
  { name: "Jul", sales: 21, revenue: 4200 },
  { name: "Aug", sales: 15, revenue: 3000 },
  { name: "Sep", sales: 17, revenue: 3400 },
  { name: "Oct", sales: 24, revenue: 4800 },
  { name: "Nov", sales: 20, revenue: 4000 },
  { name: "Dec", sales: 28, revenue: 5600 },
];

const yearData = [
  { name: "2020", sales: 125, revenue: 25000 },
  { name: "2021", sales: 210, revenue: 42000 },
  { name: "2022", sales: 185, revenue: 37000 },
  { name: "2023", sales: 245, revenue: 49000 },
  { name: "2024", sales: 180, revenue: 36000 },
];

interface SalesChartProps {
  period: "month" | "year";
}

const SalesChart = ({ period }: SalesChartProps) => {
  const data = period === "month" ? monthData : yearData;
  const [chartType, setChartType] = useState<"bar" | "area">("bar");
  
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-card-hover transition-all duration-300 bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg text-gray-900">
              {period === "month" ? "Monthly Sales Overview" : "Yearly Sales Overview"}
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              {period === "month" 
                ? "Tests sold and revenue generated per month" 
                : "Tests sold and revenue generated per year"}
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant={chartType === "bar" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setChartType("bar")}
              className="text-xs h-8"
            >
              Bar
            </Button>
            <Button 
              variant={chartType === "area" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setChartType("area")}
              className="text-xs h-8"
            >
              Area
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] mt-2">
          <ChartContainer
            config={{
              sales: {
                label: "Sales",
                color: "#8B5CF6", // Purple
              },
              revenue: {
                label: "Revenue (₹)",
                color: "#F97316", // Orange
              },
            }}
          >
            {chartType === "bar" ? (
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#6C757D' }}
                  axisLine={{ stroke: '#E9ECEF' }}
                />
                <YAxis 
                  yAxisId="left" 
                  orientation="left" 
                  stroke="#8B5CF6"
                  tick={{ fill: '#6C757D' }}
                  axisLine={{ stroke: '#E9ECEF' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  stroke="#F97316"
                  tick={{ fill: '#6C757D' }}
                  axisLine={{ stroke: '#E9ECEF' }}
                />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Bar 
                  dataKey="sales" 
                  name="Tests Sold" 
                  fill="#8B5CF6" 
                  yAxisId="left" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
                <Bar 
                  dataKey="revenue" 
                  name="Revenue (₹)" 
                  fill="#F97316" 
                  yAxisId="right" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            ) : (
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#6C757D' }}
                  axisLine={{ stroke: '#E9ECEF' }}
                />
                <YAxis 
                  yAxisId="left" 
                  orientation="left" 
                  stroke="#8B5CF6"
                  tick={{ fill: '#6C757D' }}
                  axisLine={{ stroke: '#E9ECEF' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  stroke="#F97316"
                  tick={{ fill: '#6C757D' }}
                  axisLine={{ stroke: '#E9ECEF' }}
                />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  name="Tests Sold" 
                  stroke="#8B5CF6" 
                  fill="url(#purpleGradient)" 
                  yAxisId="left"
                  animationDuration={1500}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  name="Revenue (₹)" 
                  stroke="#F97316" 
                  fill="url(#orangeGradient)" 
                  yAxisId="right"
                  animationDuration={1500}
                />
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            )}
          </ChartContainer>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div className="text-sm font-medium text-purple-800">Total Tests Sold</div>
            <div className="text-2xl font-bold text-purple-700 mt-1">
              {data.reduce((sum, item) => sum + item.sales, 0)}
            </div>
            <div className="text-xs text-purple-600 mt-1">
              Avg {Math.round(data.reduce((sum, item) => sum + item.sales, 0) / data.length)} per {period === "month" ? "month" : "year"}
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
            <div className="text-sm font-medium text-orange-800">Total Revenue</div>
            <div className="text-2xl font-bold text-orange-700 mt-1">
              ₹{data.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}
            </div>
            <div className="text-xs text-orange-600 mt-1">
              Avg ₹{Math.round(data.reduce((sum, item) => sum + item.revenue, 0) / data.length).toLocaleString()} per {period === "month" ? "month" : "year"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
