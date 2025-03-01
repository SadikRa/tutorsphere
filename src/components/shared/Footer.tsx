import Image from "next/image";
import logo from "../../app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <div>
            <Image
              src={logo}
              alt="TutorSphere Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold">TutorSphere 🎓</h2>
          <p className="mt-2 text-gray-400">
            Connecting students with the best tutors to enhance their learning
            experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Browse Tutors
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-gray-400">
        &copy; {new Date().getFullYear()} TutorSphere 🎓. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
