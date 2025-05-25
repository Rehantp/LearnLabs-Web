import React from "react";
import img from "../assets/testing.jpg";
import img2 from "../assets/testing2.jpg";
import img3 from "../assets/testing3.jpg";
import img4 from "../assets/testing4.jpg";
import SectionTitle from "../components/SectionTitle";

const ResearchSection: React.FC = () => {
  return (
    <section
      id="research"
      className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Research"
          subtitle="Investigating the Role of Generative AI in Enhancing Interactive Learning Experiences"
          light
        />

        <div className="mt-16 space-y-16">
          {/* Research Component 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Active Learning Component
              </h3>
              <p className="text-blue-100 mb-4">
                Our system integrates embedded quizzes and real-time adaptive
                difficulty to improve engagement and comprehension. The
                ELO-inspired algorithm personalizes quiz difficulty based on
                student performance, while maintaining structured progression
                through lecture content.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    75% of participants found interactive elements more engaging
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    74% reported better comprehension of complex concepts
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    75% of students preferred this over traditional methods
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-1 opacity-75" />
                <div className="relative bg-gray-800 p-6 rounded-lg">
                  <div className="h-64 flex items-center justify-center">
                    <img
                      src={img}
                      alt="Active learning visualization"
                      className="max-h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Component 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform -rotate-1 opacity-75" />
                <div className="relative bg-gray-800 p-6 rounded-lg">
                  <div className="h-64 flex items-center justify-center">
                    <img
                      src={img3}
                      alt="Doubt clarification visualization"
                      className="max-h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Doubt Clarification Component
              </h3>
              <p className="text-blue-100 mb-4">
                Using Retrieval Augmented Generation (RAG), our system provides
                accurate, context-aware doubt resolution with timestamped
                explanations. The fine-tuned LLM retrieves relevant lecture
                segments to generate precise answers to student queries.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    74% of students reported higher satisfaction
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    73% perceived improved conceptual understanding
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    Clear timestamped explanations valued by 64% of users
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Component 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Collaborative Summarization
              </h3>
              <p className="text-blue-100 mb-4">
                Our system reinforces learning through peer discussion and
                AI-driven evaluation. Students work in groups to create
                summaries, which are then evaluated by LLMs for relevance and
                accuracy, with personalized feedback provided.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    75% reported increased engagement through peer discussions
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    74% experienced enhanced comprehension
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    AI feedback was beneficial for 75% of students
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg transform rotate-1 opacity-75" />
                <div className="relative bg-gray-800 p-6 rounded-lg">
                  <div className="h-64 flex items-center justify-center">
                    <img
                      src={img2}
                      alt="Collaborative summarization"
                      className="max-h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Component 4 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg transform -rotate-1 opacity-75" />
                <div className="relative bg-gray-800 p-6 rounded-lg">
                  <div className="h-64 flex items-center justify-center">
                    <img
                      src={img4}
                      alt="IntelliNote component"
                      className="max-h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                IntelliNote Component
              </h3>
              <p className="text-blue-100 mb-4">
                Our AI-powered note-taking system provides generative
                summarization, personalized adaptation, and context-aware
                assistance. It outperforms traditional handwritten notes in
                efficiency, engagement, and accessibility.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    74% found IntelliNote very effective for information
                    retrieval
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    75% reported higher engagement compared to traditional notes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <p className="text-blue-100">
                    73% experienced faster revision and better retention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
