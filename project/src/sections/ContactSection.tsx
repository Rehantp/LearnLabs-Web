import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-blue-200 text-lg">
            Interested in learning more about our research or exploring
            potential collaborations? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-blue-800 p-6 rounded-2xl shadow-lg flex flex-col items-start">
            <MapPin className="w-8 h-8 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-blue-200 leading-relaxed">
              Department of Computer Science
              <br />
              Sri Lanka Institute of Information Technology
              <br />
              New Kandy Road, Malabe
              <br />
              Sri Lanka
            </p>
          </div>

          <div className="bg-blue-800 p-6 rounded-2xl shadow-lg flex flex-col items-start">
            <Mail className="w-8 h-8 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-blue-200 leading-relaxed">
              learnlabs@gmail.com
              <br />
              harish.sliit@gmail.com
              <br />
              rehanthamudithaperera@gmail.com
            </p>
          </div>

          <div className="bg-blue-800 p-6 rounded-2xl shadow-lg flex flex-col items-start">
            <Phone className="w-8 h-8 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-blue-200 leading-relaxed">
              +94 71 0766 098
              <br />
              +94 77 3320 376
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
