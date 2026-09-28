"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/shared/navbar";

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div>
      {/* NAVBAR */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
