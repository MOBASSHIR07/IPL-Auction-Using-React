import React from 'react';
import FooterLogo from '../../assets/logo-footer.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#0c0c1d] text-white pt-16 px-4 sm:px-8 md:px-16 relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto pt-32 pb-10"> {/* Added padding-top to make space for newsletter card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Logo Center */}
          <div className="col-span-1 flex justify-center items-start sm:col-span-2 md:col-span-1">
            <img src={FooterLogo} alt="Cricket Logo" className="w-24" />
          </div>

          {/* Subscribe Again */}
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md border-none w-full bg-white text-black placeholder-gray-400"
              />
              <button className="px-4 py-2 rounded-r-md bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-6 text-gray-500 text-sm">
        ©2024 Your Company All Rights Reserved.
      </div>

      {/* Newsletter Card - Positioned to overlap */}
      <div className="absolute left-0 right-0 top-0 transform -translate-y-1/2 px-4 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-100 to-orange-100 text-black rounded-2xl p-8 sm:p-10 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
          <p className="mb-6 text-sm sm:text-base">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md border outline-none w-full sm:w-2/3 bg-white text-black placeholder-gray-400"
            />
            <button className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;