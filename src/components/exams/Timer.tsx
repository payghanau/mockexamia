
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export interface TimerProps {
  initialTime: number; // Time in minutes
  onTimerEnd: () => void;
}

const Timer = ({ initialTime, onTimerEnd }: TimerProps) => {
  // Convert minutes to seconds
  const [timeLeft, setTimeLeft] = useState(initialTime * 60);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimerEnd();
      return;
    }
    
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timerId);
  }, [timeLeft, onTimerEnd]);
  
  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  // Format with leading zeros
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  // Determine color based on time left
  const getColor = () => {
    if (timeLeft < 60) return "text-red-600"; // Less than 1 minute
    if (timeLeft < 300) return "text-amber-500"; // Less than 5 minutes
    return "text-green-600";
  };
  
  return (
    <div className="flex items-center gap-2 font-mono text-lg">
      <Clock className={`h-5 w-5 ${getColor()}`} />
      <span className={getColor()}>
        {formattedMinutes}:{formattedSeconds}
      </span>
    </div>
  );
};

export default Timer;
