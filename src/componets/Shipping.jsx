// componets/Shipping.jsx
const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">Shipping Information</h1>

        <p className="text-gray-700 mb-4">
          We strive to deliver your orders as quickly as possible. Here’s what you need to know about our shipping policies:
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">1. Processing Time</h2>
            <p className="text-gray-600">
              All orders are processed within 1-2 business days. You will receive a confirmation email once your order has shipped.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">2. Shipping Methods & Costs</h2>
            <p className="text-gray-600">
              We offer Standard and Express shipping options. Costs vary depending on weight and destination. Free shipping is available for orders above $50.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">3. Delivery Time</h2>
            <p className="text-gray-600">
              Standard shipping: 3-7 business days <br />
              Express shipping: 1-3 business days
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">4. Tracking Your Order</h2>
            <p className="text-gray-600">
              Once your order is shipped, you will receive a tracking number via email. Use it to monitor your shipment online.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-1">5. International Shipping</h2>
            <p className="text-gray-600">
              We currently ship to selected countries. Additional customs duties may apply based on your country’s regulations.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6">
          Thank you for choosing Shopping List! 🛒
        </p>
      </div>
    </div>
  );
};

export default Shipping;
