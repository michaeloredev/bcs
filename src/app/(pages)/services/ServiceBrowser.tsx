"use client";
import React, { useState } from "react";
import Card from "@/app/UI/Card";
import InfoSheet from "@/app/UI/InfoSheet";
import ServiceDetailsPanel from "@/app/UI/ServiceDetailsPanel";
import { IoIosHome } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { PiGavelFill } from "react-icons/pi";

export interface ServiceCategoryData {
  title: string;
  description: string;
  services: string[];
}

interface ServiceBrowserProps {
  categories: ServiceCategoryData[];
}

const iconFor = (title: string) => {
  switch (title) {
    case "Home":
      return <IoIosHome />;
    case "Automotive":
      return <FaCar />;
    case "Legal":
      return <PiGavelFill />;
    default:
      return <IoIosHome />;
  }
};

const ServiceBrowser: React.FC<ServiceBrowserProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedServiceItem, setSelectedServiceItem] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const selectedContent = categories.find(c => c.title === selectedCategory) || null;

  const handleCardClick = (title: string) => {
    setSelectedCategory(title === selectedCategory ? null : title);
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
        {categories.map(cat => (
          <Card
            key={cat.title}
            title={cat.title}
            icon={iconFor(cat.title)}
            width="w-42"
            onClick={() => handleCardClick(cat.title)}
            selected={selectedCategory === cat.title}
          />
        ))}
      </div>

      <InfoSheet
        content={selectedContent ? { title: selectedContent.title + " Services", description: selectedContent.description, services: selectedContent.services } : null}
        onServiceItemClick={handleServiceItemClick}
      />

      <ServiceDetailsPanel
        isOpen={isPanelOpen}
        serviceName={selectedServiceItem || ""}
        onClose={handleClosePanelClick}
      />
    </div>
  );
};

export default ServiceBrowser;
