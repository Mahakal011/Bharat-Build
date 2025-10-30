import { Link } from "react-router-dom";
import logo from "../assets/Images/logo/Logo1.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-6 mt-10  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Logo or Brand Name */}
        <div className="border-t border-gray-300 p-5">
          <div className="flex items-center mb-2">
            <img
              src={logo}
              alt="MyWebsite Logo"
              className="h-18 w-18 mr-2 object-contain"
            />
            <h2 className="text-2xl font-bold text-black">District Performance Portal</h2>
          </div>
          <p className="text-sm text-black">
            Helping users with reliable information and services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-300 p-5">
          <h3 className="text-lg font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="hover:text-blue-600 transition">
                Help
              </Link>
            </li>
            <li>
              <Link to="/reachus" className="hover:text-blue-600 transition">
                Reach Us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-600 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/policies" className="hover:text-blue-600 transition">
                Website Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-300 p-5">
          <h3 className="text-lg font-semibold text-black mb-3">Contact Us</h3>
          <p className="text-sm text-black">
            Email:{" "}
            <a
              href="mailto:nothpy01@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nothpy01@gmail.com
            </a>
          </p>
          <p className="text-sm mt-2 text-black">
            Address: Jasola, Industrial area , Sout East Delhi, India - 110076
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-black">
        © {new Date().getFullYear()} Nothpy. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer