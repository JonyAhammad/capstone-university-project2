import React from 'react';
export function Vision() {
  return <section id="vision" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600">
              Creating a world where no child goes hungry, powered by community
              action and innovative technology.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-teal-700 mb-6">
              Project Roadmap
            </h3>
            <div className="mb-10">
              <div className="flex items-center mb-3">
                <div className="bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  Phase 1
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Capstone Project (MVP)
                </h4>
              </div>
              <ul className="list-disc pl-12 text-gray-700 space-y-2">
                <li>Core platform development with all primary user roles</li>
                <li>Complete request and fulfillment workflow</li>
                <li>Transparent donation tracking system</li>
                <li>Basic authentication and user management</li>
                <li>Privacy-centric design implementation</li>
                <li>Cloud service deployment</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <div className="bg-gray-600 text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  Phase 2
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Future Extensions
                </h4>
              </div>
              <ul className="list-disc pl-12 text-gray-700 space-y-2">
                <li>Integration of education and medical aid requests</li>
                <li>Advanced AI monitoring for communication</li>
                <li>Expanded payment methods</li>
                <li>Mobile application development</li>
                <li>Dedicated funding portal for ongoing development</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">
              NourishNet will be an open-source platform, continuously improved
              by developers worldwide to create lasting social impact.
            </p>
            <button className="bg-teal-600 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors text-lg">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>;
}