// componets/Career.jsx
const Career = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Careers at Shopping List</h1>
      
      <p className="text-lg text-gray-700 mb-4 text-center max-w-2xl">
        We’re always looking for talented individuals to join our team! Explore our open positions and be part of a fast-growing, innovative company.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
          <p className="text-gray-600 mb-4">Work on building beautiful and responsive UI for our e-commerce platform.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Apply Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
          <p className="text-gray-600 mb-4">Develop and maintain server-side logic and APIs.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Apply Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Marketing Specialist</h3>
          <p className="text-gray-600 mb-4">Drive marketing campaigns and engage with our audience online.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;
