import React, { useState, useEffect } from "react";
import {
  Heart,
  Menu,
  X,
  Award,
  Users,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star,
} from "lucide-react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "qvd", label: "QVD" },
    { id: "gynec", label: "Gynec" },
    { id: "career", label: "Career" },
    { id: "contact", label: "Contact" },
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      org: "Quality Management",
      color: "bg-red-500",
    },
    {
      id: 2,
      name: "WHO-GMP",
      org: "Good Manufacturing Practice",
      color: "bg-orange-500",
    },
    {
      id: 3,
      name: "FDA Approved",
      org: "Food & Drug Administration",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="w-full bg-gradient-to-br from-pink-100 via-purple-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`space-y-8 transform transition-all duration-1000 ${
                  isVisible.home
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Pristino
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                      Pharma
                    </span>
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 font-medium">
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">
                      INNOVATE
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">
                      EDUCATE
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">
                      MEDICATE
                    </span>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  Transforming healthcare with innovative pharmaceutical
                  solutions. Committed to improving lives through quality
                  medicines and cutting-edge research.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                  >
                    Explore Products
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              <div
                className={`relative transform transition-all duration-1000 delay-300 ${
                  isVisible.home
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-4 right-4">
                    <Heart className="h-12 w-12 text-pink-400 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-6 gap-2 mt-8">
                    {Array.from({ length: 24 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${
                          i % 3 === 0
                            ? "bg-pink-400"
                            : i % 3 === 1
                            ? "bg-orange-400"
                            : "bg-purple-400"
                        } hover:scale-110 transition-transform duration-200 cursor-pointer`}
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: "fadeInUp 0.6s ease-out forwards",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.about
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gray-100 rounded-2xl p-12 h-full flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    INTRODUCTION
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 transform transition-all duration-1000 delay-300 ${
                isVisible.about
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">
                Welcome to Pristino Pharma, a trusted name in women's health and
                pharmaceutical care.
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are committed to developing high-quality, science-backed
                pharmaceutical solutions that make a meaningful difference in
                people's lives. Our innovative approach and dedication to
                excellence have made us a leader in the industry, designed to
                support women's well-being at every stage of life.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-pink-50 rounded-xl">
                  <div className="text-3xl font-bold text-pink-600">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section 
      <section id="qvd" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OUR EXPERTISE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`group transform transition-all duration-700 ${
                isVisible.qvd
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-80">
                <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Quality Assurance
                    </h3>
                    <p className="text-cyan-100 text-lg">
                      Welcome to Pristino Pharma, a trusted name in
                      pharmaceutical excellence. We are committed to developing
                      high-quality, science-backed pharmaceutical solutions.
                    </p>
                  </div>
                  <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ChevronRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`group transform transition-all duration-700 delay-300 ${
                isVisible.qvd
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-80">
                <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Patient Care
                    </h3>
                    <p className="text-gray-100 text-lg">
                      Welcome to Pristino Pharma, a trusted name in
                      patient-centered healthcare. We are committed to
                      developing high-quality, evidence-based pharmaceutical
                      solutions.
                    </p>
                  </div>
                  <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ChevronRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/*New Expertise*/}
      <section id="qvd" className="py-20 bg-gray-50">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OUR EXPERTISE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Patient Care",
                  description:
                    "Leveraging technology to enhance patient outcomes, we build intuitive platforms for medication management, remote care, and health data accessibility. Our solutions prioritize user experience and personalized engagement in every interaction. ",
                  image:
                    "https://th.bing.com/th/id/R.3c8e74e5872fce84d9025a805f513a5a?rik=eOVo4u8q%2fW0fQA&riu=http%3a%2f%2fwww.blogsnow.com%2fwp-content%2fuploads%2f2016%2f09%2fPatient-Care.jpg&ehk=i0HfEdt9ulUh03%2fB47ku7%2b2k08HbKX7BtnFl9sZRwkE%3d&risl=1&pid=ImgRaw&r=0",
                },
                {
                  title: "Quality Assurance",
                  description:
                    "We ensure the highest standards in software validation, compliance, and regulatory adherence for pharmaceutical solutions. Our QA processes are designed to deliver reliable, audit-ready systems that support patient safety and data integrity.",
                  image:
                    "https://eudaico.com/wp-content/uploads/2023/07/quality-assurance-pharmaceutical-supply-chain.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full min-h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl group relative transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-300"
                    />

                    {/* Very Subtle Black Overlay on Hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>

                  {/* Default State: White Background with Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-all duration-300 group-hover:opacity-0">
                    <h3 className="text-lg font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover State: No Background, Full Text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {/* Very subtle gradient only at bottom for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300"></div>

                    <h3 className="text-lg font-bold text-white relative z-10 shadow-text">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white relative z-10 mt-1 shadow-text">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="gynec" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CERTIFICATES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border-t-4 border-pink-500 transform hover:-translate-y-2 ${
                  isVisible.gynec
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center mr-4`}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{cert.org}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section
        id="career"
        className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              JOIN OUR TEAM
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Be part of our mission to transform healthcare. We're looking for
              passionate individuals who share our commitment to excellence and
              innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Research & Development",
                count: 5,
                color: "from-pink-500 to-purple-600",
              },
              {
                title: "Quality Control",
                count: 3,
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Manufacturing",
                count: 8,
                color: "from-green-500 to-teal-600",
              },
              {
                title: "Sales & Marketing",
                count: 6,
                color: "from-blue-500 to-indigo-600",
              },
            ].map((job, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 cursor-pointer transform hover:-translate-y-2 ${
                  isVisible.career
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`h-2 bg-gradient-to-r ${job.color} rounded-full mb-4`}
                ></div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.count} open positions</p>
                <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section 
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.contact
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to partner with us or learn more about our pharmaceutical
                solutions? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-600 rounded-full p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 rounded-full p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@pristinopharma.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">
                      Mumbai, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.contact
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={() =>
                      alert("Message sent! We will get back to you soon.")
                    }
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Footer */}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
