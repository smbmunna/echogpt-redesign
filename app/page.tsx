"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/shared/navbar";
import Hero from "./components/LandingPage/Hero";
import Mockup from "./components/LandingPage/Mockup";
import AIModels from "./components/LandingPage/AIModels";
import Features from "./components/LandingPage/Features";
import WhyChooseSection from "./components/LandingPage/WhyChooseSection";

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
    const [activeTab, setActiveTab] = useState<"speed" | "reasoning" | "context">("speed");


  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white font-sans transition-colors duration-200">
      {/* NAVBAR */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* HERO */}
      <Hero />

      {/* --- PRODUCT UI MOCKUP / PREVIEW --- */}
      <Mockup />

      {/* AI Models */}
      <AIModels />

      {/* Features */}
      <Features activeTab={activeTab} setActiveTab={setActiveTab}/>

      {/* Why Choose Us */}
      <WhyChooseSection/>
    </div>
  );
}
