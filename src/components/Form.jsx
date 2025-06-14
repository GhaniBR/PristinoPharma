import React, { useState } from "react";
import {
  ArrowLeft,
  Upload,
  User,
  Mail,
  Phone,
  Calendar,
  FileText,
  CheckCircle,
} from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNo: "",
    contactPreference: "",
    resume: null,
    coverLetter: "",
    experience: "",
    availability: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleBackClick = () => {
    alert("Navigate back to job detail page");
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, phoneNo } = formData;
    if (!firstName || !lastName || !email || !phoneNo) {
      alert("Please fill in all required fields");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      alert("Application submitted successfully!");
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4e9da] px-4">
        <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-600 w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-4">
            We'll review your details and get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#9f3266] text-white px-6 py-2 rounded-md hover:bg-[#812856] transition"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4e9da] flex flex-col lg:flex-row">
      {/* Left Pane */}
      <div className="lg:w-1/3 w-full bg-[#e5cdd4] p-10 flex flex-col justify-center text-[#2b1b17]">
        <h2 className="text-2xl font-bold mb-4">Job Application</h2>
        <p className="text-md leading-relaxed">
          Are you ready to take your career to the next level? Join our company,
          where your ideas matter and your growth is our priority. Be part of a
          dynamic team that values creativity and collaboration. Together, we
          can achieve amazing things and make a real impact!
        </p>
      </div>

      {/* Right Pane */}
      <div className="lg:w-2/3 w-full p-6 lg:p-12 bg-white">
        <div className="flex items-center mb-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-[#2b1b17] hover:text-[#9f3266] transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Job Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17]">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
              placeholder="Enter first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17]">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
              placeholder="Enter last name"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17] flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17] flex items-center gap-1">
              <Mail className="w-4 h-4" /> Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
              placeholder="Enter email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17] flex items-center gap-1">
              <Phone className="w-4 h-4" /> Phone Number *
            </label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
              placeholder="Enter phone number"
            />
          </div>

          {/* Contact Preference */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17]">
              Contact Preference
            </label>
            <select
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
            >
              <option value="">Select</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17]">
              Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
            >
              <option value="">Select</option>
              <option value="0-1">0-1 years</option>
              <option value="2-3">2-3 years</option>
              <option value="4-5">4-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="text-sm font-medium text-[#2b1b17]">
              Availability
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
            >
              <option value="">Select</option>
              <option value="immediate">Immediate</option>
              <option value="2weeks">2 weeks notice</option>
              <option value="1month">1 month notice</option>
              <option value="negotiable">Negotiable</option>
            </select>
          </div>

          {/* Cover Letter */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-[#2b1b17]">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={4}
              placeholder="Write here..."
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9f3266] resize-none"
            />
          </div>

          {/* Resume Upload */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-[#2b1b17] flex items-center gap-1">
              <Upload className="w-4 h-4" /> Resume Upload
            </label>
            <input
              type="file"
              id="resume-upload"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx"
              className="mt-2 w-full border border-dashed px-4 py-4 rounded-md bg-[#fefefe] focus:outline-none focus:ring-2 focus:ring-[#9f3266]"
            />
            <p className="text-sm text-gray-500 mt-1">
              {formData.resume ? formData.resume.name : "Upload PDF/DOC file"}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={handleBackClick}
            className="px-6 py-2 border text-[#2b1b17] border-gray-400 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#9f3266] text-white rounded-md hover:bg-[#812856] transition"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
