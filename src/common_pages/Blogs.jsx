// componets/Blog.jsx
const Blog = () => {
    const articles = [
        {
            id: 1,
            title: "Top 10 Shopping Trends of 2026",
            image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1080&auto=format&fit=crop",
            date: "Feb 1, 2026",
            author: "Admin",
            summary: "Discover the latest shopping trends that are shaping the way we buy products online and offline."
        },
        {
            id: 2,
            title: "How to Save Money While Shopping Online",
            image: "https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Jan 20, 2026",
            author: "Admin",
            summary: "Tips and tricks to get the best deals, coupons, and discounts while shopping on your favorite platforms."
        },
        {
            id: 3,
            title: "Sustainable Shopping: A Beginner's Guide",
            image: "https://plus.unsplash.com/premium_photo-1681755915233-9acafb348a7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 5, 2026",
            author: "Admin",
            summary: "Learn how to shop sustainably and make choices that are better for the environment and your wallet."
        },
        {
            id: 4,
            title: "Top 5 Gadgets to Buy This Year",
            image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 10, 2026",
            author: "Admin",
            summary: "Check out the most anticipated gadgets of the year that are making waves in tech and lifestyle."
        },
        {
            id: 5,
            title: "Fashion Trends That Are Back in Style",
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1080&auto=format&fit=crop",
            date: "Jan 15, 2026",
            author: "Admin",
            summary: "A detailed look at fashion trends from the past making a comeback this year."
        },
        {
            id: 1,
            title: "Top 10 Shopping Trends of 2026",
            image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1080&auto=format&fit=crop",
            date: "Feb 1, 2026",
            author: "Admin",
            summary: "Discover the latest shopping trends that are shaping the way we buy products online and offline."
        },
        {
            id: 2,
            title: "How to Save Money While Shopping Online",
            image: "https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Jan 20, 2026",
            author: "Admin",
            summary: "Tips and tricks to get the best deals, coupons, and discounts while shopping on your favorite platforms."
        },
        {
            id: 3,
            title: "Sustainable Shopping: A Beginner's Guide",
            image: "https://plus.unsplash.com/premium_photo-1681755915233-9acafb348a7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 5, 2026",
            author: "Admin",
            summary: "Learn how to shop sustainably and make choices that are better for the environment and your wallet."
        },
        {
            id: 4,
            title: "Top 5 Gadgets to Buy This Year",
            image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 10, 2026",
            author: "Admin",
            summary: "Check out the most anticipated gadgets of the year that are making waves in tech and lifestyle."
        },
        {
            id: 5,
            title: "Fashion Trends That Are Back in Style",
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1080&auto=format&fit=crop",
            date: "Jan 15, 2026",
            author: "Admin",
            summary: "A detailed look at fashion trends from the past making a comeback this year."
        },
        {
            id: 1,
            title: "Top 10 Shopping Trends of 2026",
            image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1080&auto=format&fit=crop",
            date: "Feb 1, 2026",
            author: "Admin",
            summary: "Discover the latest shopping trends that are shaping the way we buy products online and offline."
        },
        {
            id: 2,
            title: "How to Save Money While Shopping Online",
            image: "https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Jan 20, 2026",
            author: "Admin",
            summary: "Tips and tricks to get the best deals, coupons, and discounts while shopping on your favorite platforms."
        },
        {
            id: 3,
            title: "Sustainable Shopping: A Beginner's Guide",
            image: "https://plus.unsplash.com/premium_photo-1681755915233-9acafb348a7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 5, 2026",
            author: "Admin",
            summary: "Learn how to shop sustainably and make choices that are better for the environment and your wallet."
        },
        {
            id: 4,
            title: "Top 5 Gadgets to Buy This Year",
            image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 10, 2026",
            author: "Admin",
            summary: "Check out the most anticipated gadgets of the year that are making waves in tech and lifestyle."
        },
        {
            id: 5,
            title: "Fashion Trends That Are Back in Style",
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1080&auto=format&fit=crop",
            date: "Jan 15, 2026",
            author: "Admin",
            summary: "A detailed look at fashion trends from the past making a comeback this year."
        },
        {
            id: 1,
            title: "Top 10 Shopping Trends of 2026",
            image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1080&auto=format&fit=crop",
            date: "Feb 1, 2026",
            author: "Admin",
            summary: "Discover the latest shopping trends that are shaping the way we buy products online and offline."
        },
        {
            id: 2,
            title: "How to Save Money While Shopping Online",
            image: "https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Jan 20, 2026",
            author: "Admin",
            summary: "Tips and tricks to get the best deals, coupons, and discounts while shopping on your favorite platforms."
        },
        {
            id: 3,
            title: "Sustainable Shopping: A Beginner's Guide",
            image: "https://plus.unsplash.com/premium_photo-1681755915233-9acafb348a7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 5, 2026",
            author: "Admin",
            summary: "Learn how to shop sustainably and make choices that are better for the environment and your wallet."
        },
        {
            id: 4,
            title: "Top 5 Gadgets to Buy This Year",
            image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Feb 10, 2026",
            author: "Admin",
            summary: "Check out the most anticipated gadgets of the year that are making waves in tech and lifestyle."
        },
        {
            id: 5,
            title: "Fashion Trends That Are Back in Style",
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1080&auto=format&fit=crop",
            date: "Jan 15, 2026",
            author: "Admin",
            summary: "A detailed look at fashion trends from the past making a comeback this year."
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-green-500 mb-8 text-center">Our Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                                <p className="text-gray-500 text-sm mb-3">
                                    {article.date} • by {article.author}
                                </p>
                                <p className="text-gray-700 mb-4">{article.summary}</p>
                            </div>
                            <button className="mt-auto w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

          
        </div>
    );
};

export default Blog;
