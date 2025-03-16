
import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Clock, AlertTriangle } from "lucide-react";

type TimerProps = {
  durationInMinutes: number;
  onTimeUp: () => void;
};

const Timer = ({ durationInMinutes, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(durationInMinutes * 60);
  const [isWarning, setIsWarning] = useState(false);
  const [isCritical, setIsCritical] = useState(false);
  const { toast } = useToast();

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  useEffect(() => {
    // Show warning when 25% time is left
    const warningThreshold = durationInMinutes * 60 * 0.25;
    // Show critical warning when 10% time is left
    const criticalThreshold = durationInMinutes * 60 * 0.1;

    if (timeLeft <= criticalThreshold && !isCritical) {
      setIsCritical(true);
      toast({
        title: "Time is running out!",
        description: "Less than 10% of your exam time remains.",
        variant: "destructive",
      });
    } else if (timeLeft <= warningThreshold && !isWarning) {
      setIsWarning(true);
      toast({
        title: "Warning",
        description: "25% of your exam time is left.",
        variant: "default",
      });
    }
  }, [timeLeft, durationInMinutes, isWarning, isCritical, toast]);

  return (
    <div className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
      isCritical 
        ? "bg-red-50 text-red-500 animate-pulse" 
        : isWarning 
          ? "bg-amber-50 text-amber-500" 
          : "bg-mcq-gray-lightest text-foreground"
    }`}>
      {isCritical ? (
        <AlertTriangle className="h-5 w-5" />
      ) : (
        <Clock className="h-5 w-5" />
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium">Time Remaining</span>
        <span className="text-lg font-bold">{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default Timer;
