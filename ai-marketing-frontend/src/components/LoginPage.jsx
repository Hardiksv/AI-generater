import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Text + Login */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            A next-<br />
            generation <br />
            agency.
          </h1>
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              AI Content Generator
            </h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-semibold transition-all"
            >
              Login
            </button>
          </div>
        </div>

        {/* Right: Animated Eye Logo */}
        <div className="flex justify-center">
          <motion.img
            src="/assets/rocket.png"  // Make sure image exists in public/assets
            alt="Rocket"
            className="w-60 h-60 object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     if (!username.trim() || !password.trim()) {
//       setError("Please enter both username and password.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         onLogin(username);
//       } else {
//         setError(data.message || "Invalid credentials.");
//       }
//     } catch (err) {
//       setError("Server error. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#e4ecf2] to-[#d4dce5] flex items-center justify-center px-4 relative">
//       <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

//         {/* Left Section: Login Form */}
//         <div className="text-left">
//           <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
//             A next-<br />
//             generation <br />
//             agency.
//           </h1>

//           <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">
//               AI Content Generator
//             </h2>

//             <input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//             {error && (
//               <div className="text-red-500 text-sm mb-4">{error}</div>
//             )}

//             <button
//               onClick={handleLogin}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-semibold transition-all"
//             >
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Right Section: Animation */}
//         <div className="flex justify-center">
//           <motion.img
//             src="/assets/rocket.png"
//             alt="Rocket"
//             className="w-60 h-60 object-contain"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




