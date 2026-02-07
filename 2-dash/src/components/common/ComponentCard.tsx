import React from "react";

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        {/* card body */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
