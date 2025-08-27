import React from "react";

// Define the props interface
interface ServiceInfo {
  title: string;
  description: string;
  services: string[];
}

interface InfoSheetProps {
  content: ServiceInfo | null;
  onServiceItemClick?: (service: string) => void; // New prop for handling service item clicks
}

const InfoSheet: React.FC<InfoSheetProps> = ({ content, onServiceItemClick }) => {
  if (!content) {
    return (
      <div className="mt-8 w-full max-w-xl text-center text-gray-500">
        Select a service to view details.
      </div>
    );
  }

  return (
    <div className="mt-8 w-5/8 max-w-lg bg-white shadow-md rounded-lg p-8">
      <h3 className="text-xl font-semibold mb-3 text-primary">
        {content.title}
      </h3>
      <p className="text-gray-700 mb-4">{content.description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {content.services.map((service) => (
          <li 
            key={service} 
            className="text-lg text-gray-700 cursor-pointer hover:text-primary hover:font-semibold transition-colors duration-200"
            onClick={() => onServiceItemClick?.(service)}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoSheet;