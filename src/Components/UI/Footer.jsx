import footerData from "../../api/footerData.json";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#212121] text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Links Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
                {section.title}
              </h2>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Social Media Section */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
              FOLLOW THE FLOCK
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Exclusive offers, a heads up on new things, and sightings of
              Allbirds in the wild. Oh, we have cute sheep, too. #allbirds
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-xl sm:text-2xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-xl sm:text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-xl sm:text-2xl"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © 2024 Allbirds, Inc. All Rights Reserved.{" "}
            <span className="whitespace-nowrap">
              <a href="#" className="hover:text-white hover:underline">Terms</a> •{" "}
              <a href="#" className="hover:text-white hover:underline">Privacy</a> •{" "}
              <a href="#" className="hover:text-white hover:underline">Accessibility</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
