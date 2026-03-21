
// componets/HelpCenter.jsx
import { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Browse the products, add items to your cart, and proceed to checkout. Enter your shipping and payment details to complete the order."
  },
  {
    question: "Can I track my order?",
    answer: "Yes! Once your order is placed, you will receive a tracking link via email and in your account dashboard."
  },
  {
    question: "What are the payment options?",
    answer: "We accept credit/debit cards, UPI, net banking, and popular e-wallets."
  },
  {
    question: "How do I return a product?",
    answer: "Go to your orders, select the item, and click 'Return'. Follow the instructions for a hassle-free return."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact us via email at support@shoppinglist.com or call us at +91-12345-67890."
  },
];

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-8 text-center">Help Center</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 bg-gray-200 hover:bg-gray-300 flex justify-between items-center font-semibold"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="text-green-500 font-bold">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="px-4 py-3 text-gray-700 bg-gray-50">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Need more help?</h2>
          <p className="text-gray-700">
            Contact our support team via email at <span className="text-green-500 font-semibold">support@shoppinglist.com</span> or call us at <span className="text-green-500 font-semibold">+91-12345-67890</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
