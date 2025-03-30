
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
          bg: "bg-gradient-to-br from-purple-50 to-purple-100",
          text: "text-purple-800",
          iconBg: "bg-gradient-to-br from-purple-600 to-purple-700",
          iconColor: "text-white",
          trendUp: "text-green-600",
          trendDown: "text-red-500",
          border: "border-purple-200"
        };
      case "blue":
        return {
          bg: "bg-gradient-to-br from-blue-50 to-blue-100",
          text: "text-blue-800",
          iconBg: "bg-gradient-to-br from-blue-600 to-blue-700",
          iconColor: "text-white",
          trendUp: "text-green-600",
          trendDown: "text-red-500",
          border: "border-blue-200"
        };
      case "green":
        return {
          bg: "bg-gradient-to-br from-green-50 to-green-100",
          text: "text-green-800",
          iconBg: "bg-gradient-to-br from-green-600 to-green-700",
          iconColor: "text-white",
          trendUp: "text-green-600",
          trendDown: "text-red-500",
          border: "border-green-200"
        };
      case "orange":
        return {
          bg: "bg-gradient-to-br from-orange-50 to-orange-100",
          text: "text-orange-800",
          iconBg: "bg-gradient-to-br from-orange-600 to-orange-700",
          iconColor: "text-white",
          trendUp: "text-green-600",
          trendDown: "text-red-500",
          border: "border-orange-200"
        };
      default:
        return {
          bg: "bg-gradient-to-br from-gray-50 to-gray-100",
          text: "text-gray-800",
          iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
          iconColor: "text-white",
          trendUp: "text-green-600",
          trendDown: "text-red-500",
          border: "border-gray-200"
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className={`${colors.bg} p-6 rounded-lg border ${colors.border} shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="flex items-baseline mt-1">
            <h3 className={`text-2xl font-bold ${colors.text}`}>{value}</h3>
            {trend && (
              <span className={`ml-2 text-sm font-medium flex items-center ${trend.isPositive ? colors.trendUp : colors.trendDown}`}>
                {trend.isPositive ? "+" : "-"}{trend.value}%
                <svg 
                  className={`h-3 w-3 ml-1 ${trend.isPositive ? "rotate-0" : "rotate-180"}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        <div className={`p-3 rounded-full ${colors.iconBg}`}>
          <Icon className={`h-5 w-5 ${colors.iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
