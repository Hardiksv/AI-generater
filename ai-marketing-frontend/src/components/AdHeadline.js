import React, { useState } from "react";
import { motion } from "framer-motion";

const AdHeadlineGenerator = ({ goBack }) => {
  const [prompt, setPrompt] = useState("");
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
  setHeadlines([]);
  setLoading(true);
  try {
    const response = await fetch("https://ai-generater-1.onrender.com/api/headline", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (response.ok && Array.isArray(data.headlines)) {
      setHeadlines(data.headlines);
    } else if (data.error) {
      setHeadlines([`❌ ${data.error}`]);
    } else {
      setHeadlines(["❌ Unexpected response."]);
    }
  } catch (error) {
    setHeadlines([`❌ Error: ${error.message}`]);
  }
  setLoading(false);
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#e4ecf2] to-[#d4dce5] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Elegant Floating Gradient Orb */}
      <motion.div
        animate={{
          x: ["0%", "20%", "-10%", "30%", "-20%", "0%"],
          y: ["0%", "10%", "-10%", "15%", "-15%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_30%_30%,#a3e4ff,#805bd8,#ff66c4)] rounded-full blur-3xl opacity-30 z-0"
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative w-full max-w-6xl z-10">

        {/* Ad Headline Generator Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] w-full max-w-xl"
        >
          <motion.h2
            animate={{ opacity: [1, 0.95, 1], scale: [1, 1.01, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl font-bold text-gray-800 mb-6 text-center"
          >
            Generate Creative Ad Headlines
          </motion.h2>

          <p className="text-gray-500 text-center mb-6">
            Perfect for boosting your advertising campaigns.
          </p>

          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your product or service..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <motion.button
            onClick={handleGenerate}
            disabled={loading}
            whileHover={{ scale: 1.04 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition-all"
          >
            {loading ? "Generating..." : "Generate Headlines"}
          </motion.button>

          {headlines.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <h3 className="font-semibold text-gray-700 mb-2">Generated Headlines:</h3>
              <ul className="bg-gray-50 p-4 rounded-lg text-gray-800 border border-gray-200 space-y-2">
                {headlines.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.button
            onClick={goBack}
            whileHover={{ scale: 1.03 }}
            className="mt-6 text-indigo-500 hover:text-indigo-700 font-medium transition-all"
          >
            ⟵ Back to Dashboard
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/assets/robot2.png"
          alt="Creative Bot"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[250px] md:w-[300px] object-contain"
        />
      </div>
    </div>
  );
};

export default AdHeadlineGenerator;



