// componets/Press.jsx
const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Shopping List launches new mobile app",
      date: "Jan 10, 2026",
      description: "Our new app is designed to give users a seamless shopping experience anytime, anywhere."
    },
    {
      id: 2,
      title: "Shopping List partners with GreenPay",
      date: "Feb 1, 2026",
      description: "We partnered with GreenPay to make online payments faster and more secure for our customers."
    },
    {
      id: 3,
      title: "Shopping List wins 'Best Startup 2026'",
      date: "Feb 20, 2026",
      description: "Awarded for innovation and user experience in e-commerce solutions."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Press & News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {pressReleases.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm mb-3">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Press;
