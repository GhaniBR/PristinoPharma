import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("home");
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Blog data matching your images
  const blogs = [
    {
      id: 1,
      title: "Care in Pregnancy",
      category: "Care in Pregnancy",
      date: "February 17, 2023",
      excerpt:
        "Pregnancy is a critical time for both the mother and the developing baby. Proper care during this period can lead to healthier outcomes for both. Here are some essential aspects of care in pregnancy:",
      image: "../images/related2.jpg",
      content: {
        sections: [
          {
            title: "1. Prenatal Care",
            points: [
              "Schedule regular check-ups with a healthcare provider.",
              "Monitor baby's growth through ultrasounds and other tests.",
              "Discuss concerns with a healthcare professional.",
            ],
          },
          {
            title: "2. Nutrition",
            points: [
              "Eat a balanced diet: fruits, vegetables, whole grains, lean protein.",
              "Take prenatal vitamins, especially folic acid.",
              "Avoid fish, unpasteurized products, and excessive caffeine.",
            ],
          },
          {
            title: "3. Exercise",
            points: [
              "Engage in walking or swimming unless advised otherwise.",
              "Avoid high-risk activities or contact sports.",
              "Listen to your body and rest as needed.",
            ],
          },
          {
            title: "4. Mental Health",
            points: [
              "Monitor emotional well-being and seek help if needed.",
              "Practice yoga, breathing exercises, or meditation.",
              "Talk openly with loved ones.",
            ],
          },
          {
            title: "5. Avoiding Harmful Substances",
            points: [
              "Say no to tobacco, alcohol, and recreational drugs.",
              "Consult doctors before taking any medication.",
              "Avoid toxic environments.",
            ],
          },
          {
            title: "6. Education and Support",
            points: [
              "Attend prenatal classes.",
              "Build a strong support network.",
              "Stay informed with reliable resources.",
            ],
          },
        ],
        conclusion:
          "Attentive care promotes the well-being of both mother and baby. Consult your doctor regularly and create a supportive environment for a healthy pregnancy.",
      },
    },
    {
      id: 2,
      title: "Care in Pregnancy",
      category: "Care in Pregnancy",
      date: "February 17, 2023",
      excerpt:
        "Pregnancy is a critical time for both the mother and the baby throughout the gestation period and during labour.",
      image: "/images/related4.jpg",
      content: {
        sections: [
          {
            title: "Medical Care During Pregnancy",
            points: [
              "Regular monitoring in clinical settings",
              "Professional healthcare guidance",
              "Proper medical supervision throughout pregnancy",
            ],
          },
        ],
        conclusion:
          "Professional medical care ensures the safety of both mother and child during pregnancy.",
      },
    },
    {
      id: 3,
      title: "Types of agreements in pharmaceutical industry",
      category: "Types of agreements in pharmaceutical industry",
      date: "May 15, 2023",
      excerpt:
        "There are various types of agreements in pharmaceutical industry. Licensing agreements are fundamental in the pharmaceutical sector, especially in industry like India.",
      image: "/images/related1.jpg",
      content: {
        sections: [
          {
            title: "Pharmaceutical Industry Agreements",
            points: [
              "Licensing agreements for drug development",
              "Research and development partnerships",
              "Manufacturing and distribution contracts",
            ],
          },
        ],
        conclusion:
          "Understanding various agreements is crucial for pharmaceutical industry operations.",
      },
    },
    {
      id: 4,
      title: "Types of agreements in pharmaceutical industry",
      category: "Types of agreements in pharmaceutical industry",
      date: "May 15, 2023",
      excerpt:
        "Types of agreements in pharmaceutical industry. There are various licensing agreements are fundamental in the pharmaceutical sector especially in industry like India.",
      image: "/images/related3.jpg",
      content: {
        sections: [
          {
            title: "Industry Collaboration",
            points: [
              "Partnership agreements between companies",
              "Regulatory compliance frameworks",
              "Quality assurance protocols",
            ],
          },
        ],
        conclusion:
          "Collaborative agreements drive innovation in the pharmaceutical sector.",
      },
    },
  ];

  // Related posts data
  const relatedPosts = [
    {
      id: 1,
      title: "Blog Title Product title what Client say (50-100 words)",
      date: "Published date day-year Client say (50-100 words)",
      image: "/images/related1.jpg",
    },
    {
      id: 2,
      title: "Blog Title Product title what Client say (50-100 words)",
      date: "Published date day-year Client say (50-100 words)",
      image: "/images/related2.jpg",
    },
    {
      id: 3,
      title: "Blog Title Product title what Client say (50-100 words)",
      date: "Published date day-year Client say (50-100 words)",
      image: "/images/related3.jpg",
    },
    {
      id: 4,
      title: "Blog Title Product title what Client say (50-100 words)",
      date: "Published date day-year Client say (50-100 words)",
      image: "/images/related4.jpg",
    },
    {
      id: 5,
      title: "Blog Title Product title what Client say (50-100 words)",
      date: "Published date day-year Client say (50-100 words)",
      image: "/images/related5.jpg",
    },
    {
      id: 6,
      title: "Blog Title Product title what Client say (50-100 words)",
      date: "Published date day-year Client say (50-100 words)",
      image: "/images/related6.jpg",
    },
  ];

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setCurrentView("article");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedBlog(null);
  };

  // Home Page Component
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        <h1 className="text-pink-800 text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 uppercase tracking-widest text-left">
          BLOGS
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 sm:h-52 lg:h-56 object-cover"
              />
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-2">
                  {blog.category}
                </div>
                <div className="text-gray-500 text-xs mb-3">{blog.date}</div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {blog.excerpt}
                </p>
                <button
                  onClick={() => navigate("/article", { state: { blog } })}
                  className="ml-6 bg-[#CD8855] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#B6794C] transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
                >
                  Read More
                </button>
                {/*<button
                  onClick={() => navigate("/article", { state: { blog } })}
                  className="bg-yellow-600 hover:bg-pink-800 text-white border-none py-2.5 px-5 rounded-full text-xs font-bold cursor-pointer uppercase tracking-wider transition-colors duration-300"
                >
                  Read More
                </button>*/}
              </div>
            </div>
          ))}
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-gray-800 text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-10 lg:mb-12 text-left">
            Related articles or posts
          </h2>

          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
            {relatedPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 sm:h-44 lg:h-48 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h4>
                  <div className="text-gray-500 text-xs">{post.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {relatedPosts.slice(3, 6).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 sm:h-44 lg:h-48 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h4>
                  <div className="text-gray-500 text-xs">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );

  // Article Page Component

  // Main render logic
};

export default Blog;
