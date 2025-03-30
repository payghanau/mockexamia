
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, ArrowRight, BookOpen } from "lucide-react";
import { Exam } from "@/types";
import { useToast } from "@/components/ui/use-toast";

type ExamCardProps = {
  exam: Exam;
  isPremium?: boolean;
};

const ExamCard = ({ exam, isPremium = false }: ExamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleExamStart = () => {
    if (isPremium) {
      navigate(`/payment/${exam.id}`);
    } else {
      navigate(`/exam/${exam.id}`);
    }
  };

  const handleExamInfo = () => {
    navigate(`/exam-details/${exam.id}`);
  };

  // Determine card style based on exam category
  const getCardStyle = () => {
    if (exam.category === "NISM") {
      return {
        gradient: isPremium 
          ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200" 
          : "bg-white border-blue-100",
        accent: "text-blue-700",
        accentLight: "text-blue-600",
        badge: "bg-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        outlineButton: "border-blue-500 text-blue-600 hover:bg-blue-50",
        icon: "text-blue-500"
      };
    } else {
      return {
        gradient: isPremium 
          ? "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200" 
          : "bg-white border-purple-100",
        accent: "text-purple-700",
        accentLight: "text-purple-600",
        badge: "bg-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        outlineButton: "border-purple-500 text-purple-600 hover:bg-purple-50",
        icon: "text-purple-500"
      };
    }
  };

  const style = getCardStyle();

  return (
    <Card 
      className={`w-full transition-all duration-300 overflow-hidden shadow-sm ${
        isHovered ? "shadow-xl transform -translate-y-1" : ""
      } ${style.gradient}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-6">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-left">
            {exam.title}
          </CardTitle>
          {isPremium && (
            <div className={`${style.badge} text-white text-xs px-3 py-1 rounded-full`}>
              Premium
            </div>
          )}
        </div>
        {exam.description && (
          <p className="text-sm text-gray-600 mt-1 text-left">
            {exam.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Clock className={`h-4 w-4 mr-2 ${style.icon}`} />
            <span>{exam.duration} minutes</span>
          </div>
          <div className="flex items-center">
            <Award className={`h-4 w-4 mr-2 ${style.icon}`} />
            <span>{exam.totalQuestions} questions</span>
          </div>
          {isPremium && (
            <div className="flex items-center">
              <Users className={`h-4 w-4 mr-2 ${style.icon}`} />
              <span>500+ attempts</span>
            </div>
          )}
        </div>

        <div className={`mt-6 bg-white p-3 rounded-lg border border-gray-100 flex justify-between items-center`}>
          <span className="font-medium flex items-center">
            <BookOpen className={`h-4 w-4 mr-2 ${style.icon}`} />
            {exam.category}
          </span>
          <span className={`font-semibold ${style.accent}`}>₹{exam.fee}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          className={`w-full sm:w-auto ${style.outlineButton}`}
          onClick={handleExamInfo}
        >
          Learn More
        </Button>
        <Button
          className={`w-full sm:w-auto group ${style.button}`}
          onClick={handleExamStart}
        >
          Start Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
