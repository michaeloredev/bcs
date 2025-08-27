"use client";
import React, { useState } from "react";
import Card from "@/app/UI/Card";
import InfoSheet from "@/app/UI/InfoSheet";
import ServiceDetailsPanel from "@/app/UI/ServiceDetailsPanel";
import { IoIosHome } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { PiGavelFill } from "react-icons/pi";

// Define the service information mapping
interface ServiceInfo {
  title: string;
  description: string;
  services: string[];
}

const serviceInfo: { [key: string]: ServiceInfo } = {
  Home: {
    title: "Home Services",
    description: "Comprehensive solutions for your home maintenance needs.",
    services: [
      "Plumbing",
      "Electrical Repair",
      "House Cleaning",
      "Landscaping",
      "Pest Control",
    ],
  },
  Automotive: {
    title: "Automotive Services",
    description: "Keep your vehicle in top condition with our expert services.",
    services: [
      "Oil Change",
      "Tire Services",
      "Car Wash",
      "Auto Repair",
      "Detailing",
    ],
  },
  Legal: {
    title: "Legal Services",
    description: "Professional legal assistance for your personal and property needs.",
    services: [
      "Notary Services",
      "Estate Planning",
      "Contract Review",
      "Family Law",
      "Real Estate Law",
    ],
  },
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedServiceItem, setSelectedServiceItem] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleCardClick = (title: string) => {
    setSelectedService(title);
  };

  const handleServiceItemClick = (serviceName: string) => {
    setSelectedServiceItem(serviceName);
    setIsPanelOpen(true);
  };

  const handleClosePanelClick = () => {
    setIsPanelOpen(false);
    setSelectedServiceItem(null);
  };

  return (
    <div className="h-[calc(100vh-193px)] bg-accent flex flex-col items-center py-8">
      <div className="text-2xl font-bold mb-6">Services</div>

      <div className="flex flex-row flex-wrap gap-4 justify-center">
        <Card
          title="Home"
          icon={<IoIosHome />}
          width="w-42"
          onClick={() => handleCardClick("Home")}
          selected={selectedService === "Home"}
        />
        <Card
          title="Automotive"
          icon={<FaCar />}
          width="w-42"
          onClick={() => handleCardClick("Automotive")}
          selected={selectedService === "Automotive"}
        />
        <Card
          title="Legal"
          icon={<PiGavelFill />}
          width="w-42"
          onClick={() => handleCardClick("Legal")}
          selected={selectedService === "Legal"}
        />
      </div>

      <InfoSheet
        content={selectedService ? serviceInfo[selectedService] : null}
        onServiceItemClick={handleServiceItemClick}
      />

      {/* Service Details Panel */}
      <ServiceDetailsPanel
        isOpen={isPanelOpen}
        serviceName={selectedServiceItem || ""}
        onClose={handleClosePanelClick}
      />
    </div>
  );
};

export default Services;