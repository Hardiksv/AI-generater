import React from "react";
import { motion } from "framer-motion";

const Dashboard = ({ onSelect }) => {
  const options = [
    { label: "Generate Caption", value: "caption" },
    { label: "Generate Headline", value: "headline" },
    { label: "Generate Description", value: "description" },
  ];

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden px-4">

      {/* Continuously Floating Animated Gradient Sphere */}
      <motion.div
        animate={{
          x: ["0%", "25%", "-25%", "50%", "-50%", "0%"],
          y: ["0%", "10%", "-10%", "25%", "-25%", "0%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[radial-gradient(circle_at_30%_30%,#8ee3f5,#805bd8,#ff66c4)] rounded-full blur-[2px] shadow-2xl z-0"
      />

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 max-w-xl text-left"
      >
        <motion.h2
          animate={{ scale: [1, 1.02, 1], opacity: [1, 0.95, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          The creative <br />
          <span className="text-black">content generator</span>
        </motion.h2>

        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Choose the type of content you want to generate and let AI help you do the rest.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {options.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => onSelect(option.value)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0,0,0,0.1)",
              }}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 w-full md:w-auto"
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
