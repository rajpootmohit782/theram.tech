import React from "react";
import Trusted from "./Trusted.jsx";
const AboutUsPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-8">
              At Ramtech, we are passionate about delivering the best marketing,
              web development, and cutting-edge technological solutions. Based
              in Delhi, India, we pride ourselves on our commitment to
              excellence and innovation.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With a dedicated team of experts, we specialize in providing a
              wide range of services, from web development to blockchain
              solutions and AI bots. Our goal is to help businesses thrive in
              the digital age by leveraging the power of technology to drive
              growth and success.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're looking to build a stunning website, implement
              advanced marketing strategies, or harness the potential of
              emerging technologies like blockchain and AI, Ramtech has the
              expertise and experience to exceed your expectations.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Partner with us today and take your business to new heights with
              Ramtech.
            </p>
          </div>
        </div>
      </div>
      <Trusted />
    </>
  );
};

export default AboutUsPage;
