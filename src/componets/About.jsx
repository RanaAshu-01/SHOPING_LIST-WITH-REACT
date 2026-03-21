import React from "react";
import { Link } from "react-router-dom";
import { Chromium } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Hero Section */}
      <div className="bg-green-500 text-white py-20 flex flex-col items-center justify-center">
        <Chromium size={50} className="text-white mb-4" />
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-lg max-w-xl text-center">
          Welcome to Shopping List! We are committed to providing the best products and seamless shopping experience.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-around mt-12 px-6 md:px-20 gap-10">
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/2065410352/photo/young-sales-manager-in-home-electronics-store-expertly-manages-operations-using-tablet.jpg?s=2048x2048&w=is&k=20&c=o_lFtOWi9mGpQKA1h-C8oR5Sx0Fx0U26Yq2gZW-VW0o="
            alt="Our Team"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-gray-700 text-lg">
            Shopping List is your one-stop solution for electronics, fashion, books, and more. We believe in quality products, fast delivery, and excellent customer service.
          </p>
          <p className="text-gray-700 text-lg">
            Our mission is to make online shopping simple, safe, and enjoyable for everyone. Join thousands of satisfied customers who trust us for their everyday needs.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 px-6 md:px-20 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-600">We only provide products that meet the highest quality standards.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Trust</h3>
            <p className="text-gray-600">Customers trust us for transparency and reliable service.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">We constantly innovate to make your shopping experience better.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

