// componets/PrivacyPolicy.jsx
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6 mt-10 xl:mt-0">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-700">
          At Shopping List, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Personal details like name, email, phone number, and address.</li>
          <li>Account information and login credentials.</li>
          <li>Payment and transaction details.</li>
          <li>Browsing data such as pages visited, search queries, and preferences.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>To provide and improve our services.</li>
          <li>To process orders and deliver products.</li>
          <li>To communicate important updates, offers, and promotions.</li>
          <li>To personalize your experience on our website.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          3. Data Sharing and Disclosure
        </h2>
        <p className="text-gray-700 mb-2">
          We do not sell your personal information. However, we may share your data with trusted third-party service providers for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Payment processing</li>
          <li>Shipping and delivery services</li>
          <li>Website analytics and marketing tools</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          4. Security Measures
        </h2>
        <p className="text-gray-700 mb-2">
          We implement industry-standard security measures to protect your data. This includes encrypted connections, secure servers, and restricted access to personal information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          5. Your Rights
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Access your personal data stored on our platform.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Request deletion of your account and personal information.</li>
          <li>Opt out of marketing emails and promotional content.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          6. Cookies and Tracking
        </h2>
        <p className="text-gray-700 mb-2">
          Our website uses cookies to enhance user experience, track preferences, and gather anonymous data for analytics. You can manage cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          7. Changes to Privacy Policy
        </h2>
        <p className="text-gray-700 mb-2">
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the updated date. Continued use of the website indicates acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy, please <a href="/contact" className="text-green-500 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
