// componets/SafetyCenter.jsx
const safetyTips = [
  {
    title: "Protect Your Account",
    description:
      "Use a strong and unique password. Enable two-factor authentication to keep your account secure."
  },
  {
    title: "Secure Payments",
    description:
      "Always use trusted payment gateways. Never share your card details outside the official checkout process."
  },
  {
    title: "Avoid Scams",
    description:
      "Be cautious of phishing emails, fake links, or suspicious offers. Verify before clicking or providing personal info."
  },
  {
    title: "Product Authenticity",
    description:
      "Buy from verified sellers. Check reviews and ratings before purchasing any product."
  },
  {
    title: "Privacy Settings",
    description:
      "Manage your personal information in your account settings. Limit what is publicly visible."
  }
];

const SafetyCenter = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-8 text-center">Safety Center</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tips to Stay Safe While Shopping Online</h2>

        <div className="space-y-6">
          {safetyTips.map((tip, index) => (
            <div
              key={index}
              className="border-l-4 border-green-500 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
          <p className="text-gray-700">
            If you encounter any safety issues or suspicious activity, contact our support team at 
            <span className="text-green-500 font-semibold"> support@shoppinglist.com</span> or call 
            <span className="text-green-500 font-semibold"> +91-12345-67890</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyCenter;
