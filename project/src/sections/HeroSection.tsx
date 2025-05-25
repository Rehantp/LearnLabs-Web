import {
  BookText,
  Brain,
  Code,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Sparkles className="w-24 h-24 text-white" />
        </div>
        <div className="absolute top-2/3 left-1/3 animate-pulse animation-delay-500">
          <Brain className="w-20 h-20 text-white" />
        </div>
        <div className="absolute top-1/3 left-2/3 animate-pulse animation-delay-1000">
          <GraduationCap className="w-16 h-16 text-white" />
        </div>

        {/* Unique additional icons */}
        <div className="absolute bottom-1/4 right-1/3 animate-pulse animation-delay-1200">
          <Code className="w-14 h-14 text-indigo-300" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-ping animation-delay-300">
          <Lightbulb className="w-12 h-12 text-yellow-200" />
        </div>
        <div className="absolute top-16 left-1/6 animate-pulse animation-delay-800">
          <BookText className="w-12 h-12 text-blue-200" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse animation-delay-600">
          <MessageCircle className="w-10 h-10 text-purple-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block">Transform Education with</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">
            AI-Powered Learn Labs
          </span>
        </h1>

        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Learn Labs is revolutionizing educational experiences through advanced
          AI technologies that adapt to individual learning styles and needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-white text-blue-700 hover:bg-blue-50 font-medium rounded-lg px-6 py-3 transition-colors duration-300"
          >
            Discover Our Research
          </a>
          <a
            href="#resources"
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-medium rounded-lg px-6 py-3 transition-colors duration-300"
          >
            View Resources
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
