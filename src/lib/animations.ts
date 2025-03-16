
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
};

export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  },
  exit: { 
    y: -20, 
    opacity: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeIn" 
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  },
  exit: { 
    scale: 0.95, 
    opacity: 0,
    transition: { 
      duration: 0.2 
    }
  }
};

export const cardHover = {
  rest: { 
    scale: 1, 
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.02, 
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

export const buttonTap = {
  rest: { scale: 1 },
  tap: { scale: 0.95 }
};

export const pageTransition = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
  transition: { duration: 0.3 }
};
