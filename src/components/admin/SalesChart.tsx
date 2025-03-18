
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

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
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{period === "month" ? "Monthly Sales Overview" : "Yearly Sales Overview"}</CardTitle>
        <CardDescription>
          {period === "month" 
            ? "Number of tests sold and revenue generated per month in the current year" 
            : "Number of tests sold and revenue generated per year"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer
            config={{
              sales: {
                label: "Sales",
                color: "#60a5fa",
              },
              revenue: {
                label: "Revenue (₹)",
                color: "#34d399",
              },
            }}
          >
            <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#60a5fa" />
              <YAxis yAxisId="right" orientation="right" stroke="#34d399" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="sales" name="Tests Sold" fill="#60a5fa" yAxisId="left" />
              <Bar dataKey="revenue" name="Revenue (₹)" fill="#34d399" yAxisId="right" />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
