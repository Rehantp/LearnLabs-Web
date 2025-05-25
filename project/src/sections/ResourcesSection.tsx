import React from "react";
import ResourceCard from "../components/ResourceCard";
import SectionTitle from "../components/SectionTitle";

const ResourcesSection: React.FC = () => {
  const sharedDriveUrl =
    "https://drive.google.com/drive/folders/18I4ifUP-tT9RHxCh86VpCt7Uyh4dF8hw?usp=sharing";

  const resources = [
    {
      title: "Phase 1 Findings",
      description:
        "Overview of proposed methodologies and initial findings from Phase 1 of our research.",
      downloadUrl: sharedDriveUrl,
      fileType: "ppt",
    },
    {
      title: "Mid-Project Presentation",
      description:
        "Overview of progress, challenges, and achievements at the project midpoint.",
      downloadUrl: sharedDriveUrl,
      fileType: "ppt",
    },
    {
      title: "Final Summary",
      description:
        "Final summary presentation of the research outcomes and implementation impact.",
      downloadUrl: sharedDriveUrl,
      fileType: "ppt",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Project Resources"
          subtitle="Access and download research documents, presentations, and publications related to our AI education platform."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              downloadUrl={resource.downloadUrl}
              fileType={resource.fileType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
