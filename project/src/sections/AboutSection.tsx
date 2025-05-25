import { Bot, Brain, Group, Lightbulb, Notebook } from "lucide-react";
import React from "react";
import conferenceLogo from "../assets/icecet2025.jpg"; // Update path as needed
import SectionTitle from "../components/SectionTitle";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Active Learning Component",
      description:
        "This module enables AI-assisted question generation from lecture content, segmenting videos to create personalized quizzes with varying difficulty, while an adaptive ELO-style algorithm adjusts questions based on student performance.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Doubt Clarification Component",
      description:
        "Using Retrieval-Augmented Generation (RAG), the system answers student queries in real time. Lecture transcripts are broken into semantically indexed chunks, allowing fast, accurate responses that match the content.",
    },
    {
      icon: <Group className="w-8 h-8 text-blue-600" />,
      title: "Collaborative Summarization Component",
      description:
        "After lectures, students join peer groups to discuss and submit summaries. An AI model evaluates individual inputs and generates a combined summary, promoting peer learning and insight generation.",
    },
    {
      icon: <Notebook className="w-8 h-8 text-blue-600" />,
      title: "IntelliNote Component",
      description:
        "IntelliNote provides AI-powered note-taking from lecture PDFs. It extracts text, chunks it, and uses semantic search for Q&A. Features include automatic flashcards, grammar correction, and collaborative tools backed by fine-tuned LLMs trained on real academic data.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <SectionTitle
          title="About Learn Labs"
          subtitle="Pioneering adaptive AI in education through research-driven solutions and intelligent tools."
        />

        {/* Introduction */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Revolutionizing Education Through AI
            </h3>
            <p className="text-gray-600 mb-6">
              Learn Labs is an innovation-driven research group transforming the
              future of education using cutting-edge AI. We build intelligent,
              adaptable tools that make learning more personalized and engaging.
            </p>
            <p className="text-gray-600">
              Our work spans content creation, real-time interaction, student
              analytics, and collaboration support empowering both learners and
              educators.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Bot className="w-24 h-24 text-purple-900" />
          </div>
        </div>

        {/* AI Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Conference Recognition */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Conference Recognition
          </h2>
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <img
              src={conferenceLogo}
              alt="ICECET Conference Logo"
              className="w-90 h-auto mb-6"
            />
            <p className="text-gray-700 text-lg mb-4">
              We are proud to announce that our research has been accepted at
              the prestigious{" "}
              <span className="font-semibold text-blue-700">
                ICECET Conference
              </span>
              , which highlights advances in Electronics, Computer Engineering,
              and Energy Technologies.
            </p>
            <p className="text-gray-700 text-lg">
              Our accepted paper introduces innovative methods for AI-powered
              adaptive learning and its real-world impact on education outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
