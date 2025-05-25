import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ResearchSection from "./sections/ResearchSection";
import ResourcesSection from "./sections/ResourcesSection";
import TeamSection from "./sections/TeamSection";

function App() {
  useEffect(() => {
    // Set page title
    document.title = "Learn Labs";

    // Dynamically add favicon (for Vite, CRA, etc.)
    const favicon = document.createElement("link");
    favicon.rel = "icon";

    favicon.href = "https://img.icons8.com/ios-filled/50/ffffff/robot-2.png";

    document.head.appendChild(favicon);

    // Add custom animation delay utility classes
    const style = document.createElement("style");
    style.innerHTML = `
      .animation-delay-500 {
        animation-delay: 500ms;
      }
      .animation-delay-1000 {
        animation-delay: 1000ms;
      }
      .animation-delay-1500 {
        animation-delay: 1500ms;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(favicon);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <TeamSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
