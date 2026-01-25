"use client";

import Button from "@/components/Button";
import Terms from "@/components/Terms";

export default function FAQPage() {
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen">
      
      {/* FAQ Component */}
      <Terms />

      
    </div>
  );
}