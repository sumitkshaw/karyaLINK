"use client";

import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import ServicesGrid from "@/components/ServicesGrid";
import TrustFeatures from "@/components/TrustFeatures";
import PilotLaunch from "@/components/PilotLaunch";
import AppDownloadBanner from "@/components/AppDownloadBanner"; // Add this

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <ServicesGrid />
      <TrustFeatures />
      <PilotLaunch />
      <AppDownloadBanner /> {/* Add this before footer */}
    </>
  )
}