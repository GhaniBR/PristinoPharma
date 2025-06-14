import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-gray-700 py-16 px-6"
      style={{ backgroundColor: "#E2D0D6" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold italic mb-6">Pristino Pharma</h2>
            <address className="not-italic text-m leading-relaxed space-y-1">
              <p>Dudhane Complex,2nd floor,</p>
              <p>Behind DMart Road Sagaram Society,</p>
              <p>Dudhane Nagar, Sneha Ankit Colony, Karve Nagar, Pune</p>
              <p className="mt-3">Phone: 7066614024</p>
              <p>Email: sales@pristinopharma.com</p>
            </address>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                  aria-label={Icon.name}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right side links */}
          <div className="flex flex-col sm:flex-row lg:gap-40 gap-15 lg:pr-8">
            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-medium italic mb-4">Useful Links</h3>
              <ul className="space-y-2 text-m">
                {[
                  "Home",
                  "About us",
                  "Services",
                  "Terms of service",
                  "Privacy policy",
                ].map((text, idx) => (
                  <li key={idx}>
                    <a
                      href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                      className="hover:text-gray-600 italic transition"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}

            {/* Popular Items */}
            <div>
              <h3 className="text-xl font-medium italic mb-4">Our Products</h3>
              <ul className="space-y-2 text-m">
                {[
                  { label: "Butter croissants", id: "croissants" },
                  { label: "Classic cheesecake", id: "cheesecake" },
                  { label: "French macarons", id: "macarons" },
                  { label: "Artisan sourdough", id: "sourdough" },
                  { label: "Gourmet cupcakes", id: "cupcakes" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-gray-600 italic transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
