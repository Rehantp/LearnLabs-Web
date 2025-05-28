import React from "react";
import img5 from "../assets/drdarshana.jpg";
import img1 from "../assets/hariniimg.jpg";
import img2 from "../assets/harishimg.jpg";
import img6 from "../assets/mrsrivoini.png";
import img4 from "../assets/pathumimg.jpg";
import img3 from "../assets/rehanimg.jpg";
import SectionTitle from "../components/SectionTitle";
import TeamMember from "../components/TeamMember";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Dharshana Kasthurirathna",
      role: "Assistant Professor (Supervisor)",
      imageUrl: img5,
    },
    {
      name: "Mrs. Rivoi Poojima",
      role: "Assistant Lecturer        (Co-Supervisor)",
      imageUrl: img6,
    },
    {
      name: "Harish Balakrishnar",
      role: "Software Engineering Student",
      imageUrl: img2,
    },
    {
      name: "Rehan Perera",
      role: "Software Engineering Student",
      imageUrl: img3,
    },
    {
      name: "Harini Kumbukgolla",
      role: "Software Engineering Student",
      imageUrl: img1,
    },
    {
      name: "Pathum Dissanayake",
      role: "Software Engineering Student",
      imageUrl: img4,
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Research Team"
          subtitle="Meet the interdisciplinary Team behind Learn Labs' groundbreaking research in AI-powered education."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
