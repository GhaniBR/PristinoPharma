import React, { useState } from "react";

const PharmaTeamPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Chief Scientific Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face",
      experience: "22 years in pharmaceutical research",
      qualifications: "Dr. Mitchell holds a PhD in Biochemistry from Harvard University and maintains board certification in Clinical Research. Her academic foundation provides the scientific rigor essential for leading cutting-edge pharmaceutical research initiatives.",
      keyRoles: "As Chief Scientific Officer, Dr. Mitchell spearheads our oncology therapeutics research programs, ensuring that each project meets the highest standards of scientific excellence. She oversees our comprehensive drug discovery and development pipeline, from initial compound identification through preclinical testing.",
      primaryColor: "pink",
      accentColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-300",
      textColor: "text-pink-700",
      dotColor: "bg-pink-500",
      buttonColor: "bg-pink-600 hover:bg-pink-700"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Head of Drug Development",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop&crop=face",
      experience: "18 years in clinical trials and regulatory affairs",
      qualifications: "Dr. Chen earned his MD/PhD from Johns Hopkins University and is board certified in Internal Medicine. This unique combination of clinical practice and research expertise enables him to bridge the gap between laboratory discoveries and real-world patient applications.",
      keyRoles: "Dr. Chen oversees the entire spectrum of clinical trial operations, managing Phase I through Phase III studies with meticulous attention to patient safety and data integrity. He coordinates regulatory submissions and approvals across multiple international markets.",
      primaryColor: "orange",
      accentColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-300",
      textColor: "text-orange-700",
      dotColor: "bg-orange-500",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Director of Regulatory Affairs",
      image: "https://images.unsplash.com/photo-1594824694996-f039b59cee77?w=500&h=500&fit=crop&crop=face",
      experience: "15 years in pharmaceutical regulatory compliance",
      qualifications: "Dr. Rodriguez holds a PharmD from the University of California and maintains Regulatory Affairs Certification (RAC). Her specialized training in pharmaceutical sciences and regulatory compliance ensures our products meet the most stringent safety and efficacy standards.",
      keyRoles: "Dr. Rodriguez ensures comprehensive FDA and international regulatory compliance across all our pharmaceutical operations. She manages complex drug approval processes and submissions, coordinating with global regulatory bodies to secure market authorization.",
      primaryColor: "rose",
      accentColor: "bg-gradient-to-br from-rose-50 to-rose-100",
      borderColor: "border-rose-300",
      textColor: "text-rose-700",
      dotColor: "bg-rose-500",
      buttonColor: "bg-rose-600 hover:bg-rose-700"
    },
    {
      id: 4,
      name: "Dr. James Park",
      role: "VP of Manufacturing",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=500&fit=crop&crop=face",
      experience: "20 years in pharmaceutical manufacturing and quality control",
      qualifications: "Dr. Park earned his MS in Chemical Engineering from MIT and holds Six Sigma Black Belt Certification. His engineering background combined with lean manufacturing expertise drives operational excellence across our production facilities.",
      keyRoles: "Dr. Park oversees large-scale pharmaceutical production operations, ensuring efficient and cost-effective manufacturing while maintaining the highest quality standards. He implements Good Manufacturing Practice (GMP) standards and comprehensive quality systems.",
      primaryColor: "amber",
      accentColor: "bg-gradient-to-br from-amber-50 to-amber-100",
      borderColor: "border-amber-300",
      textColor: "text-amber-700",
      dotColor: "bg-amber-500",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    },
    {
      id: 5,
      name: "Dr. Amanda Williams",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=500&h=500&fit=crop&crop=face",
      experience: "19 years in clinical medicine and pharmaceutical development",
      qualifications: "Dr. Williams holds an MD from Stanford Medical School and a Master's in Public Health from Johns Hopkins. She is board certified in Internal Medicine and Clinical Pharmacology, bringing deep clinical expertise to pharmaceutical development processes.",
      keyRoles: "As Chief Medical Officer, Dr. Williams leads our clinical strategy and medical affairs initiatives. She oversees patient safety protocols, clinical trial design, and works closely with healthcare providers to ensure our therapies meet real-world clinical needs and regulatory standards.",
      primaryColor: "blue",
      accentColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-300",
      textColor: "text-blue-700",
      dotColor: "bg-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentMember = teamMembers[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="text-center py-16 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-40 right-1/3 w-48 h-48 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-15 blur-2xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full border border-rose-200 mb-8">
            <div className="w-2 h-2 bg-rose-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-rose-700 font-medium text-sm tracking-wide">PHARMACEUTICAL EXCELLENCE</span>
          </div>
          
          {/* Main Heading with Enhanced Typography */}
          <h1 className="relative">
            <span className="block text-6xl md:text-8xl font-black mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent relative">
                Leadership
                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
              </span>
            </span>
            <span className="block text-6xl md:text-8xl font-black">
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Team
              </span>
            </span>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full opacity-40 animate-pulse"></div>
          </h1>
          
          {/* Enhanced Subtitle */}
          <div className="mt-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Meet our <span className="font-semibold text-gray-800">distinguished pharmaceutical professionals</span> driving 
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-semibold"> innovation</span> and 
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-semibold"> excellence</span> in drug development across the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Main Slider Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="relative">
          {/* Main Card Display */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              
              {/* Left Side - Image and Basic Info */}
              <div className={`${currentMember.accentColor} p-10 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-20 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <img
                      src={currentMember.image}
                      alt={currentMember.name}
                      className="w-40 h-40 rounded-full object-cover border-6 border-white shadow-2xl mx-auto mb-6 transition-transform duration-300 hover:scale-105"
                    />
                    <div className={`inline-block px-6 py-2 ${currentMember.dotColor} rounded-full text-white text-sm font-medium mb-4`}>
                      {currentMember.experience}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{currentMember.name}</h2>
                  <p className={`text-xl font-semibold ${currentMember.textColor} mb-6`}>
                    {currentMember.role}
                  </p>
                  
                  <button className={`${currentMember.buttonColor} text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    View Full Profile
                  </button>
                </div>
              </div>

              {/* Right Side - Detailed Information */}
              <div className="p-10 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Qualifications Section */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 ${currentMember.accentColor} rounded-xl mr-4`}>
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Key Qualifications</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base mb-6">
                      {currentMember.qualifications}
                    </p>
                  </div>

                  {/* Responsibilities Section */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 ${currentMember.accentColor} rounded-xl mr-4`}>
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Key Responsibilities</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {currentMember.keyRoles}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-4 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? `${teamMembers[currentSlide].dotColor} scale-125`
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Team Member Thumbnails */}
        <div className="flex justify-center mt-8 space-x-4">
          {teamMembers.map((member, index) => (
            <button
              key={member.id}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide ? 'scale-110' : 'scale-90 opacity-60 hover:opacity-80'
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
              />
              {index === currentSlide && (
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 ${member.dotColor} rounded-full`}></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Organization Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Organization</h3>
            <p className="text-xl text-gray-600">Dedicated professionals across all pharmaceutical disciplines</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-3">850+</div>
              <div className="text-gray-700 font-medium">Total Employees</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-3">125</div>
              <div className="text-gray-700 font-medium">Research Scientists</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl">
              <div className="text-4xl font-bold text-rose-600 mb-3">45</div>
              <div className="text-gray-700 font-medium">Department Managers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-3">200</div>
              <div className="text-gray-700 font-medium">Manufacturing Staff</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section - Updated to White */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Excellence in 
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"> Pharmaceutical</span>
            <br />Innovation
          </h3>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Our leadership team brings together decades of experience in drug development, regulatory affairs, and clinical research to advance breakthrough therapies that transform lives.
          </p>
          <button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-12 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PharmaTeamPage;