import React, { useState } from 'react';
import { Search, User, Menu, X, ArrowRight, Star, MapPin, Clock, Users, Code, BarChart3, Palette, Monitor, DollarSign, Zap, Building2, HeartHandshake, TrendingUp, Shield, Globe, Briefcase } from 'lucide-react';

const CareerPortal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState('All');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);

  const jobFunctions = [
    { 
      name: 'All', 
      icon: Users, 
      count: 150,
      image: '👥',
      bgColor: 'from-purple-400 to-purple-600'
    },
    { 
      name: 'Engineering', 
      icon: Code, 
      count: 45,
      image: '⚙️',
      bgColor: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'Marketing', 
      icon: BarChart3, 
      count: 32,
      image: '📊',
      bgColor: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Design', 
      icon: Palette, 
      count: 28,
      image: '🎨',
      bgColor: 'from-pink-500 to-rose-600'
    },
    { 
      name: 'Data Science', 
      icon: Monitor, 
      count: 25,
      image: '📈',
      bgColor: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Finance', 
      icon: DollarSign, 
      count: 20,
      image: '💰',
      bgColor: 'from-yellow-500 to-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      image: '👩‍💻',
      quote: 'A terrific place to grow your career with amazing opportunities and supportive colleagues.',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      role: 'Product Manager',
      image: '👨‍💼',
      quote: 'The innovative culture and work-life balance here is absolutely fantastic.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'UX Designer',
      image: '👩‍🎨',
      quote: 'Working here has been genuinely transformative for my professional development.',
      rating: 5
    }
  ];

  const whyWorkWithUs = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Collaborative Culture',
      description: 'Work alongside passionate professionals in a supportive environment that values every voice.',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Accelerate your career with mentorship programs, skill development, and leadership opportunities.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Comprehensive Benefits',
      description: 'Enjoy health insurance, retirement plans, flexible PTO, and wellness programs designed for you.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Make a difference on a global scale with projects that shape the future of healthcare.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Be at the forefront of technology and innovation with access to cutting-edge tools and resources.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Modern Workspace',
      description: 'Work in state-of-the-art facilities designed to inspire creativity and collaboration.',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Engineer',
      department: 'Engineering',
      location: 'New York',
      type: 'Full-time',
      postedDate: 'May 15, 2024',
      salary: '$120k - $150k',
      description: 'We are looking for a Senior Engineer to join our dynamic team...',
      requirements: [
        '5+ years of experience in software development',
        'Proficiency in React, Node.js, and cloud technologies',
        'Strong problem-solving skills and attention to detail',
        'Excellent communication and teamwork abilities'
      ]
    },
    {
      id: 2,
      title: 'Technical Expert',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      postedDate: 'May 10, 2024',
      salary: '$130k - $160k',
      description: 'Join our technical team as an expert in emerging technologies...',
      requirements: [
        '7+ years of experience in technical leadership',
        'Deep expertise in system architecture and design',
        'Experience with AI/ML technologies',
        'Proven track record of mentoring junior developers'
      ]
    }
  ];

  const JobPostingsPage = () => (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8D5C4 0%, #D4B5A0 100%)' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
            <div className="relative z-10">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                INFORMATION
                <br />
                TECHNOLOGY
              </h1>
              <div className="w-20 h-1 bg-white/30 mt-8"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="SEARCH BY KEYWORD"
                className="w-full px-4 py-3 border border-amber-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200">
              SEARCH
            </button>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            Showing 2 of 2 results:
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Posted: {job.postedDate}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900 mb-2">{job.salary}</div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none mb-6">
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex-1 sm:flex-none"
                    onClick={() => setSelectedJob(job)}
                  >
                    Apply Now
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
                    Save Job
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: 'linear-gradient(135deg, #D4B5A0 0%, #C8A688 100%)' }} className="py-16 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">PRISTINO PHARMA</h3>
              <div className="flex space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Pages</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:text-amber-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">News</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:text-amber-600 transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Manufacturing</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Distribution</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:text-amber-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  if (currentPage === 'jobs') {
    return <JobPostingsPage />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F5F0E8 0%, #E8D5C4 100%)' }}>
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Pristino</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Careers</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">News</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Careers</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">News</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unleash Your Career
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                Potential
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join a team that values innovation, growth, and making a real impact. Discover opportunities that align with your passion.
            </p>
            <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Explore Careers
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              WHY WORK WITH US
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our workplace exceptional and why top talent chooses to build their careers with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #E8D5C4 0%, #D4B5A0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by keyword..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80"
                  />
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-200 shadow-lg">
                Search Jobs
              </button>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">View Jobs By Function</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {jobFunctions.map((func, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFunction(func.name)}
                  className={`group p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedFunction === func.name
                      ? 'border-purple-500 bg-purple-50 shadow-lg'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${func.bgColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {func.image}
                  </div>
                  <div className="text-sm font-bold text-gray-900 mb-1">{func.name}</div>
                  <div className="text-xs text-gray-500">{func.count} jobs</div>
                </button>
              ))}
            </div>

            <div className="text-center mb-8">
              <button 
                onClick={() => setCurrentPage('jobs')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                View All Job Postings
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            EMPLOYEE TESTIMONIALS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'linear-gradient(135deg, #D4B5A0 0%, #C8A688 100%)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">PRISTINO PHARMA</span>
              </div>
              <p className="text-gray-700 mb-4">
                Building the future of healthcare through innovation and excellence.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
              </div>
            </div>
            
            {['Company', 'Products', 'Resources'].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-4">{section}</h4>
                <ul className="space-y-2">
                  {['About', 'Careers', 'Press', 'Blog'].map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-amber-200 mt-12 pt-8 text-center text-gray-700">
            <p>&copy; 2025 Pristino Pharma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerPortal;