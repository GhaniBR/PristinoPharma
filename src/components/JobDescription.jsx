import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Users,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const JobDetailPage = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const handleBackToAllJobs = () => {
    navigate("/all-jobs"); // or "/blog" depending on your route
  };
  // Sample job data (normally would come from props or API)
  const jobData = {
    id: jobId || 1,
    title: "Technical Expert",
    department: "Engineering",
    type: "Full Time",
    experience: "5-10 years",
    location: "Mumbai, Maharashtra",
    postedDate: "May 15, 2024",
    description: `Are you passionate about technology and eager to make a significant impact in the pharmaceutical industry? We are seeking a dynamic Technical Expert to join our innovative team and drive technological excellence across our organization.

Position Overview:
As a Technical Expert, you will be responsible for providing technical leadership, driving innovation, and ensuring the highest standards of technical excellence in our pharmaceutical operations. You will work closely with cross-functional teams to develop and implement cutting-edge solutions that enhance our product development and manufacturing processes.

Key Responsibilities:
• Lead technical initiatives and provide expert guidance on complex technical challenges
• Collaborate with R&D teams to develop innovative pharmaceutical solutions and processes
• Ensure compliance with industry regulations and quality standards (FDA, GMP, ICH guidelines)
• Conduct technical assessments and provide recommendations for process improvements
• Mentor junior technical staff and contribute to their professional development
• Interface with external partners, vendors, and regulatory agencies as needed
• Stay current with emerging technologies and industry trends in pharmaceutical sciences
• Participate in cross-functional project teams and provide technical expertise
• Develop and maintain technical documentation, SOPs, and training materials
• Support technology transfer activities and scale-up processes

Required Qualifications:
• Advanced degree in Chemical Engineering, Pharmaceutical Sciences, or related technical field
• 5-10 years of progressive experience in pharmaceutical or biotechnology industry
• Deep understanding of pharmaceutical manufacturing processes and quality systems
• Experience with regulatory compliance (FDA, EMA, ICH guidelines)
• Strong analytical and problem-solving skills with attention to detail
• Excellent communication and leadership abilities
• Proficiency in technical software and data analysis tools
• Project management experience preferred

What We Offer:
• Competitive salary with performance-based bonuses
• Comprehensive benefits package including health, dental, and vision insurance
• Retirement savings plan with company matching
• Professional development opportunities and continuing education support
• Flexible work arrangements and work-life balance initiatives
• State-of-the-art facilities and cutting-edge technology
• Opportunity to work on innovative products that improve patient lives`,
    requirements: [
      "Advanced degree in Chemical Engineering, Pharmaceutical Sciences, or related field",
      "5-10 years of progressive pharmaceutical industry experience",
      "Deep understanding of pharmaceutical manufacturing and quality systems",
      "Experience with FDA, EMA, and ICH regulatory guidelines",
      "Strong analytical and problem-solving capabilities",
      "Excellent communication and leadership skills",
      "Proficiency in technical software and data analysis tools",
      "Project management experience preferred",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health insurance coverage",
      "Professional development opportunities",
      "Flexible work arrangements",
      "State-of-the-art facilities and technology",
      "Retirement savings with company matching",
    ],
  };

  const handleBackClick = () => {
    // Navigate back to the career/jobs listing page
    navigate("/careers");
  };

  const handleApplyClick = () => {
    navigate(`/jobs/${jobId}/apply`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={handleBackToAllJobs}
          className="flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border p-8">
              {/* Job Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  {jobData.title}
                </h1>

                {/* Job Meta Information */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-pink-700" />
                    <span className="font-medium">Location:</span>
                    <span>{jobData.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-pink-700" />
                    <span className="font-medium">Posted:</span>
                    <span>{jobData.postedDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Briefcase className="w-5 h-5 text-pink-700" />
                    <span className="font-medium">Department:</span>
                    <span>{jobData.department}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-pink-700" />
                    <span className="font-medium">Type:</span>
                    <span>{jobData.type}</span>
                  </div>
                </div>

                {/* Job Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-[#F9F3E4] text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                    {jobData.department}
                  </span>
                  <span className="bg-[#F9F3E4] text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                    {jobData.type}
                  </span>
                  <span className="bg-[#F9F3E4] text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                    {jobData.experience}
                  </span>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Job Description
                </h2>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <div className="whitespace-pre-line">
                    {jobData.description}
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Requirements
                </h3>
                <div className="space-y-3">
                  {jobData.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h3>
                <div className="space-y-3">
                  {jobData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border p-8 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Job Summary
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Experience:</span>
                  <span className="text-gray-900">{jobData.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Job Type:</span>
                  <span className="text-gray-900">{jobData.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Department:</span>
                  <span className="text-gray-900">{jobData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Location:</span>
                  <span className="text-gray-900">
                    {jobData.location.split(",")[0]}
                  </span>
                </div>
              </div>

              <button
                onClick={handleApplyClick}
                className="w-full bg-[#CD8855] text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
              >
                Apply Now
              </button>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Share this job
                </h4>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                    LinkedIn
                  </button>
                  <button className="flex-1 bg-blue-400 text-white py-2 px-3 rounded text-sm hover:bg-blue-500 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors">
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default JobDetailPage;
