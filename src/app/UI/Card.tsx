import React from "react";

// Define the props interface
interface CardProps {
  title: string;
  description?: string;
  icon: React.ReactNode; // For JSX elements like react-icons
  width?: string; // Optional width prop
  onClick?: () => void; // Optional onClick handler
  selected?: boolean; 
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  width = "w-42", // Default width if not provided
  onClick,
  selected = false, // Default to not selected
}) => {
  return (
    <div className={width}>
      <div
        className={`${
          selected ? "bg-primary/70 shadow-md" : "bg-primary"
        } text-white rounded-lg p-6 cursor-pointer transition-colors duration-200`}
        onClick={onClick}
      >
        <div className="flex items-center justify-center mb-3 text-3xl">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
        {description && (
          <p className="text-sm text-center mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;