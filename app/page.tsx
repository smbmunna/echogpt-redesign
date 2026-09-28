"use client";

import { useState } from "react";
import Navbar from "./components/shared/navbar";
import Hero from "./components/LandingPage/Hero";
import Mockup from "./components/LandingPage/Mockup";
import AIModels from "./components/LandingPage/AIModels";
import Features from "./components/LandingPage/Features";
import WhyChooseSection from "./components/LandingPage/WhyChooseSection";
import Pricing from "./components/LandingPage/Pricing";
import FAQ from "./components/LandingPage/FAQ";
import Testimonials from "./components/LandingPage/Testimonials";
import Footer from "./components/shared/Footer";

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<"speed" | "reasoning" | "context">(
    "speed",
  );
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      <Features activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Pricing */}
      <Pricing billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

      {/*FAQ*/}
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} isOpen={openFaq} />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
