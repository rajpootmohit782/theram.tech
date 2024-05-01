import React from "react";

const Careers = () => {
  return (
    <section className="bg-white dark:bg-gray-900 bg-opacity-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Careers
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We're always looking for talented individuals to join our team.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 bg-opacity-50 p-4 rounded-lg shadow-lg">
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We currently do not have any new hiring opportunities available.
            However, we encourage you to check back soon for updates.
          </p>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            In the meantime, you can{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
              learn more about our company culture
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
              values
            </a>{" "}
            to see if we might be a good fit for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;