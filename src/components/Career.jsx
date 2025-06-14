import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Users, Award, Star, Calendar } from "lucide-react";
import imag1 from "../images/Financial Mastery_ Steering Success with the VP of Finance.jpg";
const CareerPage = () => {
  const navigate = useNavigate();
  // Job data (normally would come from database)
  const jobsData = [
    {
      id: 1,
      title: "Area Sales Manager",
      department: "Engineering",
      type: "Full Time",
      experience: "5-10 years",
      location: "Mumbai, Maharashtra",
      postedDate: "May 15, 2024",
    },
    {
      id: 2,
      title: "Regional Sales Manager",
      department: "Engineering",
      type: "Part Time",
      experience: "3-5 years",
      location: "Delhi, India",
      postedDate: "May 10, 2024",
    },
    {
      id: 3,
      title: "MR - Experienced",
      department: "Engineering",
      type: "Full Time",
      experience: "2-4 years",
      location: "Bangalore, Karnataka",
      postedDate: "May 8, 2024",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Senior Sales Manager",
      text: "A terrific piece of praise",
      rating: 5,
    },
    {
      name: "Mike Chen",
      position: "Regional Manager",
      text: "A fantastic bit of feedback",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      position: "Area Manager",
      text: "A genuinely glowing review",
      rating: 5,
    },
  ];

  const handleJobClick = (jobId) => {
    // Navigate to job detail page with job ID as URL parameter
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}

      {/* Hero Section */}

      <section className="relative overflow-hidden">
        {/* Background Image of the Doctor */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-right"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.QafD3Al3CVIFgLDcH9_MgAHaD6?rs=1&pid=ImgDetMain')", // Replace with your correct path
          }}
        ></div>

        {/* Gradient Overlay on Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-white/80 to-white/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Unleash Your Career Potential
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us to make a meangingful imapact on people's lives around
            </p>
            <button
              onClick={() => navigate("/all-jobs")}
              className="bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            WHY WORK WITH US
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Discover why thousands of professionals choose to build their
            careers with us
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-[#F9F3E4] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#D19D9C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Collaborative Culture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work alongside passionate professionals in a supportive
                environment that values every voice. Career Growth: Accelerate
                your career with mentorship programs, skill development, and
                leadership opportunities.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#F9F3E4] to-blue-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#D19D9C]  rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Career Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Accelerate your career with mentorship programs, skill
                development, and leadership opportunities that help you reach
                your full potential.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#F9F3E4] to-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#D19D9C]  rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Global Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Make a difference on a global scale with projects that shape the
                future of healthcare. Innovative First: Be at the forefront of
                technology and innovation with access to cutting-edge tools and
                research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Current Openings
              </h2>
              <p className="text-gray-600">
                Find your perfect role and join our growing team
              </p>
            </div>
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full border">
              Showing 3 of 10 Jobs
            </div>
          </div>

          <div className="space-y-6">
            {jobsData.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-full">
                          <Calendar className="w-4 h-4" />
                          Posting Date: {job.postedDate}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-[#F9F3E4] text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                          Department: {job.department}
                        </span>
                        <span className="bg-[#F9F3E4] text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                          Type: {job.type}
                        </span>
                        <span className="bg-[#F9F3E4] text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                          Experience: {job.experience}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleJobClick(job.id)}
                      className="ml-6 bg-[#CD8855] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#B6794C] transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
                    >
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/all-jobs")}
              className="bg-[#CD8855] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B6794C] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Job Postings
            </button>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            EMPLOYEE TESTIMONIALS
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Hear what our team members have to say about their experience
            working with us
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F9F3E4] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#D19D9C] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default CareerPage;
