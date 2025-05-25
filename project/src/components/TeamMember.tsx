import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:scale-105">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-95 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-blue-200">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;