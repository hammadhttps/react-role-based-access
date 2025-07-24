/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Globe, Home, Navigation, Shield, Users } from "lucide-react";
import React from "react";

 const GuestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Globe className="h-8 w-8 mr-3 text-blue-600" />
            Guest Area
          </h1>
          <p className="text-gray-600 mt-2">Welcome! Explore our public content and resources</p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white p-8 mb-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Welcome to Our Platform
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Discover amazing features and content available to all users. Join our community to unlock even more possibilities.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Public Resources</h3>
            <p className="text-gray-600 mb-4">
              Access our comprehensive library of public resources, tutorials, and documentation.
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-700">
              Explore Resources →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 mb-4">
              Join our vibrant community of users sharing knowledge and experiences.
            </p>
            <button className="text-green-600 font-medium hover:text-green-700">
              Join Community →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Started</h3>
            <p className="text-gray-600 mb-4">
              Ready to unlock more features? Create an account to access premium content.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700">
              Sign Up →
            </button>
          </div>
        </div>

        {/* Latest News/Updates */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest Updates</h2>
          <div className="space-y-6">
            <article className="flex space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Platform Update v2.0</h3>
                <p className="text-gray-600 text-sm mb-2">
                  We've introduced new features including enhanced security, improved performance, and a refreshed user interface.
                </p>
                <span className="text-xs text-gray-500">July 20, 2024</span>
              </div>
            </article>

            <article className="flex space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Community Milestone</h3>
                <p className="text-gray-600 text-sm mb-2">
                  We're excited to announce that our community has reached 10,000 active users! Thank you for being part of our journey.
                </p>
                <span className="text-xs text-gray-500">July 15, 2024</span>
              </div>
            </article>

            <article className="flex space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">New Resources Available</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Check out our latest collection of tutorials, guides, and best practices now available in the public resources section.
                </p>
                <span className="text-xs text-gray-500">July 10, 2024</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;