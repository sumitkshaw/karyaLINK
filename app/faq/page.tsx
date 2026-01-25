"use client";

import FAQ from "@/components/Faq";
import Button from "@/components/Button";

export default function FAQPage() {
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen">
      
      {/* FAQ Component */}
      <FAQ />

      
    </div>
  );
}