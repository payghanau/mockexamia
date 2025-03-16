
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExamAnalysis } from "@/types";
import { Check, X, Clock, AlertCircle, BarChart } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

type TestAnalysisProps = {
  analysis: ExamAnalysis;
};

const TestAnalysis = ({ analysis }: TestAnalysisProps) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let formattedTime = "";
    if (hours > 0) {
      formattedTime += `${hours}h `;
    }
    if (minutes > 0 || hours > 0) {
      formattedTime += `${minutes}m `;
    }
    formattedTime += `${remainingSeconds}s`;

    return formattedTime;
  };

  // Data for pie chart
  const pieData = [
    { name: "Correct", value: analysis.correct, color: "#10b981" },
    { name: "Incorrect", value: analysis.incorrect, color: "#ef4444" },
    { name: "Skipped", value: analysis.skipped, color: "#d1d5db" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-500";
    if (score >= 60) return "text-blue-500";
    if (score >= 40) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-xl">Performance Summary</CardTitle>
          <CardDescription>Overview of your test performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
            <div className="flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-mcq-blue" />
              <span className="font-medium">Score:</span>
            </div>
            <span
              className={`text-lg font-bold ${getScoreColor(
                analysis.percentageScore
              )}`}
            >
              {analysis.obtainedMarks}/{analysis.totalMarks} (
              {analysis.percentageScore.toFixed(2)}%)
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-emerald-500" />
              <span className="font-medium">Correct Answers:</span>
            </div>
            <span className="text-lg font-medium">{analysis.correct}</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
            <div className="flex items-center">
              <X className="h-5 w-5 mr-2 text-red-500" />
              <span className="font-medium">Incorrect Answers:</span>
            </div>
            <span className="text-lg font-medium">{analysis.incorrect}</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-gray-400" />
              <span className="font-medium">Skipped Questions:</span>
            </div>
            <span className="text-lg font-medium">{analysis.skipped}</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-mcq-blue" />
              <span className="font-medium">Time Taken:</span>
            </div>
            <span className="text-lg font-medium">
              {formatTime(analysis.timeTaken)}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-xl">Distribution</CardTitle>
          <CardDescription>
            Breakdown of your answers by category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [value, name]}
                  labelFormatter={() => ''}
                />
                <Legend 
                  verticalAlign="bottom" 
                  align="center" 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-4 bg-mcq-gray-lightest rounded-lg">
            <p className="font-medium">Accuracy Rate: <span className="font-bold">{analysis.accuracy.toFixed(2)}%</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-mcq-blue h-2.5 rounded-full" 
                style={{ width: `${analysis.accuracy}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestAnalysis;
