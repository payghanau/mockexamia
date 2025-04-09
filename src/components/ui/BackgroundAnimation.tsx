
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type BackgroundAnimationProps = {
  variant?: "default" | "minimal" | "gradient";
  className?: string;
};

const BackgroundAnimation = ({ 
  variant = "default",
  className = "" 
}: BackgroundAnimationProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (variant === "minimal") {
    return (
      <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-[60%] -left-[10%] w-[60%] h-[120%] rounded-full bg-blue-100 filter blur-[80px]" />
          <div className="absolute top-[30%] -right-[5%] w-[40%] h-[60%] rounded-full bg-blue-200 filter blur-[80px]" />
        </motion.div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/40 to-blue-50/20 rounded-full blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/30 to-purple-50/20 rounded-full blur-[90px]" />
        </motion.div>
      </div>
    );
  }
  
  // Default variant with more complex animations
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute rounded-full w-[300px] h-[300px] bg-blue-100/50"
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ filter: "blur(80px)" }}
        />
        
        <motion.div 
          className="absolute right-[10%] top-[30%] rounded-full w-[250px] h-[250px] bg-blue-200/40"
          animate={{
            x: [0, -70, -40, 0],
            y: [0, 30, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ filter: "blur(80px)" }}
        />
        
        <motion.div 
          className="absolute left-[15%] bottom-[10%] rounded-full w-[200px] h-[200px] bg-indigo-100/50"
          animate={{
            x: [0, 80, 30, 0],
            y: [0, -40, -90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ filter: "blur(70px)" }}
        />
      </motion.div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      
      {/* Mouse follower */}
      <motion.div
        className="hidden md:block bg-blue-200 rounded-full w-[300px] h-[300px]"
        style={{
          position: 'absolute',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          filter: 'blur(100px)',
          opacity: 0.1,
          zIndex: -5,
        }}
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 0.5,
        }}
      />
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
