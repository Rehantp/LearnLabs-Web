import React from 'react';
import { FileDown } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  downloadUrl: string;
  fileType: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  downloadUrl, 
  fileType 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 font-medium">
            {fileType.toUpperCase()}
          </span>
          
          <a
            href={downloadUrl}
            download
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Download</span>
            <FileDown className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <div className={`h-1 w-full ${
        fileType === 'pdf' ? 'bg-red-500' : 
        fileType === 'ppt' ? 'bg-orange-500' : 
        fileType === 'doc' ? 'bg-blue-500' : 
        'bg-green-500'
      }`} />
    </div>
  );
};

export default ResourceCard;