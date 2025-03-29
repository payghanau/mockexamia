
import { ElementType } from "react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: "purple" | "blue" | "green" | "orange";
}

const StatCard = ({ title, value, description, icon: Icon, trend, color }: StatCardProps) => {
  // Generate color classes based on the color prop
  const getColorClasses = () => {
    switch (color) {
      case "purple":
        return {
          bg: "bg-purple-50",
          text: "text-purple-700",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          trendUp: "text-purple-600",
          trendDown: "text-red-500"
        };
      case "blue":
        return {
          bg: "bg-blue-50",
          text: "text-blue-700",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          trendUp: "text-blue-600",
          trendDown: "text-red-500"
        };
      case "green":
        return {
          bg: "bg-green-50",
          text: "text-green-700",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          trendUp: "text-green-600",
          trendDown: "text-red-500"
        };
      case "orange":
        return {
          bg: "bg-orange-50",
          text: "text-orange-700",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          trendUp: "text-green-600",
          trendDown: "text-red-500"
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-700",
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          trendUp: "text-green-600",
          trendDown: "text-red-500"
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className={`${colors.bg} p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="flex items-baseline mt-1">
            <h3 className={`text-2xl font-bold ${colors.text}`}>{value}</h3>
            {trend && (
              <span className={`ml-2 text-sm font-medium ${trend.isPositive ? colors.trendUp : colors.trendDown}`}>
                {trend.isPositive ? "+" : "-"}{trend.value}%
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <div className={`p-2 rounded-full ${colors.iconBg}`}>
          <Icon className={`h-5 w-5 ${colors.iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
