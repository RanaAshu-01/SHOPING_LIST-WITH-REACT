// componets/TermsOfService.jsx
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">
          Terms of Service
        </h1>

        <p className="mb-4 text-gray-700">
          Welcome to Shopping List! By accessing or using our website, you agree to comply with the following terms and conditions:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Use of Website:</strong> You must use the website for lawful purposes only and comply with all applicable laws.
          </li>
          <li>
            <strong>Account Responsibility:</strong> Users are responsible for maintaining the confidentiality of their account information.
          </li>
          <li>
            <strong>Product Information:</strong> We strive to provide accurate information but are not liable for errors or omissions.
          </li>
          <li>
            <strong>Purchases:</strong> All purchases are subject to our refund and return policies.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All content on this website, including images, text, and logos, is owned by Shopping List or its partners.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> Shopping List is not responsible for indirect or consequential damages resulting from the use of the website.
          </li>
          <li>
            <strong>Changes to Terms:</strong> We may update these terms at any time. Continued use of the website implies acceptance of updated terms.
          </li>
        </ol>

        <p className="mt-6 text-gray-700">
          If you have any questions regarding these terms, please <a href="/contact" className="text-green-500 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
