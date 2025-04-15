
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 bg-gray-200 rounded-3xl shadow-sm">
      <div className="mb-4 text-torrex-primary">
        <Icon size={36} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-torrex-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
