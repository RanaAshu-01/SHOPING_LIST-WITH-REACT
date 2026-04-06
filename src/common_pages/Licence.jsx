// componets/Licenses.jsx
const Licence = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6 mt-10 xl:mt-0">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">
          Licenses
        </h1>

        <p className="mb-4 text-gray-700">
          This page provides information about the licenses used in our products, software, and content on Shopping List. We respect the rights of creators and ensure all materials are used according to proper licensing agreements.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          1. Software Licenses
        </h2>
        <p className="text-gray-700 mb-2">
          We use several open-source and proprietary software packages in our platform. All software licenses are respected and followed according to their terms.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>React:</strong> MIT License</li>
          <li><strong>Tailwind CSS:</strong> MIT License</li>
          <li><strong>Lucide Icons:</strong> MIT License</li>
          <li><strong>React Router:</strong> MIT License</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          2. Content Licenses
        </h2>
        <p className="text-gray-700 mb-2">
          Images and other media used on this website are either licensed for commercial use, used with permission, or fall under free-to-use licenses.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          3. Third-Party Licenses
        </h2>
        <p className="text-gray-700 mb-2">
          Some third-party tools, services, and content used by Shopping List may be subject to their respective licenses. Users are encouraged to review these licenses when using our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          4. Contact
        </h2>
        <p className="text-gray-700">
          For questions regarding licenses or to report any issues, please <a href="/contact" className="text-green-500 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default Licence;
