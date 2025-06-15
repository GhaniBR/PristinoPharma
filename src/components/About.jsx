import React, { useState } from 'react';

// Professional mission and vision icons
const mission_image = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='65' viewBox='0 0 24 24' fill='none' stroke='%23c2185b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E";
const vision_image = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='65' viewBox='0 0 24 24' fill='none' stroke='%23c2185b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E";

function About_us() {
  const [activeValue, setActiveValue] = useState(null);
  
  const values = [
    {
      title: 'Patient First',
      description: 'We prioritize the well-being and safety of patients in everything we do.',
      icon: '👥'
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards and transparency in all operations.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'We constantly pursue new ideas and technologies to advance healthcare.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'We ensure every product meets the strictest standards of quality and safety.',
      icon: '⚡'
    }
  ];

  return (
    <div className="w-full min-h-screen font-sans bg-gray-50">
      
      {/* Header Section - Removed Background Pattern */}
      <header className="relative bg-white px-5 py-12 text-center overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-6 font-bold leading-tight">
            Pioneering the Future of 
            <span className="text-pink-600 block mt-2">Medicine</span>
          </h1>
          
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-600 leading-relaxed">
            At VitaPharm, we are dedicated to advancing healthcare through research-driven innovation and unwavering quality.
            Our mission is to develop safe, effective, and accessible medicines that improve patient outcomes globally.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap mb-6">
            <button className="group px-8 py-4 bg-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-pink-700 hover:scale-105 hover:shadow-xl transform">
              Explore Our Research
            </button>
            <button className="group px-8 py-4 bg-white text-pink-600 border-2 border-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-pink-600 hover:text-white hover:scale-105 hover:shadow-xl transform">
              Company Profile
            </button>
          </div>
          
          <button className="px-6 py-3 bg-orange-100 text-orange-700 border border-orange-300 rounded-full font-medium transition-all duration-300 hover:bg-orange-200 hover:scale-105 hover:shadow-lg">
            Leadership Team
          </button>
        </div>
      </header>

      {/* Enhanced Stats Section */}
      <section className="px-5 py-20 bg-pink-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-pink-200"></div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-pink-700 mb-4 text-center font-bold">
            Our Global Impact
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Making a difference in healthcare worldwide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-3xl shadow-xl p-10 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border-t-4 border-pink-400">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-5xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</h3>
              <p className="text-xl text-gray-600 font-medium">Dedicated Employees</p>
            </div>
            
            <div className="group bg-white rounded-3xl shadow-xl p-10 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border-t-4 border-orange-400">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-2xl">🧬</span>
              </div>
              <h3 className="text-5xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">120+</h3>
              <p className="text-xl text-gray-600 font-medium">Research Team</p>
            </div>
            
            <div className="group bg-white rounded-3xl shadow-xl p-10 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border-t-4 border-pink-500">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-5xl font-bold text-pink-700 mb-2 group-hover:scale-110 transition-transform duration-300">35+</h3>
              <p className="text-xl text-gray-600 font-medium">Global Markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section with Increased Width */}
      <section className="px-5 py-20 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-pink-700 mb-4 text-center font-bold">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 text-center mb-16 text-lg">
            Driving healthcare innovation with purpose and clarity
          </p>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Mission Card */}
            <div className="group bg-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-8 border-orange-400">
              <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <img src={mission_image} alt="Mission" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To discover, develop, and deliver effective pharmaceutical products through
                cutting-edge research, ethical practices, and a patient-centric approach that transforms lives.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="group bg-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-8 border-pink-400">
              <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <img src={vision_image} alt="Vision" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To be the world's most trusted pharmaceutical company, recognized for transforming healthcare
                through breakthrough innovations that make life-changing treatments accessible globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Core Values Section */}
      <section className="px-5 py-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-pink-700 mb-4 text-center font-bold">Our Core Values</h2>
          <p className="text-gray-600 text-center mb-16 text-lg">
            The principles that guide everything we do
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border-t-4 
                  ${index % 2 === 0 ? 'border-pink-500' : 'border-orange-500'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl
                  ${index % 2 === 0 ? 'bg-pink-100' : 'bg-orange-100'}`}>
                  {value.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-center
                  ${index % 2 === 0 ? 'text-pink-600' : 'text-orange-600'}`}>
                  {value.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-5 py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-pink-700 mb-4 text-center font-bold">Our Journey</h2>
          <p className="text-gray-600 text-center mb-16 text-lg">
            Milestones in our mission to transform healthcare
          </p>
          
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 via-orange-300 to-pink-400 h-full shadow-lg"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              
              {/* 2020 - Foundation Year */}
              <div className="relative flex items-center group">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-pink-50 rounded-3xl p-8 shadow-lg border-l-4 border-pink-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-pink-100">
                    <div className="flex justify-end mb-4">
                      <span className="bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-700 shadow-lg">
                        2020
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-pink-700 mb-4 transition-colors duration-300 group-hover:text-pink-800">Foundation Year</h3>
                    <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                      This was our foundation year, we drafted our Mission and Vision. Started our journey of 
                      Entrepreneurship in the field of Medicine. We launched sanitizers to help people maintain 
                      hygiene to deal with Covid.
                    </p>
                  </div>
                </div>
                
                {/* Animated Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-600 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-pink-700 group-hover:shadow-xl"></div>
                
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2021-2022 - Painkillers and Antacids */}
              <div className="relative flex items-center group">
                <div className="w-1/2 pr-8"></div>
                
                {/* Animated Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-orange-700 group-hover:shadow-xl"></div>
                
                <div className="w-1/2 pl-8">
                  <div className="bg-orange-50 rounded-3xl p-8 shadow-lg border-r-4 border-orange-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-orange-100">
                    <div className="flex justify-start mb-4">
                      <span className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-700 shadow-lg">
                        2021 - 2022
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-700 mb-4 transition-colors duration-300 group-hover:text-orange-800">Painkillers and Antacids</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                      Introduced our flagship products in Painkiller and Antacid category
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50">
                        <span className="font-semibold text-orange-600">Pristac-S</span>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50">
                        <span className="font-semibold text-orange-600">Pristac - MR</span>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50">
                        <span className="font-semibold text-orange-600">Pristacid - 40</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2022-2023 - Multivitamine */}
              <div className="relative flex items-center group">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-pink-50 rounded-3xl p-8 shadow-lg border-l-4 border-pink-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-pink-100">
                    <div className="flex justify-end mb-4">
                      <span className="bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-700 shadow-lg">
                        2022 - 2023
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-pink-700 mb-4 transition-colors duration-300 group-hover:text-pink-800">Multivitamine</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                      Introduced brand product in multivitamine category
                    </p>
                    <div className="flex justify-end">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-pink-50">
                        <span className="font-semibold text-pink-600">Prizfolate</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-600 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-pink-700 group-hover:shadow-xl"></div>
                
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2024 - Gynac Segment */}
              <div className="relative flex items-center group">
                <div className="w-1/2 pr-8"></div>
                
                {/* Animated Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-orange-700 group-hover:shadow-xl"></div>
                
                <div className="w-1/2 pl-8">
                  <div className="bg-orange-50 rounded-3xl p-8 shadow-lg border-r-4 border-orange-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-orange-100">
                    <div className="flex justify-start mb-4">
                      <span className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-700 shadow-lg">
                        2024
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-700 mb-4 transition-colors duration-300 group-hover:text-orange-800">Gynac Segment Expansion</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                      Came up with wide range of products to serve Gynac segment
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50">
                        <span className="font-semibold text-orange-600 text-sm">NoumaRest</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-75">
                        <span className="font-semibold text-orange-600 text-sm">Nouma-Sure</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-100">
                        <span className="font-semibold text-orange-600 text-sm">NaumaCare</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-150">
                        <span className="font-semibold text-orange-600 text-sm">Naumad-D</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-200">
                        <span className="font-semibold text-orange-600 text-sm">RubyPrist-XT</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-300">
                        <span className="font-semibold text-orange-600 text-sm">Pristargin-9</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-500">
                        <span className="font-semibold text-orange-600 text-sm">PRISTOGUT</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-700">
                        <span className="font-semibold text-orange-600 text-sm">PristoCare-Met</span>
                      </div>
                      <div className="bg-white px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-orange-50 delay-1000">
                        <span className="font-semibold text-orange-600 text-sm">Prexamet-MF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About_us;