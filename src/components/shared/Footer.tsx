import Image from "next/image";
import logo from "../../app/assets/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800  dark:bg-gray-800 dark:text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <Image
              src={logo}
              alt="TutorSphere Logo"
              width={150} // Increased logo size
              height={150}
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold">TutorSphere 🎓</h2>
          <p className="mt-2 text-gray-400 dark:text-gray-300">
            Connecting students with the best tutors to enhance their learning
            experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-blue-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-blue-400 transition-colors"
              >
                Browse Tutors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-blue-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 dark:border-gray-600 pt-4 text-gray-400 dark:text-gray-300">
        &copy; {new Date().getFullYear()} TutorSphere 🎓. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;