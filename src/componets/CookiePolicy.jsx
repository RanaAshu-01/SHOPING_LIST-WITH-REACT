// componets/CookiePolicy.jsx
const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">
          Cookie Policy
        </h1>

        <p className="mb-4 text-gray-700">
          At Shopping List, we use cookies to enhance your browsing experience and improve our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding them.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          1. What Are Cookies?
        </h2>
        <p className="text-gray-700 mb-2">
          Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, login information, and other browsing activities.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          2. Types of Cookies We Use
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Essential Cookies:</strong> Required for the website to function properly.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us understand how users interact with our site for improvement.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember user preferences and settings.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          3. How We Use Cookies
        </h2>
        <p className="text-gray-700 mb-2">
          Cookies allow us to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Remember your login and preferences</li>
          <li>Analyze website performance and usage trends</li>
          <li>Provide personalized content and marketing</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          4. Your Choices
        </h2>
        <p className="text-gray-700 mb-2">
          You can control and manage cookies through your browser settings. You may choose to block or delete cookies, but this may affect the functionality of some parts of the website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          5. Third-Party Cookies
        </h2>
        <p className="text-gray-700 mb-2">
          Some cookies may be set by third-party services such as analytics and advertising partners. These cookies help us improve user experience and deliver relevant ads.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          6. Updates to Cookie Policy
        </h2>
        <p className="text-gray-700 mb-2">
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with the updated date. Continued use of the website indicates acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-700">
          For any questions regarding our Cookie Policy, please <a href="/contact" className="text-green-500 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
