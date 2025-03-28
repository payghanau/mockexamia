
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: "blue" | "green" | "purple" | "orange" | "pink";
}

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  color = "blue" 
}: StatCardProps) => {
  
  const gradientClasses = {
    blue: "bg-gradient-card-blue text-white",
    green: "bg-gradient-card-green text-white",
    purple: "bg-gradient-card-purple text-white",
    orange: "bg-gradient-card-orange text-white",
    pink: "bg-gradient-card-pink text-white",
  };
  
  const iconContainerClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    pink: "bg-pink-100 text-pink-600",
  };
  
  const ringClasses = {
    blue: "ring-blue-400",
    green: "ring-green-400",
    purple: "ring-purple-400",
    orange: "ring-orange-400",
    pink: "ring-pink-400",
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-card-hover",
      gradientClasses[color],
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium opacity-90">{title}</CardTitle>
          <div className={cn(
            "p-2 rounded-full flex items-center justify-center",
            iconContainerClasses[color],
            "ring-2 ring-offset-2 ring-offset-transparent",
            ringClasses[color]
          )}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mt-1 mb-1">{value}</div>
        <p className="text-xs opacity-80">{description}</p>
        {trend && (
          <div className={`flex items-center mt-2 text-xs ${trend.isPositive ? 'text-green-100' : 'text-red-200'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}%
            <span className="ml-1 opacity-80">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
