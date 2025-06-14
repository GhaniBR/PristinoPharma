import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Users,
  Calendar,
  MapPin,
  Clock,
  Search,
  Filter,
  Briefcase,
  Star,
  Heart,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";

const AllJobsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Extended job data
  const allJobsData = [
    {
      id: 1,
      title: "Area Sales Manager",
      department: "Sales & Marketing",
      type: "Full Time",
      experience: "5-10 years",
      location: "Mumbai, Maharashtra",
      postedDate: "May 15, 2024",
      salary: "₹8-12 LPA",
      urgent: true,
      description:
        "Lead sales operations in assigned territory and manage client relationships.",
    },
    {
      id: 2,
      title: "Regional Sales Manager",
      department: "Sales & Marketing",
      type: "Full Time",
      experience: "3-5 years",
      location: "Delhi, India",
      postedDate: "May 10, 2024",
      salary: "₹6-10 LPA",
      urgent: false,
      description:
        "Oversee regional sales activities and develop strategic partnerships.",
    },
    {
      id: 3,
      title: "MR - Experienced",
      department: "Sales & Marketing",
      type: "Full Time",
      experience: "2-4 years",
      location: "Bangalore, Karnataka",
      postedDate: "May 8, 2024",
      salary: "₹4-6 LPA",
      urgent: false,
      description:
        "Medical representative role focusing on healthcare professionals engagement.",
    },
    {
      id: 4,
      title: "Quality Control Analyst",
      department: "Quality Assurance",
      type: "Full Time",
      experience: "2-5 years",
      location: "Pune, Maharashtra",
      postedDate: "May 12, 2024",
      salary: "₹5-8 LPA",
      urgent: true,
      description:
        "Ensure product quality through comprehensive testing and analysis.",
    },
    {
      id: 5,
      title: "Research & Development Scientist",
      department: "R&D",
      type: "Full Time",
      experience: "3-7 years",
      location: "Hyderabad, Telangana",
      postedDate: "May 14, 2024",
      salary: "₹7-12 LPA",
      urgent: false,
      description:
        "Lead innovative pharmaceutical research and drug development projects.",
    },
    {
      id: 6,
      title: "Production Supervisor",
      department: "Manufacturing",
      type: "Full Time",
      experience: "4-8 years",
      location: "Chennai, Tamil Nadu",
      postedDate: "May 13, 2024",
      salary: "₹6-9 LPA",
      urgent: false,
      description:
        "Oversee manufacturing operations and ensure production efficiency.",
    },
    {
      id: 7,
      title: "Regulatory Affairs Manager",
      department: "Regulatory",
      type: "Full Time",
      experience: "5-10 years",
      location: "Mumbai, Maharashtra",
      postedDate: "May 11, 2024",
      salary: "₹9-15 LPA",
      urgent: true,
      description: "Manage regulatory compliance and submission processes.",
    },
    {
      id: 8,
      title: "Clinical Research Associate",
      department: "Clinical Research",
      type: "Full Time",
      experience: "2-5 years",
      location: "Bangalore, Karnataka",
      postedDate: "May 9, 2024",
      salary: "₹5-8 LPA",
      urgent: false,
      description: "Monitor clinical trials and ensure protocol compliance.",
    },
    {
      id: 9,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full Time",
      experience: "2-4 years",
      location: "Gurgaon, Haryana",
      postedDate: "May 7, 2024",
      salary: "₹4-7 LPA",
      urgent: false,
      description:
        "Develop and execute digital marketing strategies for pharmaceutical products.",
    },
    {
      id: 10,
      title: "Pharmacovigilance Officer",
      department: "Safety",
      type: "Full Time",
      experience: "3-6 years",
      location: "Mumbai, Maharashtra",
      postedDate: "May 6, 2024",
      salary: "₹6-10 LPA",
      urgent: false,
      description: "Monitor drug safety and manage adverse event reporting.",
    },
  ];

  const departments = [
    "All",
    "Sales & Marketing",
    "Quality Assurance",
    "R&D",
    "Manufacturing",
    "Regulatory",
    "Clinical Research",
    "Marketing",
    "Safety",
  ];
  const jobTypes = ["All", "Full Time", "Part Time", "Contract", "Internship"];
  const locations = [
    "All",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Gurgaon",
  ];

  // Filter jobs based on search and filters
  const filteredJobs = allJobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesLocation =
      selectedLocation === "All" || job.location.includes(selectedLocation);

    return matchesSearch && matchesDepartment && matchesType && matchesLocation;
  });

  const handleJobClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  const handleGoBack = () => {
    navigate("/career");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-pink-800 via-pink-700 to-pink-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Job
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Explore all available positions and take the next step in your
              pharmaceutical career
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>{allJobsData.length} Open Positions</span>
              </div>

              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Growing Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Search className="w-6 h-6 mr-2 text-pink-600" />
              Search & Filter Jobs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              {/* Job Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* Location Filter */}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-pink-600">
                  {filteredJobs.length}
                </span>{" "}
                of {allJobsData.length} jobs
              </div>
              {/*<button className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
                <Filter className="w-4 h-4 mr-1" />
                Advanced Filters
              </button>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 mr-4">
                          {job.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-full text-sm">
                          <Calendar className="w-4 h-4" />
                          Posted: {job.postedDate}
                        </span>

                        <span className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-full text-sm">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <span className="bg-[#F9F3E4] text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                        <span className="bg-[#F9F3E4] text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                        <span className="bg-[#F9F3E4] text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    <div className="ml-6 flex flex-col space-y-3">
                      <button
                        onClick={() => handleJobClick(job.id)}
                        className="bg-[#CD8855] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#B6794C] transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
                      >
                        View Details <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="border-2 border-[#CD8855] text-[#CD8855] px-6 py-3 rounded-lg font-semibold hover:bg-[#CD8855] hover:text-white transition-all duration-300">
                        Quick Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Jobs Found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find more
                opportunities.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("All");
                  setSelectedType("All");
                  setSelectedLocation("All");
                }}
                className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us Section 
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pristino Pharma?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that values innovation, growth, and making a
              positive impact on global healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Fast-track your career with mentorship and leadership
                opportunities
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                Work with industry-leading standards and cutting-edge technology
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Global Impact
              </h3>
              <p className="text-gray-600">
                Make a difference in healthcare on a global scale
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                Enjoy flexible work arrangements and comprehensive benefits
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process designed to find the perfect match between
              candidates and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                desc: "Submit your application through our portal",
              },
              {
                step: "02",
                title: "Initial Screening",
                desc: "HR review and preliminary assessment",
              },
              {
                step: "03",
                title: "Interview Process",
                desc: "Meet with hiring managers and team leads",
              },
              {
                step: "04",
                title: "Final Decision",
                desc: "Offer and onboarding process begins",
              },
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-[#D19D9C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {process.step}
                  </span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-200 to-purple-200 transform translate-x-8"></div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D19D9C]to-purple-600 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't see the perfect role? Send us your resume and we'll keep you
            in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Submit General Application
            </button>
            {/*<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">
              Join Talent Network
            </button>*/}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default AllJobsPage;
