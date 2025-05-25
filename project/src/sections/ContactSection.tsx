import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-blue-200 mb-8">
              Interested in learning more about our research or exploring
              potential collaborations? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-300 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-1">Visit Us</h3>
                  <p className="text-blue-200">
                    Department of Computer Science
                    <br />
                    Sri Lanka Institute of Information Technology
                    <br />
                    New Kandy Road, Malabe
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-300 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-1">Email Us</h3>
                  <p className="text-blue-200">
                    learnlabs@gmail.com
                    <br />
                    harish.sliit@gmail.com
                    <br />
                    rehanthamudithaperera@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-300 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-1">Call Us</h3>
                  <p className="text-blue-200">
                    +94 71 0766 098
                    <br />
                    +94 77 3320 376
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
