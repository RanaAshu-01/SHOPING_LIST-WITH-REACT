// componets/Returns.jsx
const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">Returns & Refunds</h1>

        <p className="text-gray-700 mb-4">
          We want you to be completely satisfied with your purchase. Here’s our returns policy:
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">1. Return Window</h2>
            <p className="text-gray-600">
              You can return items within 14 days of delivery. Ensure the products are in original condition with tags intact.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">2. How to Return</h2>
            <p className="text-gray-600">
              Contact our support team via email or the Contact Us page. They will provide you a return label and instructions.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">3. Refunds</h2>
            <p className="text-gray-600">
              Refunds will be processed within 5-7 business days after we receive the returned items. The refund will be issued to your original payment method.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">4. Damaged or Wrong Items</h2>
            <p className="text-gray-600">
              If you receive a damaged or incorrect product, contact us immediately. We will replace it at no extra cost.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">5. Exclusions</h2>
            <p className="text-gray-600">
              Certain products, such as perishable items or personalized products, are non-returnable. Check the product page for details.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6">
          Thank you for shopping with Shopping List! 🛒
        </p>
      </div>
    </div>
  );
};

export default Returns;
