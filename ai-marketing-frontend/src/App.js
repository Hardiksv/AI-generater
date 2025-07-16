import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import CaptionGenerator from "./components/CaptionGenerator";
import AdHeadline from "./components/AdHeadline";
import ProductDescription from "./components/ProductDescription";


function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("dashboard");

  if (!user) return <LoginPage onLogin={setUser} />;

  const renderScreen = () => {
    switch (screen) {
      case "caption":
        return <CaptionGenerator goBack={() => setScreen("dashboard")} />;
      case "headline":
        return <AdHeadline goBack={() => setScreen("dashboard")} />;
      case "description":
        return <ProductDescription goBack={() => setScreen("dashboard")} />;
      
      default:
        return <Dashboard onSelect={setScreen} />;
    }
  };

  return <div>{renderScreen()}</div>;
}

export default App;
