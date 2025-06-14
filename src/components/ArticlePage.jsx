import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ArticlePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedBlog = location.state?.blog;

  if (!selectedBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">No article data found.</p>
      </div>
    );
  }

  const handleBackToHome = () => {
    navigate("/blogs"); // or "/blog" depending on your route
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8">
        <button
          onClick={handleBackToHome}
          className="text-pink-800 text-base sm:text-lg cursor-pointer py-2 px-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          ← Back to Blogs
        </button>
      </div>
      {/* Article Hero Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-yellow-600 text-sm font-bold uppercase tracking-widest mb-4">
            {selectedBlog.category}
          </div>

          <h1 className="text-gray-800 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-5 max-w-4xl">
            {selectedBlog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-gray-500 text-sm sm:text-base mb-6 sm:mb-8">
            <span>By Deepak Shivaji</span>
            <span className="hidden sm:inline">•</span>
            <span>{selectedBlog.date}</span>
            <span className="hidden sm:inline">•</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        {/* Featured Image */}
        <div className="mb-10 sm:mb-12 lg:mb-16 rounded-xl overflow-hidden shadow-2xl">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Article Introduction */}
        <div className="text-base sm:text-lg leading-relaxed text-gray-800 mb-8 sm:mb-10 lg:mb-12 p-6 sm:p-8 bg-gray-50 rounded-xl border-l-4 sm:border-l-8 border-pink-800">
          {selectedBlog.excerpt}
        </div>

        {/* Article Sections */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          {selectedBlog.content.sections.map((section, index) => (
            <div key={index} className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-pink-800 text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 border-b-2 border-gray-100 pb-2 sm:pb-3">
                {section.title}
              </h2>

              <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-sm">
                <ul className="pl-0 list-none m-0">
                  {section.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 pl-6 sm:pl-8 relative"
                    >
                      <span className="absolute left-0 top-0 text-yellow-600 font-bold text-lg">
                        •
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-pink-800 text-white p-8 sm:p-10 lg:p-12 rounded-xl mb-10 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 text-white">
            Conclusion
          </h3>
          <p className="text-base sm:text-lg leading-relaxed m-0 text-white">
            {selectedBlog.content.conclusion}
          </p>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-50 p-6 sm:p-8 lg:p-10 rounded-xl mb-10 sm:mb-12 lg:mb-16">
          <h3 className="text-gray-800 text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
            Join the Discussion
          </h3>

          <div className="mb-5 sm:mb-6">
            <textarea
              placeholder="Share your thoughts and experiences..."
              className="w-full min-h-32 p-4 sm:p-5 border-2 border-gray-200 rounded-xl text-base resize-y font-sans transition-colors duration-300 focus:border-pink-800 focus:outline-none"
            />
          </div>

          <button className="bg-yellow-600 hover:bg-pink-800 text-white border-none py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base font-bold cursor-pointer uppercase tracking-wider transition-colors duration-300">
            Post Comment
          </button>
        </div>

        {/* Back to Blog Button */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button
            onClick={handleBackToHome}
            className="bg-pink-800 hover:bg-yellow-600 text-white border-none py-3 sm:py-4 px-8 sm:px-10 rounded-full text-sm sm:text-base font-bold cursor-pointer uppercase tracking-wider transition-colors duration-300"
          >
            ← Back to All Blogs
          </button>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;
