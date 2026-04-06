// componets/CommunityGuidelines.jsx
const guidelines = [
  {
    title: "Respect Others",
    description:
      "Always interact with other users respectfully. Harassment, offensive language, or bullying is strictly prohibited."
  },
  {
    title: "Honest Reviews",
    description:
      "Provide genuine feedback. Avoid posting fake reviews or misleading ratings to manipulate product perception."
  },
  {
    title: "No Spam",
    description:
      "Do not post repetitive content, irrelevant links, or advertisements. Keep discussions meaningful."
  },
  {
    title: "Protect Personal Info",
    description:
      "Do not share sensitive personal information such as passwords, bank details, or private addresses publicly."
  },
  {
    title: "Follow Legal Rules",
    description:
      "Abide by the laws of your region. Do not post or sell illegal products, or engage in illegal activities."
  }
];

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-10 xl:mt-0">
      <h1 className="text-4xl font-bold text-green-500 mb-8 text-center">Community Guidelines</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">How to Use Our Platform Responsibly</h2>

        <div className="space-y-6">
          {guidelines.map((guide, index) => (
            <div
              key={index}
              className="border-l-4 border-green-500 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h3>
              <p className="text-gray-700">{guide.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Report Violations</h2>
          <p className="text-gray-700">
            Agar aapko koi guideline violation dikhai de, to turant report karein using our support team at 
            <span className="text-green-500 font-semibold"> support@shoppinglist.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
