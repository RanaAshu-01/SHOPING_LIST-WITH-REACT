import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {

    const liStyle = "hover:text-yellow-600 transition duration-300 cursor-pointer";
    const SocialStyle = "hover:text-green-600 transition duration-300 cursor-pointer transform hover:scale-105";

    return (

        <div className="w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-4 pb-20 xl:pb-0">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  ms-16">

                <div>
                    <h3 className="font-bold text-lg mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li className={liStyle}>
                            <Link to="/about" className="hover:underline">
                                About Us
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/career" className="hover:underline">
                                Careers
                            </Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/press" className="hover:underline">Press</Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/blog" className="hover:underline">Blog</Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-bold text-lg mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li className={liStyle}>
                            <Link to="/help" className="hover:underline">Help Center</Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/safety" className="hover:underline">Safety Center</Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/community" className="hover:underline">Community Guidelines</Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/contact" className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-bold text-lg mb-3">Services</h3>
                    <ul className="space-y-2">
                        <li className={liStyle}>
                            <Link to="/shipping" className="hover:underline">Shipping</Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/returns" className="hover:underline">Returns</Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/order-tracking" className="hover:underline">Order Tracking</Link>
                        </li>
                        <li className={liStyle}>
                            <Link to="/gift-cards" className="hover:underline">Gift Cards</Link>
                        </li>

                    </ul>
                </div>


                <div>
                    <h3 className="font-bold text-lg mb-3">Legal</h3>
                    <ul id='all' className="space-y-2 ">
                        <li className={liStyle}>
                            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                        </li>
                        <li className={liStyle}>
                            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className={liStyle}>
                            <a href="/cookie-policy" className="hover:underline">Cookie Policy</a>
                        </li>

                        <li className={liStyle}>
                            <a href="/licenses" className="hover:underline">Licenses</a>
                        </li>

                    </ul>
                </div>
            </div>

            <div className=" flex justify-between gap-4 mb-10 mt-10">

                <div className='flex items-center gap-4'>
                    <div className='text-2xl'>🛍️</div>
                    <h2 className="text-3xl font-bold leading-tight">
                        <span className="text-5xl text-green-500">S</span>HOP <br />
                        <span className="text-4xl">Zone</span>
                    </h2>
                </div>

                <div className='flex items-end mb-5 me-3 gap-x-3'>
                    <a href="https://www.instagram.com/ashu_rana079?igsh=MWx5dTZkODBzemhvcg%3D%3D&utn_source=qr" target="_blank" rel="noopener noreferrer">
                        <Instagram className={SocialStyle} />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <Linkedin className={SocialStyle} />
                    </a>
                    <a href="https://www.facebook.com/ashu.rana.73932" target="_blank" rel="noopener noreferrer">
                        <Facebook className={SocialStyle} />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <Twitter className={SocialStyle} />
                    </a>
                </div>
            </div>


            <div className="w-full text-center text-gray-400 mt-3">
                © 2026 Shopping List. All rights reserved.
            </div>
        </div>
    );
};



export default Footer


