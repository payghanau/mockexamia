
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, ArrowRight } from "lucide-react";
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

  return (
    <Card 
      className={`w-full transition-all duration-300 overflow-hidden ${
        isHovered ? "shadow-lg transform-gpu -translate-y-1" : "shadow-sm"
      } ${isPremium ? "glass bg-gradient-to-br from-white to-mcq-blue-light border-mcq-blue/20" : "bg-white"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-6">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-left">
            {exam.title}
          </CardTitle>
          {isPremium && (
            <div className="bg-mcq-blue text-white text-xs px-2 py-1 rounded-full">
              Premium
            </div>
          )}
        </div>
        {exam.description && (
          <p className="text-sm text-mcq-gray-dark mt-1 text-left">
            {exam.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-mcq-gray-dark" />
            <span>{exam.duration} minutes</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-2 text-mcq-gray-dark" />
            <span>{exam.totalQuestions} questions</span>
          </div>
          {isPremium && (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-mcq-gray-dark" />
              <span>500+ attempts</span>
            </div>
          )}
        </div>

        <div className="mt-6 bg-mcq-gray-lightest p-3 rounded-lg flex justify-between items-center">
          <span className="font-medium">Fee:</span>
          <span className="font-semibold text-mcq-blue">₹{exam.fee}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          onClick={handleExamInfo}
        >
          Learn More
        </Button>
        <Button
          className="w-full sm:w-auto group"
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
