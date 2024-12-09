
import Link from 'next/link';
import React from "react";

const Footerr = () => {
  return (
    <footer className="bg-white text-black py-10 h-[488px] w-full">
      <div className="container mx-auto px-4">
        {/* Footer flex layout */}
        <div className="flex flex-wrap justify-between space-x-4">

          {/* Company Info */}
          <div className="flex-1 min-w-[180px]">
            <h1 className="text-lg sm:text-xl font-bold text-black mb-3">Company Info</h1>
            <ul className="text-xs sm:text-sm text-[#737373] space-y-2">
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/carrier">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="/we-are-hiring">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1 min-w-[180px]">
            <h1 className="text-lg sm:text-xl font-bold text-black mb-3">Legal</h1>
            <ul className="text-xs sm:text-sm text-[#737373] space-y-2">
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/carrier">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="/we-are-hiring">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="flex-1 min-w-[180px]">
            <h1 className="text-lg sm:text-xl font-bold text-black mb-3">Features</h1>
            <ul className="text-xs sm:text-sm text-[#737373] space-y-2">
              <li>
                <Link href="/business-marketing">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link href="/user-analytic">
                  User Analytic
                </Link>
              </li>
              <li>
                <Link href="/live-chat">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link href="/unlimited-support">
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1 min-w-[180px]">
            <h1 className="text-lg sm:text-xl font-bold text-black mb-3">Resources</h1>
            <ul className="text-xs sm:text-sm text-[#737373] space-y-2">
              <li>
                <Link href="/ios-android">
                  IOS & Android
                </Link>
              </li>
              <li>
                <Link href="/watch-a-demo">
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link href="/customers">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/apis">
                  APIs
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex-1 min-w-[180px]">
            <h1 className="text-lg sm:text-xl font-bold text-black mb-3">Get In Touch</h1>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-2/3 sm:w-1/2 md:w-1/3 text-gray-800 rounded text-xs"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-xs">Subscribe</button>
            </div>
            <p className="text-xs sm:text-sm text-[#737373] mt-2">
              Subscribe to our newsletter and stay updated!
            </p>
          </div>

        </div>

        {/* Footer bottom text aligned to the left */}
        <div className="flex justify-start mt-6 text-xs sm:text-sm text-[#737373]">
          <p>Made with Love By Finland. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footerr;
