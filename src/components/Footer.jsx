import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 bg-opacity-50">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              About RamTech Solutions
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="/aboutus" className=" hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Connect with Us
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              RamTech Solutions
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About Our Solutions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Case Studies
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  RamTech App for iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  RamTech App for Android
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <Logo /> */}
            {/* RamTech Solutions */}
            <a href="/" className="flex items-center">
              <img
                src="/zz1.png"
                className="h-12 w-auto mr-10"
                alt="Logo"
                style={{ background: "transparent" }}
              />
              {/* <Logo /> */}
            </a>
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2021-2022 RamTech Solutions™. All Rights Reserved. Designed and
            Developed by{" "}
            <a
              href="https://flowbite.com"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              RamTech Solutions{" "}
            </a>{" "}
            {/* and{" "}
            <a
              href="https://tailwindcss.com"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a> */}
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.031-.195 1.86-.465 2.427-.405.99-1.062 1.744-1.772 2.238-.636.336-1.363.529-2.427.58-1.057.048-1.387.06-4.042.06-.088 0-.199-.012-.332-.012-2.345 0-2.697-.013-3.722-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.049-1.057-.06-1.387-.06-4.043v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.026-.048 1.378-.06 3.723-.06.133 0 .244.012.332.012z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
