import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%", // Start position
  },
  animate: {
    top: "100%", // End position
  },
  exit: {
    top: ["100%", "0%"], // Exit transition (optional)
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stair = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1, // Delay each step
            }}
            className="bg-white absolute"
            style={{
              height: `${100 }vh`, // Divide the full height into 6 equal parts
              width: `${100 / 6}vw`, // Divide the full width into 6 equal parts
              top: `${index * (100 / 6)}vh`, // Position each step vertically
              left: `${index * (100 / 6)}vw`, // Position each step horizontally
            }}
          />
        );
      })}
    </div>
  );
};

export default Stair;