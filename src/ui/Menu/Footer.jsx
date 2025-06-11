import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src="/logos/logo_full.png"
                alt="Vishwabharti Logo"
                className="h-24 md:h-24"
              />
            </Link>
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Empowering your journey through comprehensive driver
              apprenticeship programs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 hover:text-theme-primary">
                  <Link to="/learn">Learn & Training</Link>
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-theme-primary">
                  <Link to="/program">Program Overview</Link>
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-theme-primary">
                  <Link to="/book">Book Training</Link>
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-theme-primary">
                  <Link to="/contact">Contact Us</Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-primary">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-2 text-theme-primary flex-shrink-0"
                />
                <span className="text-gray-600 hover:text-theme-primary">
                  <a href="tel:+9193226 06890">(+91) 93226 06890</a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-2 text-theme-accent flex-shrink-0"
                />
                <span className="text-gray-600 hover:text-theme-primary">
                  <a href="mailto:info@vishwabharti.com">
                    info@vishwabharti.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 text-theme-success flex-shrink-0 mt-1"
                />
                <span className="text-gray-600">
                  Sector 12, Kharghar, Navi Mumbai,
                  <br />
                  Maharashtra, India- 410210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} Vishwabharti. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
