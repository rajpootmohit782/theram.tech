import React, { useState } from "react";

const FrequentQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {/* Question 1 */}
            <h3 id="accordion-flush-heading-1">
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeQuestion === 1 ? "text-gray-900 bg-white border-b border-gray-200" : "text-gray-500 border-b border-gray-200 dark:border-gray-700"} dark:text-gray-400 dark:text-white`}
                onClick={() => handleToggleQuestion(1)}
              >
                <span>
                  Can Ramtech assist with digital marketing strategies?
                </span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 rotate-${activeQuestion === 1 ? "180" : "0"} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-1"
              className={activeQuestion === 1 ? "" : "hidden"}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, Ramtech specializes in creating comprehensive digital
                  marketing strategies tailored to your business needs. Our team
                  can help you develop strategies for SEO, social media, email
                  marketing, PPC advertising, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Reach out to us to discuss how we can elevate your digital
                  marketing efforts.
                </p>
              </div>
            </div>
            {/* Question 2 */}
            <h3 id="accordion-flush-heading-2">
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeQuestion === 2 ? "text-gray-900 bg-white border-b border-gray-200" : "text-gray-500 border-b border-gray-200 dark:border-gray-700"} dark:text-gray-400 dark:text-white`}
                onClick={() => handleToggleQuestion(2)}
              >
                <span>Does Ramtech offer website development services?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 rotate-${activeQuestion === 2 ? "180" : "0"} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-2"
              className={activeQuestion === 2 ? "" : "hidden"}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Absolutely! Ramtech offers professional website development
                  services. Whether you need a simple business website, an
                  e-commerce platform, or a custom web application, our
                  experienced team can bring your vision to life.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Let's discuss your project requirements and create a stunning
                  website for your business.
                </p>
              </div>
            </div>
            {/* Question 3 */}
            <h3 id="accordion-flush-heading-3">
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeQuestion === 3 ? "text-gray-900 bg-white border-b border-gray-200" : "text-gray-500 border-b border-gray-200 dark:border-gray-700"} dark:text-gray-400 dark:text-white`}
                onClick={() => handleToggleQuestion(3)}
              >
                <span>
                  What are the benefits of investing in Ramtech's SEO services?
                </span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 rotate-${activeQuestion === 3 ? "180" : "0"} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-3"
              className={activeQuestion === 3 ? "" : "hidden"}
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Investing in Ramtech's SEO services can significantly boost
                  your website's visibility on search engines, leading to
                  increased organic traffic, higher rankings, and improved brand
                  recognition.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Our SEO experts employ proven strategies to optimize your
                  website's performance and help you achieve your business
                  goals.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <h3 id="accordion-flush-heading-4">
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeQuestion === 4 ? "text-gray-900 bg-white border-b border-gray-200" : "text-gray-500 border-b border-gray-200 dark:border-gray-700"} dark:text-gray-400 dark:text-white`}
                onClick={() => handleToggleQuestion(4)}
              >
                <span>
                  Can Ramtech assist with content creation and marketing?
                </span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 rotate-${activeQuestion === 4 ? "180" : "0"} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-4"
              className={activeQuestion === 4 ? "" : "hidden"}
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, Ramtech offers comprehensive content creation and
                  marketing services. Our team of skilled writers, designers,
                  and marketers can develop engaging content for your website,
                  blog, social media, email campaigns, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We can help you create a content strategy, produce
                  high-quality content, and promote it effectively to reach your
                  target audience.
                </p>
              </div>
            </div>

            {/* Question 5 */}
            <h3 id="accordion-flush-heading-5">
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${activeQuestion === 5 ? "text-gray-900 bg-white border-b border-gray-200" : "text-gray-500 border-b border-gray-200 dark:border-gray-700"} dark:text-gray-400 dark:text-white`}
                onClick={() => handleToggleQuestion(5)}
              >
                <span>
                  Does Ramtech provide analytics and reporting for digital
                  marketing campaigns?
                </span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 rotate-${activeQuestion === 5 ? "180" : "0"} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-5"
              className={activeQuestion === 5 ? "" : "hidden"}
              aria-labelledby="accordion-flush-heading-5"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Absolutely! Ramtech provides comprehensive analytics and
                  reporting for all digital marketing campaigns. We track key
                  performance metrics such as website traffic, conversion rates,
                  engagement, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Our detailed reports help you understand the effectiveness of
                  your campaigns and make data-driven decisions to optimize your
                  marketing efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
