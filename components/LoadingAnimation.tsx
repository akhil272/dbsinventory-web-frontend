import React from "react";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  message?: string;
}
const _size = 20;
const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCirclesVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCirclesTransitions = {
  duration: 1,
  repeat: Infinity,
  type: "tween",
  ease: "easeInOut",
};

const LoadingAnimation = ({ message }: LoadingAnimationProps) => {
  return (
    <motion.div className="w-screen bg-zinc-100  h-screen flex justify-center items-center">
      <motion.div className="text-center justify-center absolute bottom-64 items-center text-red-600 text-lg">
        {message}
      </motion.div>
      <motion.div
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
        className="w-60 h-90 flex justify-around"
      >
        <motion.span
          variants={loadingCirclesVariants}
          transition={loadingCirclesTransitions}
          className="w-10 h-10 rounded-full bg-red-500"
        />
        <motion.span
          variants={loadingCirclesVariants}
          transition={loadingCirclesTransitions}
          className="w-10 h-10 rounded-full bg-red-500"
        />
        <motion.span
          variants={loadingCirclesVariants}
          transition={loadingCirclesTransitions}
          className="w-10 h-10 rounded-full bg-red-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;
