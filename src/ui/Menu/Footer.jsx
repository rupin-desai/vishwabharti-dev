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
                alt="GSK Consulting Logo"
                className="h-24 md:h-24"
              />
            </Link>
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Your trusted partner in consulting and project management.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                  <Link to="#">Business & Management Consulting</Link>
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                  <Link to="#">Project Management Services</Link>
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                  <Link to="#">Customized Solutions</Link>
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                  <Link to="#">Strategic Planning</Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-2 text-indigo-600 flex-shrink-0"
                />
                <span className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                  <a href="tel:+9193226 06890">(+91) 93226 06890</a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-sky-600 flex-shrink-0" />
                <span className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                  <a href="mailto:info@gskconsulting.com">
                    info@gskconsulting.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 text-teal-600 flex-shrink-0 mt-1"
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
            © {new Date().getFullYear()} GSK Consulting. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
