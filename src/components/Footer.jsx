import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <img
              src="/assets/ts_logo.jpg"
              alt="Turing Sapiens Logo"
              className="h-10 mb-4"
            />
            <p className="text-sm leading-relaxed">
              Turing Sapiens is a student-driven technical club focused on
              building strong foundations in software, systems, and emerging
              technologies through hands-on learning and collaboration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/events" className="hover:text-white transition">
                  Events
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-white transition">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm">
              Connect With Us
            </h3>

            <p className="text-sm mb-4">
              Manipal University Jaipur<br />
              Bagru, Jaipur – 303007
            </p>

            <a
              href="mailto:turing@muj.manipal.edu"
              className="text-sm text-[#20b2a2] hover:underline"
            >
              turing@muj.manipal.edu
            </a>

            <div className="flex space-x-5 mt-6 text-xl">
              {/* Replace links below */}
              <a
                href="INSTAGRAM_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="WHATSAPP_GROUP_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <span>
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline text-white">
              TURING SAPIENS™
            </a>
            . All Rights Reserved.
          </span>

          <span className="mt-3 sm:mt-0 text-gray-500">
            Built by the Turing Sapiens Tech Team
          </span>
        </div>
      </div>
    </footer>
  );
}
