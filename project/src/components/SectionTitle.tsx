import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  light = false 
}) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-gray-800'
      }`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`max-w-2xl mx-auto ${
          light ? 'text-blue-100' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
      
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
    </div>
  );
};

export default SectionTitle;